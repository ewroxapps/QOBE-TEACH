
type IClassActivity = {
  id: number;
  date: string;
  name: string;
  type: string;
  obtained: string;
  total: string;
  soleveAssignment: boolean;
  tUpload?: string;
  uUpload?: {
    path: string;
    name: string;
    description: string;
  };
  uQuestion?: string[];
  tRemarks?: string;
  uRemarks?: string;
  aUpload?: boolean;
  sremarks?: string;
  remarksId?: string;
  subActivities?: ISubActivities[];
  plo_base:Boolean
};
  type ISubActivities={
    name:string;
    question:string;
    weight:string;
    maxmarks:string;
    obtained:string;
    clos:string[]
  };

  type IClassCqi={
    doc_no:string,
    doc_date:string,
    status:string,
    originator:string,
    car_ref:string,
    problem:string,
    clos:string
  };

  type ICLOs={
    name:string,
    classroom_name:string,
    semester_name:string,
    course_id:string,
    classroom_id:string,
    clo_code:string,
    id:string,
    clo_desc:string,
    per:string,
    plo:string,
    clo_id:string,
    clo_val:number
  }
  type Option ={
    action: string;
    option_type: number;
  }
  

  type ICLOsAttainment={
    avg:number
    code:string
    desc:string
    id:string
    max:number
    min:number
    myvalue:number
  };

  type IAlert={
    activities:IActivities[],
    surveys:String[],
    courseRegister:Boolean
  }

  type IActivities={
    class_room_id: string,
    name: string,
    upload_fr_date: string,
    upload_to_date: string
  }

  type PlosDetails={
    id: string;
    semester: string;
    course: string;
    course_id: string;
    name: string;
    classroom_id: string;
    credithr: string;
    kpi: string;
    per350: number | string;
    per351: number | string;
    per352: number | string;
    per353: number | string;
    per354: number | string;
    per355: number | string;
    per356: number | string;
    per357: number | string;
    per358: number | string;
    per359: number | string;
    semestershow: string;
  }


  type PLOData = {
    [key: string]: PlosDetails[];
  }

type ICourse = {
  activityCount:string
  teacherdp:string
  id:string;
  studentcount:number
  studentCount:number
  classDays:number;
  classDaysCount:number;
  clocount?: number;
  course?: string;
  dept: string;
  image?: string;
  name:string;
  semester?: string;
  teacher:string;
  teacher_id?: number;
  url?: string;
  url11?:string;
  url2?:string;
  url3:string;
  url4:string;
  url5:string;
  url6:string;
  url7:string;
  url8:string;
  url9:string
};

type ICourseDetailsResponse = {
  total_lecture: number;
  total_present: number;
  present_percentage: number;
  activities: IClassActivity[];
  remarks?: string;
  grade?: string;
  gpa?: string;
};

type PLOGraph={
  plo_i:string;
  plo_code: string,
  value: number
}
type IUpdateNotesRequest = {
  id: number | string;
  notes: string;
};

type IUploadFileRequest = {
  id: number | string;
  file: FormData;
};

type IVideoMaterial = {
  video: string;
  thumbnail: string;
  description: string;
};

type IClassMediaResponse = IVideoMaterial[];

type IClassPlan = {
  id: string | number;
  name: string;
  subject: string;
  from_date: string;
  to_date: string;
  topics: string;
  comments: string;
  activities: string[];
  clos: string[];
  attachment_count: number | string;
};

type IClassPlansResponse = IClassPlan[];

type IResource = {
  filename: string;
  description: string;
  path: string;
  type: string;
  cdate: string;
};

type Suverys={
  survey_id: number, 
  uid: string
}
type SurveyData ={
  success: boolean;
  data: {
    survey_name: string;
    notes: string;
    teacher: string;
    course: string;
    sections: string;
    questions: {
      [section: string]: Question[];
    };
  };
}

type Question = {
  id: number;
  head: string;
  question: string;
  required: string;
  type: string;
  choices: { [key: string]: string };
}

type PlosDetails={
  plo:string,
 learning_type:string,
 level:string,
 emphasis:string
};

type Transcript={
  name:string,
  semster_id:number
}

type IClassPlanDetail = {
  id: string | number;
  name: string;
  subject: string;
  from_date: string;
  to_date: string;
  topics: string;
  comments: string;
  activities: string[];
  clos: string[];
  resources: IResource[];
};

