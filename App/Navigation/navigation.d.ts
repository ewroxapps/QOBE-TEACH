type CompositeScreenProps<T, R> =
  import('@react-navigation/native').CompositeScreenProps<T, R>;
type NavigatorScreenParams<T> =
  import('@react-navigation/native').NavigatorScreenParams<T>;
type RouteProp<T, R> = import('@react-navigation/native').RouteProp<T, R>;
type ParamListBase =
  import('@react-navigation/routers/src/types').ParamListBase;
type StackNavigationProp<T, R> =
  import('@react-navigation/stack').StackNavigationProp<T, R>;
type StackScreenProps<T, R> =
  import('@react-navigation/stack').StackScreenProps<T, R>;
type BottomTabScreenProps<T, R> =
  import('@react-navigation/bottom-tabs').BottomTabScreenProps<T, R>;
type urlStringProp = {
  url: string;
} 
type HomeTabParamList = {
  HomeStack: undefined;
  CoursesStack: undefined;
  Timetable: undefined;
  Complaint:undefined 
};

type PrimaryStackParamList = { 
  Home: undefined
  Dashboard: NavigatorScreenParams<HomeTabParamList>;
  Login: undefined;
};
type ShowImageParamList = {
  Url: undefined;
};
type QOBEStackParamList={
  QOBE:undefined
}
type HomeStackParamList = {
  Home: {
    from:string
  };
  ChangePasswordPage: undefined;
  QuizList:{
    quizAlert:IQuizAlert
   }
  AssignmentList:{
    assignmentAlert:any
 }  
  
   CourseDetails: {
    course: ICourse;
    
  };
  
 
  AttendanceDetails:{
    id:number
  };

  Institue:{

  };

  ReportContact:{
    
  };
 
  Profile:{
    from:string
  },
  ProfileDetails:{
    label:String
    icon: () => JSX.Element;
    data:FacultyData

  },
  SLOAttainment:{
    from:String
    id:number
  };
  
  PLOAttainment:{
    id:number
  };
  PLOGraph:{
    id:number
  };
  SLOGraph:{
    from:String
    id:number
  };

  NewActivity:{
    data:ClassActivities
  },
  AttendanceDetails:{
    id:number
  };
  AttendanceRegister:{
    id:number
  };
};

type ComplaintStackParamList={
  Complaint: {
    initialRoute?: string;
  };
  ComplaintChat:{
    id:number
  };
  ComplaintUserDetail:{
    data:IComplaintResponse
  }
}

type CoursesStackParamList = {
  Courses: {
    initialRoute?: string;
  };
  CourseDetails: {
    course: ICourse;
    permission:PermissionList[]
  };
  UpdateCourseDetails:{
    data:CourseDetails
  }
  Resources: {
    courseId: string | number;
    course: ICourse;
  };

  VideoPlayer: {
    videoItem: IVideoMaterial;
  };
 
  SLO:{
    id:number
  };
  SLOAttainment:{
    from:String
    id:number
  };
  
  PLOAttainment:{
    id:number
  };
  PLOGraph:{
    id:number
  };
  SLOGraph:{
    from:String
    id:number
  };
  MarkGPA:{
    
  },
  AwardList:{
    
  },
  ActivityCalendar:{
    
  },
  SLORelationship:{
    
  }
  GPAAttainmentGraph:{

  },
  AttendanceDetails:{
    id:number
    permission:PermissionList[]
  };
  AttendanceRegister:{
    id:number
  };
  ViewAttendace:{
    id:number
    permission:PermissionList[]
  },
  SingleClassAttendanceView:{
    id:number
    permission:PermissionList[]
  }
  CourseBreadth:{

  };
  Institue:{
    
  },
  ReportContact:{

  },
  Survey:{
    id:number
  },
  CreateSurvey:{
    
  },
  Forums:{
    id:number,
    name:string
  }
  CommentForum:{
    id:number,
    courseName:String
  }

  NewActivity:{
    data:ClassActivities
  },
  AddClassActivity:{
    activityName:string
  }
  AddQuestion:{
    
  }
  ClassStudent:{
    id:number
  }
  ClassAssistants:{
    id:number
  }
  Notification:{
    id:number
  }
  SingeAct:{
    data:SingleActivity
  }
  Teaching:{
    id:number
  }
  AddNewTeachingSection:{
    heading:string
  }
  TeachingDetail:{
    id:number|string
  }
  VideoMaterial:{
    id:number|string
  }
  ConductQuiz:{
    id:number
  }

  Classtimetable:{
    id:number
  }
  
};

type ResourcesTabParamList = {
  VideoMaterial: undefined;
  SectionTeachingPlan: undefined;
  OtherResources: undefined;
};
 
type ClassActivityList = {
  Assignment: undefined;
  "Online Assignment": undefined;
  Presentation: undefined;
  Quiz:undefined;
  "Online Quiz":undefined
  Final:undefined;
  Mid:undefined
};

type AttendanceRegisterList={
  AttendanceDetails:undefined;
  MarkAttendance:undefined
};

type AddClassActivityList = {
  "Activity Details": undefined;
  "Sub Activities/Questions":undefined
};

type VideoMaterialsStackParamsList = {
  VideosPage: undefined;
  VideoDetailsPage: {
    videoItem: IVideoMaterial;
  };
};

type SectionTeachingPlanStackParamsList = {
  PlansListPage: undefined;
  PlanDetailsPage: {
    plan: IClassPlan;
  };
};

type HomeTabScreenProp = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Home'>,
  { navigation: StackNavigationProp<PrimaryStackParamList, 'Home'> }
>;

type HomeScreenProp = StackScreenProps<PrimaryStackParamList, 'Home'>;

interface RootStackParamList extends ParamListBase {
  primaryStack: PrimaryStackParamList;

}

type IHomeNavigationProp = StackNavigationProp<HomeStackParamList, 'HomePage'>;

type ICoursesNavigationProp = StackNavigationProp<
  CoursesStackParamList,
  'CoursesPage'
>;

type IComplaintNavigationProp = StackNavigationProp<
   ComplaintStackParamList,
  'Complaints'
>;

type IVideoMaterialNavigationProp = StackNavigationProp<
  VideoMaterialsStackParamsList,
  'VideoMaterialPage'
>;

type ISectionTeachingPlanNavigationProp = StackNavigationProp<
  SectionTeachingPlanStackParamsList,
  'SectionTeachingPlanPage'
>;

type IDetailsNavigationProp = StackNavigationProp<
  'ActivityDetails'
>;
