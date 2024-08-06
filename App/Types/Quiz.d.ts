type IQuizDetailsResponse ={
    success:Boolean;
      activity:{
        class_name:string;
        info:string;
        class_id:number;
        activity_id:number;
        activity_name:string;
        notes:string;
        from_time:string;
        to_time:string;
        quiz_id:number
      };
      quizDetail: IQuizDetails[];
    };
    
    type IQuizDetails ={
        id:number;
        question:string;
        q_img: String;
        type: string;
        choices?: string[];
        answer: string[];
        ans_img?:String | undefined
    
    };
  
  
    type IQuizAlert={
      activity_name:string;
      id:number;
      name:string;
    };
    
    type IQuizAnswer ={
        id:number,
        qid:number,
        answer:string,
        ans_img:File
    };
    
    type IComment={
      id:number,
      comment:string
    }
  
  
  
    type IQuizSubmit ={
        id:boolean
    }
    
  
    type IClassQuizResponse = IQuizAlert[]; 


    type QuizCheck={
      allow_mark: Boolean, 
      allow_retake: Boolean, 
      allow_start: Boolean, 
      allow_stop: Boolean, 
      end_time: string, 
      start_time: string, 
      success: Boolean
    }

    interface QuizStudentDetail {
      student_id: number;
      reg_no: string;
      roll_no: string | null;
      name: string;
      dp: string;
      status: string;
      status_code: string;
      started_when: string | null;
      completed_when: string | null;
      can_view_answer_sheet: boolean;
    }
    
    interface QuizStudentData {
      total: number;
      not_attempted: number;
      started: number;
      submitted: number;
      detail: QuizStudentDetail[];
    }
    
    interface QuizApiResponse {
      success: boolean;
      student_data: StudentData;
    }
    

    type ActivityTeachingPlan = {
      activities: string[];
      attachment_count: number|string;
      clos: any[]; // This could be another interface if you have a specific structure for 'clos'
      comments: string;
      from_date: string;
      id: number|string;
      name: string;
      subject: string;
      to_date: string;
      topics: string;
    }

    type ResourceTeachingPlan= {
      cdate: string;
      description: string;
      filename: string;
      path: string;
      type: string;
    }
    
    type CourseTeachingPlan= {
      activities: any[];
      clos: string[];
      comments: string;
      from_date: string;
      id: number;
      name: string;
      resources: Resource[];
      subject: string;
      to_date: string;
      topics: string;
    }
    