type IClassPlanDetailResponse = IClassPlanDetail[];

type IResourcesResponse = IResource[];


type Course = {
  course_id: number;
  label: string;
  disabled: boolean;
  course_selected: string;
  classroom_selected: number | null;
  classrooms: Classroom[];
  [key: string]: any; // Add index signature
};

type Classroom = {
  id: number;
  name: string;
  teacher: string;
  section: string;
  timing: string;
}

type Registration = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  courses: Course[][];
}

type RegistrationData ={
  classroom_base_reg: string;
  regMst: Registration[];
  regCourseDtl: Record<string, Record<string, Course[]>>;
}

type CourseDetails={
  campus:string;
  campus_id:number;
  comm_close_loop:any,
  comm_discrepancy:any,
  comm_grade:string,
  comments:string,
  connected_class:any[],
  course:string,
  course_id:id,
  department:string,
  dept_id:id,
  en_date:string,
  finished:string,
  gender:string,
  graph_interval:number,
  id:number,
  include:string,
  include_gpa:string,
  is_online:string,
  last_end_date:string
  last_start_date:string,
  name:string,
  notes:string,
  office_hrs:string,
  online_status:string,
  per_marks:number,
  per_student:number,
  plo_base:string,
  seating:number,
  section:string,
  semester:string,
  semester_id:number
  st_date:string,
  supervisor:string,
  teacher:string,
  teacher_dp:string,
  teacher_id:number,
  uni_id:number,
  uni_prg_id:number,
  view_public:string,
  vroom_id:number,
  whatsapp_grp:string,
  year:number
}

type ScheduleItem= {
  class: string;
  course: string;
  crId: number | null;
  id: number;
  isonline: string;
  name: string;
  slot: number;
  status: string;
  teacher: teacher 
  time: string;
  topic: string;
  type: string;
  dp:string
  classroom_no:string
}

type teacher ={
  id:number,
  img:string,
  name:string
}

type sectionteaching={
  name:string,
  subject:string,
  startdate:string
  enddate:string,
  startdate:string,
  topic:string,
  comment:string,
  slo :string
  classactivity:string
  classroom_no:string
}

type ScheduleData ={
  [date: string]: ScheduleItem[];
}

type DataItem = {
  value: number;
  label: string;
  color: string;
}

type SurveyQuestion = {
  itemNumber: number;
  sequence: number;
  head: string;
  type: string;
  questionGroup: string;
  question: string;
  choices: string[];
  slo: string;
  required:boolean
}
type SurveyList={
  complete:string,
  name:string,
  totalfilled:string,
  totalpublished:string
}
interface Student {
  gpa: number | null;
  grade: string;
  include_obe: string;
  name: string;
  program_batch: string;
  reg_no: string;
  remarks: string | null;
  roll_no: string;
  section: string;
  sgroup: string | null;
  student_id: number;
  dp:string;
  teacher: string;
  status:string
}

interface Data {
  show_groups: string;
  show_teacher: string;
  students: Student[];
}

type AssistantData = {
  [key: string]: string;
};

type  Activity = {
  activity_date: string;
  activity_type: string;
  aid: number;
  allow_student_upload: string;
  gpa_weight: string;
  include_in_gpa: string;
  is_complex: string;
  is_cqi: string | null;
  is_locked: string;
  is_quiz: string;
  is_rubric: string;
  marks_added: boolean;
  name: string;
  question_count: string;
  show_activity_to_student: string;
  show_result_to_student: string;
  total_markes: string;
  upload_from_date: string;
  upload_to_date: string;
}

type ClassActivities ={
  activities: Activity[];
  gpa_module: boolean;
  student_module: string;
}

type SingleActivity ={
  activity_date: string;
  activity_type: string;
  aid: number;
  allow_student_upload: string;
  gpa_weight: string;
  include_in_gpa: string;
  is_complex: string;
  is_cqi: null | string; // "null" or a string
  is_locked: string;
  is_quiz: string;
  is_rubric: string;
  marks_added_on: string;
  name: string;
  question_count: number;
  questions: Array<{
    choices: string;
    clos: any[]; // You may define another interface for 'clos' if needed
    complexity: string;
    correct_answer: string;
    img: string;
    max_marks: string;
    obe_weight: string;
    qid: number;
    qno: string;
    question: string;
    question_type: string;
  }>;
  show_activity_to_student: string;
  show_result_to_student: string;
  total_markes: string;
  upload_from_date: string;
  upload_to_date: string;
}

