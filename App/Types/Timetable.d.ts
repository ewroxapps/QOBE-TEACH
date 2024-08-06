type SlotMap= {
  [periodId: string]: string;
}
type ActivityMap ={
  [key: string]: string;
}

type CourseMap= {
  [key: string]: string;
}

type CourseDatass= {
  [key: string]: { [courseId: string]: string };
}

type IClassLecture = {
  date: string;
  from_time: string;
  to_time: string;
  topic: string;
  room: string;
  teacher: string;
  online: string;
  id:number
};