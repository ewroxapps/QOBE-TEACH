import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, RefreshControl, View } from 'react-native';
import { NoResults, Screen, Spinner } from '../../Components';
import { useGetPermissionsQuery } from '../../RTK/Api/CourseApi';
import { useAllCoursesQuery } from '../../RTK/Api/UserApi';
import { sanitizeSearch } from '../../Utils/QueryUtils';
import { CourseDetailsModal, CurrentCourse, SearchBox } from './components';
import styles from './styles';

const Courses = () => {
  const {
    isError,
    isLoading,
    isFetching,
    data: userCourses,
    refetch
  } = useAllCoursesQuery({});
  const { t } = useTranslation('myCourses');
  const { data: permissionData, refetch:permissionRefetch, isFetching:permissionFetch } = useGetPermissionsQuery({});
  const [allCourses, setAllCourses] = useState<ICourse[]>(
    userCourses ? Object.values(userCourses) : []
  );

  const [coursesToDisplay, setCoursesToDisplay] = useState<
    ICourse[] | undefined
  >(allCourses);

  useEffect(() => {
    if (userCourses) {
      setAllCourses(Object.values(userCourses));
      setCoursesToDisplay(Object.values(userCourses));
    }
  }, [userCourses]);


  const [selectedCourse, setSelectedCourse] = useState<ICourse>();
  const [modalVisible, setModalVisible] = useState(false);

  const searchCourses = (searchString: string) => {
    if (searchString && searchString.length > 0) {
      const queryString = sanitizeSearch(searchString).toLowerCase();
      const searchedCourses = allCourses?.filter((course: ICourse) =>
        course?.course?.toLowerCase().includes(queryString)
      );
      setCoursesToDisplay(searchedCourses);
    } else {
      setCoursesToDisplay(allCourses);
    }
  };

  const onRefresh = () => {
    searchCourses('');
    refetch();
    permissionRefetch()
  };

  if (isLoading || isFetching || permissionFetch) {
    return <Spinner />;
  }

  return (
    <Screen>
      <View style={styles.topContainer} />
      <SearchBox
              searchCourses={searchCourses}
              numberOfCourses={coursesToDisplay?.length}
            />
      <FlatList
        style={styles.container}
        data={coursesToDisplay}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={false} />
        }
        ListEmptyComponent={() => (
          <View style={styles.noResults}>
            <NoResults message={t('noRegisteredCourses')} />
          </View>
        )}
        ListHeaderComponent={() => (
       
          <>
          </>
    
        )}
        renderItem={({ item }) => (
          <CurrentCourse
            course={item}
            setModalVisible={setModalVisible}
            setSelectedCourse={setSelectedCourse}
          />
        )}
      />

      {modalVisible ? (
        <CourseDetailsModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          course={selectedCourse}
          permission={permissionData}
        />
      ) : null}
    </Screen>
  );
};

export default Courses;