type CourseOutLine={
  course_breakdown:string,
  outline:string
  recommended_book:string
  reference_books:string
}
type AttendanceStudentSummary= {
  name: string;
  percentage: number;
  presents: number;
  reg_no: string;
  roll_no: string;
  student_id: number;
  total: number;
  warning: boolean;
  dp:string
}

interface AttendanceStudent {
  name: string;
  reg_no: string;
  roll_no: string;
  student_id: number;
}

interface AttendanceList {
  allow_leave: string;
  allow_media: string;
  proposed_lecture_name: string;
  show_late: string;
  students: Student[];
}

type Studentss = {
  id: string;
  present: boolean;
  lateLeave: boolean;
};

type SetStudentDetails = React.Dispatch<React.SetStateAction<Studentss[]>>;
type SharedState = {
  startDate: string;
  setStartDate: (date: string) => void;

  startDate1: string;
  setStartDate1: (date: string) => void;
  lecture: string;
  setLecture: (lecture: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  topic: string;
  setTopic: (topic: string) => void;
  assessment: string;
  setAssessment: (assessment: string) => void;
  room: string;
  setRoom: (room: string) => void;
  data:AttendanceList
  myID:number
}

type AttendanceViewList ={
  adate: string;
  assessment: string | null;
  c_by: number;
  c_date: string;
  classroom_id: number;
  duration: number | null;
  id: number;
  img: string | null;
  name: string;
  room: string | null;
  timetable_id: number | null;
  topic: string;
  type: string;
  u_date: string;
  video_link: string | null;
}

type AttendanceDataDetail= {
  did: number;
  dp: string;
  late: '0' | '1';
  name: string;
  present: '0' | '1';
  reg_no: string;
  roll_no: string;
  student_id: number;
}
interface LectureAttendanceData {
  attendanceData: AttendanceDataDetail[];
  lectureData: AttendanceViewList;
}
type CLOs= {
  clo_id: string;
  clo_code: string;
  description: string;
}

type Score ={
  student_id: string;
  reg_no: string;
  name: string;
  clo: {
    clo_id: string;
    score: number;
    attained: 'Y' | 'N';
  }[];
}

type clo= {
  clo_id: string;
  score: number;
  attained: 'Y' | 'N';
}

type Summary ={
  clo_id: string;
  clo_code: string;
  total_students: number;
  pass_student: number;
  percentage: number;
  average: number;
}

type CourseData ={
  marks_threshold: number;
  student_threshold: number;
  statement: string;
  clos: CLO[];
  scores: Score[];
  summary: Summary[];
}

type CLODetailed={
  active: string;
  clo_id: number;
  code: string;
  description: string;
  plos: myPLO[];
  type: string;
  used: boolean;
}

type myPLO={
  emphasis: string;
  learning_type: string;
  level: string;
  plo: string;
}

type CLOData= {
  clo_code: string;
  percentage: number;
}

type PLODataaa= {
  plo_code: string;
  percentage:number
  batch_name:string
}

type BatchPLO ={
  batch_id: number;
  name: string;
  marks_percentage: number;
  student_percentage: number;
  statement: string;
}

type PLOss= {
  plo_id: string;
  plo_code: string;
}

type myPLOsP={
  attained:string,
  plo_id:string
  score:number
}

type ScorePLO ={
  student_id: string;
  reg_no: string;
  name: string;
  plo: myPLOsP[];
}

type SummaryPLO= {
  batch_id: number; 
  summary: myPloSummary[] 
}

type myPloSummary={
  plo_id: string;
  plo_code: string;
  total: number; 
  pass: number;
  average: number;
} 

type DataPLO = {
  batches: BatchPLO[];
  plos: { batch_id: number; plos_list: PLOss[] }[];
  scores: { batch_id: number; scores: ScorePLO[] }[];
  summary: SummaryPLO[];
}

type Comments={
  allow_update: boolean;
  comment: string;
  comment_by: string;
  comment_when: string;
  dp: string;
  id: number;
  img: string | null;
}