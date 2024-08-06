
//Live
//const BASE_URL = `https://fapi.qualityobe.com/`;
//Stagging
const BASE_URL = `https://sfapi.qualityobe.com/`;
const STUDENT_BASE_URL = 'http://studentapi.obe2.localhost/'
const TABLE_ROWS = 10;
const DEVICE_PLATFORM = 'mobile';
let  answerArray: any[] = []
let surveyArray: any[] = []


function setSuvey(ans:any[]) {
  answerArray = ans;
}

function getSurvey() {
  return answerArray;
}

function setUrl(ans:any[]) {
  answerArray = ans;
}

function getUrl() {
  return answerArray;
}

const END_POINTS = {
  STUDENT: 'faculty',
  AUTHENTICATE: `faculty/authenticate`,
  PROFILE: 'profile',
  CURRENT_CLASSES: 'currentclasses',
  UP_NEXT_CLASSES: 'upnextclasses',
  STATS: 'stats',
  GET_PERMISSIONS:'getpermissions',
  CLASS_VIEW: 'classview',
  CLASS_ACTIVITY_NOTES: 'classactivitynotes',
  CLASS_ACTIVITY_UPLOAD: 'classactivityupload',
  CLASS_LIST: 'classlist',
  CLASS_MEDIA: 'classmedia',
  CLASS_PLANS: 'classplans',
  CLASS_PLAN: 'classplan',
  CLASS_RESOURCES: 'classresources',
  CHANGE_PASSWORD: 'changepassword',
  //discussion forum
  CLASS_FORUMS:'classforums',
  CLASS_FORUM:'classforum',
  CREATE_CLASS_FORUM:'createclassforum',
  UPDATE_CLASS_FORUM:'updateclassforum',
  DELETE_CLASS_FORUM:'deleteclassforum',
  //comments
  COMMENT_CLASS_FORUM:'commentclassforum',
  UPDATE_COMMENT_FORUM:'updatecommentclassforum',
  DELETE_COMMENT_FORUM:'deletecommentclassforum',
  //survey
  CLASS_SURVEY:'classsurvey',
  //Studentlist
  CLASS_STUDENT_LIST:'classstudentlist',
  CLASS_ASSISTANT_LIST:'classassistantlist',
  CLASS_ACTIVITIES:'classactivities',
  CLASS_ACTIVITY:'classactivity',
  CLASS_SEND_NOTIFICATION:'sendnotification',
  CLASS_COURSE_OUTLINE:'courseoutline',
  CLASS_ATTENDANCE_SUMMARY:'classattendancesummary',
  CLASS_ATTENDANCE_LIST:'classattendancestudentlist',
  CLASS_TAKE_ATTENDANCE:'takeclassattendance',
  CLASS_UPDATE_ATTENDANCE:'updateclassattendance',
  CLASS_ATTENDANCE_DELETE:'classattendacedelete',
  CLASS_ATTENDANCE_LIST_TOTAL:'classattendancelist',
  CLASS_SINGLE_ATTENDANCE:'classattendance',
  CLASS_ATTAINMENT_CLO:'cloattainment',
  CLASS_CLOS:'classclos',
  CLASS_PLO_ATTAINMET:'ploattainment',
  //quiz
  CLASS_CHECK_QUIZ:'checkforquiz',
  CLASS_CHECK_STATUS:'quizstatus',
  CLASS_QUIZ_STOP:'quizstop',
  CLASS_QUIZ_START:'quizstart',
  CLASS_QUIZ_RETAKE:'quizretake',
  CLASS_QUIZ_MARK:'quizmark',
  //timetable
  TIMETABLE: 'timetable',
  GET_TIMETABLE_MODE:'gettimetablemode',
  //others
  GET_TIME_TABLE_SLOTS_ALL:'gettimetableslotsall',
  GET_SINGLE_TIME_TABLE_SLOT_OTHERS:'gettimetableslots',
  TIMETABLE_CLASS_LIST_OTHERS:'getclassroomlist',
  TIMETABLE_OTHER_ACTIVITY:'gettimetableactivities',
  ADD_TIMETABLE_OTHER:'addtimetableother',
  DELETE_TIMETAVLE_OTHER:'deletetimetableother',
  UPDATE_TIME_TABLE_OTHER:'updatetimetableother',
  //main
  ADDTIMETABLEMAIN:'addtimetable',
  UPDATETIMETABLEMAIN:'updatetimetable',
  DELETETIMETABLEMAIN:'deletetimetable',
  //class-room
  CLASSROOM_TIMETABLE:'classtimetable',
  CLASSROOM_ADD_TIMETABLE:'addtimetable',
 
  //profile
  USER_PROFILE:'profile',
  UPDATE_USER_PROFILE:'updateprofile',
  PROFILE_PICTURE:'profileupload',

  //complaint
  USER_COMPLAINTS:'complaints',
  COMPLAINT_CHATS:'complaint',
  COMMENT_COMPLAINT:'commentcomplaint'
};

const CACHE_TAGS = {
  AUTH: 'auth',
  USER: 'user',
  COURSE: 'course'
};

const API_METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST'
};

export {
  API_METHODS, BASE_URL, CACHE_TAGS,
  DEVICE_PLATFORM, END_POINTS, STUDENT_BASE_URL,
  TABLE_ROWS, getSurvey, getUrl,
  setSuvey, setUrl, surveyArray
};

