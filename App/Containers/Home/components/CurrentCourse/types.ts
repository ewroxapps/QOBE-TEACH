export interface CurrentCourseProps {
    label?: string;
    instructorName?: string;
    instructorProfile?: string;
    students:number,
    activities:number|undefined
    classes:number
    id:string
    permission:PermissionList[]
  }
  