import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  ActivityCalendar,
  AddClassActivity,
  AddNewTeachingSection,
  AddQuestion,
  AttendanceRegister,
  AwardList,
  ChangePasswordPage,
  ClassAssistants,
  ClassStudent,
  ClassTimetable,
  CommentForum,
  ComplaintChat,
  ComplaintUserDetail,
  Complaints,
  ConductQuiz,
  CourseBreadth,
  CourseDetails,
  CoursesPage,
  CreateSurvey,
  Forums,
  GPAAttainmentGraph,
  HomePage,
  LoginPage,
  MarkGPA,
  NewActivity,
  Notification,
  PLOAttainment,
  PLOGraph,
  Profile,
  ProfileDetail,
  ResourcesPage,
  SLO,
  SLOAttainment,
  SLOGraph,
  SLORelationship,
  SingleAct,
  Survey,
  Teaching,
  TeachingDetail,
  TimetablePage,
  UpdateCourse,
  VideoMaterial,
  VideoPlayer,
  ViewAttendance
} from '../Containers';
import { Colors } from '../Themes';

import { useTranslation } from 'react-i18next';
import { CoursesIcon, HomeIcon, TimetableIcon } from '../Assets/SVGs';
import Backs from '../Assets/SVGs/Backs';
import Complaint from '../Assets/SVGs/Complaint';
import { CoursesHeaderTitle, HeaderBackButton } from '../Components';
import AttendanceDetails from '../Containers/AttendanceDetails';
import SingleClassAttendanceView from '../Containers/SingleClassAttendanceView';
import { useAppSelector } from '../Hooks';
import { useGetPermissionsQuery } from '../RTK/Api/CourseApi';
import { IsAuthenticatedSelector } from '../Selectors/AuthSelector';
import { COMPLAINT, VIEW } from '../Types/Constants';
const Stack = createStackNavigator<PrimaryStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();
const HomeStack = createStackNavigator<HomeStackParamList>();
const CoursesStack = createStackNavigator<CoursesStackParamList>();
const ComplaintStack = createStackNavigator<ComplaintStackParamList>();

const HomeStackNavigator = () => {
  const { t } = useTranslation('myCourses');
  const commonOptions = {
    headerLeft: () => <HeaderBackButton />
  };
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTitleStyle: { color: Colors.black }
      }}>
      <HomeStack.Screen name="Home" component={HomePage} />
      <HomeStack.Screen
        name="ChangePasswordPage"
        component={ChangePasswordPage}
        options={{
          ...commonOptions,
          headerTitle: 'Change Password'
        }}
      />

      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => null, // Hide the back button for this screen
        }}
      />

      <HomeStack.Screen
        name="ProfileDetails"
        component={ProfileDetail}
      />

      <HomeStack.Screen
        name="CourseDetails"
        component={CourseDetails}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title={t('course')} />
        }}
      />

      <HomeStack.Screen
        name="AttendanceDetails"
        component={AttendanceDetails}
        options={{
          ...commonOptions,
          headerTitle: 'Attendance Details',
          headerTitleStyle: { color: '#475569' }
        }}
      />
      <HomeStack.Screen
        name="AttendanceRegister"
        component={AttendanceRegister}
        options={{
          ...commonOptions,
          headerTitle: 'Attendance Register'
        }}
      />
    </HomeStack.Navigator>
  );
};

const ComplaintStackNavigator = () => {
  const commonOptions = {
    headerLeft: () => <HeaderBackButton />
  };
  return (
    <ComplaintStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: Colors.backgroundWhite },
        headerTitleStyle: { color: Colors.black }
      }}
      initialRouteName={'Complaint'}>

    <ComplaintStack.Screen
        name="Complaint"
        component={Complaints}
      />

    <ComplaintStack.Screen
        name="ComplaintChat"
        component={ComplaintChat}
        options={{
          ...commonOptions,
          headerTitle: '',
          headerStyle: {
          
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#ECECEC',
          },
        }}

        
      />

    <ComplaintStack.Screen
        name="ComplaintUserDetail"
        component={ComplaintUserDetail}
        options={{
          headerShown: false,
        }}
      />
      
      </ComplaintStack.Navigator>
  )
}

