import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  BackHandler,
  Image,
  RefreshControl,
  Text,
  View
} from 'react-native';
import { HeaderRight, Screen, Spinner } from '../../Components';
import { BASE_URL } from '../../Config/Api';
import { useAppDispatch, useAppSelector } from '../../Hooks';
import { CourseApiUtil, useGetPermissionsQuery } from '../../RTK/Api/CourseApi';
import {
  UserApiUtil,
  useCurrentCoursesQuery,
  useUpNextClassesQuery,
  useUserDetailQuery
} from '../../RTK/Api/UserApi';
import { userInfoSelector } from '../../Selectors/UserSelector';
import { Images } from '../../Themes';
import { ComingLecture, CoursesList, PendingTasks } from './components';
import styles from './styles';

const Home = (props: any) => {
  const { t } = useTranslation('home');
  const [refresh, setRefresh] = useState(false);

  const userInfo: any = useAppSelector(userInfoSelector);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {
    data: permissionData,
    refetch: permissionRefetch,
    isFetching: permissionFetch
  } = useGetPermissionsQuery({});
  const {
    data,
    isError: userInfoError,
    isLoading: userLoading,
    isFetching: userFetching,
    refetch: refetchUser
  } = useUserDetailQuery('p');

  const {
    isLoading: coursesLoading,
    isFetching: coursesFetching,
    isError: isCoursesError,
    data: coursesData,
    error: coursesError,
    refetch: refetchCurrentCourses
  } = useCurrentCoursesQuery('c');

  const {
    isLoading: upNextLoading,
    isFetching: upNextFetching,
    isError: upNextError,
    data: upNextLecture,
    refetch: refetchUpNext
  } = useUpNextClassesQuery('u');

  const isLoading = useMemo(
    () => coursesLoading || userLoading || upNextLoading,
    [coursesLoading, userLoading, upNextLoading]
  );

  const isFetching = useMemo(
    () => coursesFetching || userFetching || upNextFetching || permissionFetch,
    [coursesFetching, userFetching, upNextFetching, permissionFetch]
  );

  useEffect(() => {
    navigation?.setOptions({
      headerRight: () => <HeaderRight setRefresh={setRefresh} />
    });
  }, [userInfo]);

  useFocusEffect(
    React.useCallback(() => {
      if (props.route.params?.from === 'Profile' && !refresh) {
        console.debug('COMES');
        dispatch(UserApiUtil.resetApiState());
        dispatch(CourseApiUtil.resetApiState());
        setRefresh(true);
      }
    }, [props, refresh])
  );
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert(
          t('exitApp'),
          undefined,
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            {
              text: 'Yes',
              onPress: () => BackHandler.exitApp()
            }
          ],
          {
            cancelable: true
          }
        );
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  useEffect(() => {
    return () => {
      dispatch(UserApiUtil.resetApiState());
      dispatch(CourseApiUtil.resetApiState());
    };
  }, []);

  const onRefresh = () => {
    refetchUser();
    refetchCurrentCourses();
    refetchUpNext();
    permissionRefetch();
  };
  if (isLoading) {
    return <Spinner />;
  }

  console.debug(upNextLecture)

  return (
    <Screen>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
        }>
        <View style={styles.topContainer}>
          <View style={styles.topLeft}>
            <Text style={styles.body}>{t('welcome')}</Text>
            <Text style={styles.heading}>{userInfo?.name}</Text>
          </View>
          <Image source={Images.welcomeImg} style={styles.welcomeImage} />
        </View>
        <View style={styles.bottomContainer}>
          <PendingTasks />
          <View style={styles.upNextContainer}>
            <Text style={styles.sectionHeading}>{t('upNext')}</Text>
            {!upNextLecture ? (
              <Text>{t('noUpcomingLectures')}</Text>
            ) : (
              <View style={{ borderRadius: 10 }}>
                <ComingLecture
                  label={upNextLecture?.class_name}
                  instructorName={upNextLecture?.teacher}
                  instructorProfile={`${BASE_URL}${upNextLecture?.teacher_dp}`}
                  startTime={upNextLecture?.from_time}
                  endTime={upNextLecture?.to_time}
                  roomNo={upNextLecture?.room}
                  date={upNextLecture?.date}
                />
              </View>
            )}
          </View>

          <View style={styles.currentCoursesContainer}>
            <Text style={styles.sectionHeading}>{t('currentCourses')}</Text>
            <CoursesList permission={permissionData} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Screen>
  );
};

export default memo(Home);
