import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, ScrollView, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { GenericMessage, NoResults, Screen, Spinner } from '../../Components';
import {
  useClassActivitiesQuery,
  useCourseDetailsQuery
} from '../../RTK/Api/CourseApi';
import {
  CourseActivities,
  CourseInfo,
  Header,
  StudentCourseRecord
} from './components';
import CourseModal from './components/CourseModal';
import ListFaculty from './components/ListFaculty';
import RightClickHeader from './components/RightClickHeader';
import styles from './styles';
const CourseDetails = () => {
  const { t } = useTranslation('courseDetails');
  const { t: errorsTranslations } = useTranslation('errors');
  const navigation = useNavigation();
  const { params } = useRoute();

  // @ts-ignore
  const course = params?.course;
  // @ts-ignore
  const student =
    course.studentcount != undefined
      ? course?.studentcount
      : course?.studentCount;
  // @ts-ignore
  const classDays =
    course?.classDays != undefined ? course?.classDays : course?.classDaysCount;
  // @ts-ignore
  const Permission: PermissionList[] = params?.permission;
  const id = course?.id;

  const { refetch, isLoading, isFetching, isError, data } =
    useCourseDetailsQuery({
      id: course?.id || 0
    });

  const {
    refetch: ActivityRefetch,
    isLoading: ActivityLoading,
    isFetching: ActivityFetching,
    isError: ActivityError,
    data: ActivityData
  } = useClassActivitiesQuery({
    id: course?.id || 0
  });
  const [clicked, setClicked] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const changeHeaderTitle = () => {
    navigation.setOptions({
      headerTitle: () => <Header />
    });
  };

  const changeRight = () => {
    navigation?.setOptions({
      headerRight: () => <RightClickHeader id={id} permission={Permission} />
    });
  };

  const onRefresh = () => {
    refetch();
  };

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch])
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    changeHeaderTitle();
    changeRight();
    setIsModalVisible(isError);
    refetch();
  }, [isError]);

  if (isLoading || isFetching || ActivityFetching || ActivityLoading) {
    return <Spinner />;
  }

  if (isError && isModalVisible) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          setIsModalVisible(false);
          navigation.goBack();
        }}
      />
    );
  }

  if (ActivityError && isModalVisible) {
    return (
      <GenericMessage
        title={errorsTranslations('somethingWentWrong')}
        onClosePress={() => {
          setIsModalVisible(false);
          navigation.goBack();
        }}
      />
    );
  }

  const groupActivitiesByType = (activities: Activity[]) => {
    const groupedActivities: { [key: string]: Activity[] } = {};
    activities.forEach(activity => {
      const activityType = activity.activity_type;
      if (!groupedActivities[activityType]) {
        groupedActivities[activityType] = [];
      }
      groupedActivities[activityType].push(activity);
    });
    return groupedActivities;
  };

  // Inside the component, after fetching the activities data
  const groupedActivities = groupActivitiesByType(
    ActivityData?.activities || []
  );

  return (
    <Screen>
      <ScrollView>
        <CourseInfo
          course={course}
          id={id}
          data={ActivityData}
          permission={Permission}
        />

        <Surface style={styles.studentCourseContainer}>
          <StudentCourseRecord
            id={id}
            student={student}
            activity={ActivityData?.activities.length}
            classes={classDays}
            clicked={clicked}
            setClicked={setClicked}
            modalVisible={modal}
            setModalVisible={setModal}
          />
        </Surface>
        <ListFaculty
          course={course}
          id={id}
          permission={Permission}
          activitylength={ActivityData?.activities.length}
        />
        <FlatList
          style={{ marginBottom: 10 }}
          data={Object.entries(groupedActivities)}
          keyExtractor={item => item[0]} // Use the activity_type as the key
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={false} />
          }
          ListEmptyComponent={() => (
            <View style={styles.noResults}>
              <NoResults message={'No activity found'} />
            </View>
          )}
          renderItem={({ item }) => {
            const [activityType, activities] = item;
            let renderedActivityType = false;

            return (
              <>
                {activities.map((activity, index) => {
                  const activityTypeElement = !renderedActivityType ? (
                    <CourseActivities
                      activity={activityType}
                      activities={activities}
                    />
                  ) : null;
                  if (!renderedActivityType) {
                    renderedActivityType = true;
                  }

                  return (
                    <>
                      {activityTypeElement}
                      <View />
                    </>
                  );
                })}
              </>
            );
          }}
        />
      </ScrollView>

      {clicked ? (
        <CourseModal
          modalVisible={modal}
          setModalVisible={setModal}
          setClicked={setClicked}
          data={data}
        />
      ) : null}
    </Screen>
  );
};

export default CourseDetails;
