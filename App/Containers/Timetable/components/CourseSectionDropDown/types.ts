export interface DropDownProps {
    containerName:string,
    height:number | null
    data:CourseDatass[]

    courseKey?: string;
    setCourseKey: (visible: string) => void;
    value?: string;
    setValue: (value: string) => void;

    error?: Boolean ;
    setError: (value: boolean) => void;
   }
   