const CoursesStackNavigator = () => {
  const { t } = useTranslation('myCourses');
  const { t: courseDetailsTranslations } = useTranslation('courseDetails');
  const commonOptions = {
    headerLeft: () => <HeaderBackButton />
  };
  return (
    <CoursesStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: Colors.backgroundWhite },
        headerTitleStyle: { color: Colors.black }
      }}
      initialRouteName={'Courses'}>
      <CoursesStack.Screen
        name="Courses"
        component={CoursesPage}
        options={{
          headerTitle: () => <CoursesHeaderTitle title={t('courses')} />
        }}
      />

      <CoursesStack.Screen
        name="NewActivity"
        component={NewActivity}
        options={{
          ...commonOptions,
          headerTitle: 'Class Activity'
        }}
      />
      <CoursesStack.Screen
        name="MarkGPA"
        component={MarkGPA}
        options={{
          ...commonOptions,
          headerTitle: 'MarkGPA'
        }}
      />
      <CoursesStack.Screen
        name="AwardList"
        component={AwardList}
        options={{
          ...commonOptions,
          headerTitle: 'Award List'
        }}
      />
      <CoursesStack.Screen
        name="ViewAttendace"
        component={ViewAttendance}
        options={{
          ...commonOptions,
          headerTitle: ''
        }}
      />
      <CoursesStack.Screen
        name="GPAAttainmentGraph"
        component={GPAAttainmentGraph}
        options={{
          ...commonOptions,
          headerTitle: 'GPA Attainment Graph'
        }}
      />
      <CoursesStack.Screen
        name="ConductQuiz"
        component={ConductQuiz}
        options={{
          ...commonOptions,
          headerTitle: 'Conduct Quiz'
        }}
      />
      <CoursesStack.Screen
        name="ActivityCalendar"
        component={ActivityCalendar}
        options={{
          ...commonOptions,
          headerTitle: 'Activity Calendar'
        }}
      />
      <CoursesStack.Screen
        name="SLORelationship"
        component={SLORelationship}
        options={{
          ...commonOptions,
          headerTitle: 'SLO Relationship'
        }}
      />
      <CoursesStack.Screen
        name="CourseBreadth"
        component={CourseBreadth}
        options={{
          ...commonOptions,
          headerTitle: 'Course Breadth'
        }}
      />
      <CoursesStack.Screen
        name="Teaching"
        component={Teaching}
        options={{
          ...commonOptions,
          headerTitle: 'Teaching Section'
        }}
      />

      <CoursesStack.Screen
        name="SLO"
        component={SLO}
        options={{
          ...commonOptions,
          headerTitle: 'SLO'
        }}
      />

      <CoursesStack.Screen
        name="SLOAttainment"
        component={SLOAttainment}
        options={{
          ...commonOptions,
          headerTitle: 'SLO Attainment'
        }}
      />
      <CoursesStack.Screen
        name="PLOAttainment"
        component={PLOAttainment}
        options={{
          ...commonOptions,
          headerTitle: 'PLO Attainment'
        }}
      />
      <CoursesStack.Screen
        name="SLOGraph"
        component={SLOGraph}
        options={{
          ...commonOptions,
          headerTitle: 'SLO Graph'
        }}
      />

      <CoursesStack.Screen
        name="PLOGraph"
        component={PLOGraph}
        options={{
          ...commonOptions,
          headerTitle: 'PLO Graph'
        }}
      />
      <CoursesStack.Screen
        name="VideoMaterial"
        component={VideoMaterial}
        options={{
          ...commonOptions,
          headerTitle: 'Video Material'
        }}
      />
      <CoursesStack.Screen
        name="TeachingDetail"
        component={TeachingDetail}
        options={{
          ...commonOptions,
          headerTitle: 'Teaching Detail'
        }}
      />

      <CoursesStack.Screen
        name="AddNewTeachingSection"
        component={AddNewTeachingSection}
        options={{
          ...commonOptions,
          headerTitle: 'New Section'
        }}
      />

      <CoursesStack.Screen
        name="CourseDetails"
        component={CourseDetails}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title={t('course')} />
        }}
      />

      <CoursesStack.Screen
        name="UpdateCourseDetails"
        component={UpdateCourse}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title={t('course')} />
        }}
      />

      <CoursesStack.Screen
        name="AddClassActivity"
        component={AddClassActivity}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title="Add Class Activity" />
        }}
      />

      <CoursesStack.Screen
        name="ClassStudent"
        component={ClassStudent}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title="Class Student" />
        }}
      />
      <CoursesStack.Screen
        name="ClassAssistants"
        component={ClassAssistants}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title="Class Assistants" />
        }}
      />
      <CoursesStack.Screen
        name="Survey"
        component={Survey}
        options={{
          ...commonOptions,
          headerLeft: props => <Backs style={{ marginLeft: 19 }} {...props} />
        }}
      />
      <CoursesStack.Screen
        name="CreateSurvey"
        component={CreateSurvey}
        options={{
          ...commonOptions,
          headerLeft: props => <Backs style={{ marginLeft: 19 }} {...props} />
        }}
      />

      <CoursesStack.Screen
        name="Forums"
        component={Forums}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title="Forum" />
        }}
      />

      <CoursesStack.Screen
        name="Classtimetable"
        component={ClassTimetable}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title="Class timetable" />
        }}
      />
      <CoursesStack.Screen
        name="CommentForum"
        component={CommentForum}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title="Forum" />
        }}
      />

      <CoursesStack.Screen
        name="SingeAct"
        component={SingleAct}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title="Activity Detail" />
        }}
      />

      <CoursesStack.Screen
        name="AddQuestion"
        component={AddQuestion}
        options={{
          ...commonOptions,
          headerTitle: () => <CoursesHeaderTitle title="Add Question" />
        }}
      />

      <CoursesStack.Screen
        name="Resources"
        options={{
          ...commonOptions
        }}
        component={ResourcesPage}
      />

      <CoursesStack.Screen
        name="AttendanceDetails"
        component={AttendanceDetails}
        options={{
          ...commonOptions,
          headerTitle: 'Attendance Details',
          headerTitleStyle: { color: '#475569' }
        }}
      />
      <CoursesStack.Screen
        name="SingleClassAttendanceView"
        component={SingleClassAttendanceView}
        options={{
          ...commonOptions,
          headerTitle: 'Attendance',
          headerTitleStyle: { color: '#475569' }
        }}
      />

      <CoursesStack.Screen
        name="AttendanceRegister"
        component={AttendanceRegister}
        options={{
          ...commonOptions,
          headerTitle: 'Attendance Register'
        }}
      />

      <CoursesStack.Screen
        name="Notification"
        component={Notification}
        options={{
          ...commonOptions,
          headerTitle: 'Notification'
        }}
      />

      <CoursesStack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={commonOptions}
      />
    </CoursesStack.Navigator>
  );
};

function Dashboard() {
  const { t } = useTranslation('home');
  const {
    data: permissionData,
    refetch: permissionRefetch,
    isFetching: permissionFetch
  } = useGetPermissionsQuery({});
  const showComplaintsTab = permissionData?.some(
    (permission: any) =>
      permission.option_type === COMPLAINT && permission.action === VIEW
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: Colors.backgroundWhite },
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.iconGrey,
        tabBarStyle: {
          backgroundColor: Colors.backgroundWhite
        }
      }}
      backBehavior="initialRoute">
      <Tab.Screen
        name="CoursesStack"
        options={{
          tabBarIcon: ({ focused }) => (
            <CoursesIcon width={24} active={focused} />
          ),
          tabBarLabel: 'Courses'
        }}
        component={CoursesStackNavigator}
      />
      <Tab.Screen
        name="HomeStack"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => <HomeIcon width={24} active={focused} />,
          headerTitle: t('home')
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="Timetable"
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <TimetableIcon width={24} active={focused} />
          )
        }}
        component={TimetablePage}
      />
      {showComplaintsTab ? (
        <Tab.Screen
          name="Complaint"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Complaint width={24} active={focused} />
            )
          }}
          component={ComplaintStackNavigator}
        />
      ) : null}
    </Tab.Navigator>
  );
}

export function PrimaryNavigator() {
  const isAuthenticated: boolean = useAppSelector(IsAuthenticatedSelector);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      {isAuthenticated ? (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false
          }}
        />
      )}
    </Stack.Navigator>
  );
}

export const exitRoutes: string[] = ['welcome'];
