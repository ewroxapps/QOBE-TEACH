import { createApi } from '@reduxjs/toolkit/query/react';
import { API_METHODS, CACHE_TAGS, END_POINTS } from '../../Config/Api';
import { baseQuery } from './BaseApi';

const CourseApi = createApi({
  baseQuery,
  reducerPath: 'CourseApi',
  tagTypes: [CACHE_TAGS.COURSE],
  endpoints: builder => ({
    courseDetails: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_VIEW}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

  

 
    getPermissions: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.GET_PERMISSIONS}`,
        method: API_METHODS.GET
      })
    }),


    classForum: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_FORUMS}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classForums: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_FORUM}?id=${id}`,
        method: API_METHODS.GET
      })
    }),


    createClassForum: builder.mutation<any, any>({
      query: ({ id, title, detail }) => {
        const data = new FormData();
        data.append('title', title);
        data.append('detail', detail);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CREATE_CLASS_FORUM}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    updateClassForum: builder.mutation<any, any>({
      query: ({ id, title, detail,allow_comment,published,allow_image }) => {
        const data = new FormData();
        data.append('title', title);
        data.append('detail', detail);
        data.append('allow_comment', allow_comment);
        data.append('published', published);
        data.append('allow_image', allow_image);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.UPDATE_CLASS_FORUM}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    deleteClassForum: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.DELETE_CLASS_FORUM}?id=${id}`,
        method: API_METHODS.POST
      })
    }),



    addComments: builder.mutation<any, any>({
      query: ({ id, comment }) => {
        const data = new FormData();
        data.append('comment', comment);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.COMMENT_CLASS_FORUM}?id=${id}`,
          method: API_METHODS.POST,
          body: data

        };

      },

    }),


    updateCommentForum: builder.mutation<any, any>({
      query: ({ id, comment }) => {
        const data = new FormData();
        data.append('comment', comment);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.UPDATE_COMMENT_FORUM}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        }; 
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    deleteCommentForum: builder.mutation<any, any>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.DELETE_COMMENT_FORUM}?id=${id}`,
        method: API_METHODS.POST
      })
    }),


   
    uploadFile: builder.mutation<any, any>({
      query: ({ id, file }) => {
        const data = new FormData();
        data.append('file', {
          uri: file[0].uri,
          name: file[0].name,
          type: file[0].type
        });
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ACTIVITY_UPLOAD}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),
    videoMaterial: builder.query<IClassMediaResponse, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_MEDIA}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),
    classPlans: builder.query<IClassPlansResponse, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_PLANS}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),

    classResources: builder.query<IResourcesResponse, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_RESOURCES}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),



    classSurvey: builder.query<any, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_SURVEY}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),

    classStudentList: builder.query<any, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_STUDENT_LIST}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),


    classAssistantList: builder.query<any, { id: number | string }>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ASSISTANT_LIST}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),

    classActivities: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ACTIVITIES}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classActivity: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ACTIVITY}?aid=${id}`,
        method: API_METHODS.GET
      })
    }),

    classCourseOutline: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_COURSE_OUTLINE}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classSendNotification:  builder.mutation<any, any>({
      query: ({ id, message,send_email,send_sms,file }) => {
        const data = new FormData();
        data.append('message', message);
        data.append('send_email', send_email);
        data.append('send_sms', send_sms);
        if (file.length > 0) {
          data.append('file', {
            uri: file[0].uri,
            name: file[0].name,
            type: file[0].type
          });
        }
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_SEND_NOTIFICATION}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),


    classTakeAttendance:  builder.mutation<any, any>({
      query: ({ id, late,adate,name,type,topic,Students,duration,assessment,room }) => {
        const data = new FormData();
        data.append('adate', adate);
        data.append('name', name);
        data.append('type', type);
        data.append('topic', topic);
        data.append('duration', duration);
        data.append('assessment', assessment);
        data.append('room', room);
        for (let i = 0; i < Students.length; i++){
          data.append('attendance['+i+'][student_id]', Students[i].id);
          const studentPresent =  Students[i].present===true ? '1' : '0';
          console.debug(studentPresent)
          data.append('attendance['+i+'][present]', studentPresent);
          if(late === '1'){
            const studentLate =  Students[i].lateLeave ? '2' : '0';
            data.append('attendance['+i+'][leave]',studentLate);
          }
        }
        
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_TAKE_ATTENDANCE}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),


    classUpdateAttendance:  builder.mutation<any, any>({
      query: ({ id, adate,name,type,topic,Students,duration,assessment,room }) => {
        const data = new FormData();
        data.append('adate', adate);
        data.append('name', name);
        data.append('type', type);
        data.append('topic', topic);
        data.append('duration', duration);
        data.append('assessment', assessment);
        data.append('room', room);
        for (let i = 0; i < Students.length; i++){
          data.append('attendance['+i+'][student_id]', Students[i].id);
          const studentPresent =  Students[i].present===true ? '1' : '0';
          console.debug("From Present"+Students[i].id + studentPresent)
          data.append('attendance['+i+'][present]', studentPresent);
          const studentLate =  Students[i].lateLeave===true ? '2' : '0';
          console.debug("From Late" + studentLate)
          data.append('attendance['+i+'][leave]',studentLate);
          
        }
        
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_UPDATE_ATTENDANCE}?aid=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),


    classDeleteAttendance:  builder.mutation<any, any>({
      query: ({ id }) => {
      
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ATTENDANCE_DELETE}?aid=${id}`,
          method: API_METHODS.POST,
       
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    classAttendanceSummary: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ATTENDANCE_SUMMARY}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classAttendanceList: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ATTENDANCE_LIST}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classAttendanceListTotal: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ATTENDANCE_LIST_TOTAL}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classSingleAttendanceListTotal: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_SINGLE_ATTENDANCE}?aid=${id}`,
        method: API_METHODS.GET
      })
    }),

    class_clo_attainment: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_ATTAINMENT_CLO}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    class_clos: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_CLOS}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    class_plo_attainment: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_PLO_ATTAINMET}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    classQuizCheck: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_CHECK_QUIZ}?aid=${id}`,
        method: API_METHODS.GET
      })
    }),


    classQuizStatus: builder.query<any, { id: number | string }>({
      query: ({ id }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_CHECK_STATUS}?aid=${id}`,
        method: API_METHODS.GET
      })
    }),

    classQuizStop:  builder.mutation<any, any>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_QUIZ_STOP}?aid=${id}`,
          method: API_METHODS.POST,
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),


    classQuizStart:  builder.mutation<any, any>({
      query: ({ id, quiz_duration,quiz_note,shuffle_quiz}) => {
        const data = new FormData();
        data.append('quiz_duration', quiz_duration);
        data.append('quiz_note', quiz_note);
        data.append('shuffle_quiz', shuffle_quiz);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_QUIZ_START}?aid=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    classQuizReTake:  builder.mutation<any, any>({
      query: ({ id, quiz_duration,quiz_note,shuffle_quiz}) => {
        const data = new FormData();
        data.append('quiz_duration', quiz_duration);
        data.append('quiz_note', quiz_note);
        data.append('shuffle_quiz', shuffle_quiz);
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_QUIZ_RETAKE}?aid=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    classQuizMark:  builder.mutation<any, any>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_QUIZ_MARK}?aid=${id}`,
          method: API_METHODS.POST,
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),
    planDetails: builder.query<
      IClassPlanDetailResponse,
      { id: number | string }
    >({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.CLASS_PLAN}?id=${id}`,
          method: API_METHODS.GET
        };
      }
    }),

    allTimetable: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.TIMETABLE}`,
        method: API_METHODS.GET
      })
    }),

    allTimetableMode: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.GET_TIMETABLE_MODE}`,
        method: API_METHODS.GET
      })
    }),

    allTimetableSlots: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.GET_TIME_TABLE_SLOTS_ALL}`,
        method: API_METHODS.GET
      })
    }),

    singleTimetableSlots: builder.query({
      query: (date) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.GET_SINGLE_TIME_TABLE_SLOT_OTHERS}?date=${date}`,
        method: API_METHODS.GET
      })
    }),

    otherTimetableClassList: builder.query({
      query: (date:string) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.TIMETABLE_CLASS_LIST_OTHERS}?date=${date}`,
        method: API_METHODS.GET
      })
    }),

    otherTimetableActivityList: builder.query({
      query: (date) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.TIMETABLE_OTHER_ACTIVITY}?date=${date}`,
        method: API_METHODS.GET
      })
    }),

    addTimeTableOther:  builder.mutation<any, any>({
      query: ({ date, slot,activityType,classroom,detail  }) => {
        const data = new FormData();
        data.append('slot', slot);
        data.append('activityType', activityType );
        if(classroom!=null){
        data.append('classroom', classroom );}
        if(detail.length>0){
        data.append('detail', detail );}
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.ADD_TIMETABLE_OTHER}?date=${date}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    deleteOtherTimeTable:  builder.mutation<any, any>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.DELETE_TIMETAVLE_OTHER}?id=${id}`,
          method: API_METHODS.POST,
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    updateTimeTableOther:  builder.mutation<any, any>({
      query: ({ id, activityType,detail  }) => {
        const data = new FormData();
        data.append('activityType', activityType );
        if(detail.length>0){
        data.append('detail', detail );}
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.UPDATE_TIME_TABLE_OTHER}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    addTimeTableMain:  builder.mutation<any, any>({
      query: ({ date, slot,classroom,topic,room_no  }) => {
        const data = new FormData();
        data.append('slot', slot);
        data.append('classroom', classroom );
        if(topic.length>0){
        data.append('topic', topic );}
        if(room_no.length>0){
        data.append('room_no', room_no );}
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.ADDTIMETABLEMAIN}?date=${date}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    updateTimeTableMain:  builder.mutation<any, any>({
      query: ({ id, topic,room_no  }) => {
        const data = new FormData();
        data.append('topic', topic );
        data.append('room_no', room_no );
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.UPDATETIMETABLEMAIN}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),
    deleteMainTimeTable:  builder.mutation<any, any>({
      query: ({ id }) => {
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.DELETETIMETABLEMAIN}?id=${id}`,
          method: API_METHODS.POST,
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),


    classroomTimetable: builder.query({
      query: ({ id }: { id: number }) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.CLASSROOM_TIMETABLE}?id=${id}`,
        method: API_METHODS.GET
      })
    }),
 
    addTimeTableClassroom:  builder.mutation<any, any>({
      query: ({ date, slot,classroom,classrommId,topic  }) => {
        const data = new FormData(); 
        data.append('slot', slot);
        if(classroom!=null){
        data.append('room', classroom );}
        if(topic!=null){
          data.append('topic', topic );}
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.ADDTIMETABLEMAIN}?date=${date}&classroomId=${classrommId}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    userProfile: builder.query({
      query: () => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.USER_PROFILE}`,
        method: API_METHODS.GET
      })
    }),

    updateUserProfile:  builder.mutation<any, any>({
      query: ({ fname,
                mname, lname, 
                cell, phone, 
                designation, cnic, 
                pec_no, mobile2, 
                hdegree, website, 
                fb, linkedin, tweeter  }) => {
        const data = new FormData();
        if(fname.length>0)
        data.append('fname', fname );
        if(mname.length>0)
        data.append('mname', mname );
        if(lname.length>0)
        data.append('lname', lname );
        if(cell.length>0)
        data.append('cell', cell );
        if(phone.length>0)
        data.append('phone', phone );
        if(designation.length>0)
        data.append('designation', designation );
        if(cnic.length>0)
        data.append('cnic', cnic );
        if(pec_no.length>0)
        data.append('pec_no', pec_no );
        if(mobile2.length>0)
        data.append('mobile2', mobile2 );
        if(hdegree.length>0)
        data.append('hdegree', hdegree );
        if(website.length>0)
        data.append('website', website );
        if(fb.length>0)
        data.append('fb', fb );
        if(linkedin.length>0)
        data.append('linkedin', linkedin );
        if(tweeter.length>0)
        data.append('tweeter', tweeter );
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.UPDATE_USER_PROFILE}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    userprofilepicture:  builder.mutation<any, any>({
      query: ({ uri,name,type }) => {
        const data = new FormData();
          data.append('file', {
            uri: uri,
            name: name,
            type: type
          });   
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.PROFILE_PICTURE}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),

    useComplaint: builder.query({
      query: (page) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.USER_COMPLAINTS}?page=${page}`,
        method: API_METHODS.GET
      })
    }),

    chatComplaint: builder.query({
      query: (id) => ({
        url: `${END_POINTS.STUDENT}/${END_POINTS.COMPLAINT_CHATS}?id=${id}`,
        method: API_METHODS.GET
      })
    }),

    commentComplaint:  builder.mutation<any, any>({
      query: ({ id,filename,uri,type,message,types }) => {
        const data = new FormData();
        data.append('type', type);
        data.append('message', message);
        if(filename.length>0){
          data.append('file', {
            uri: uri,
            name: filename,
            type: types
          });   
        }
        return {
          url: `${END_POINTS.STUDENT}/${END_POINTS.COMMENT_COMPLAINT}?id=${id}`,
          method: API_METHODS.POST,
          body: data
        };
      },
      invalidatesTags: [CACHE_TAGS.COURSE]
    }),
  })
});

export default CourseApi;

export const {
  util: CourseApiUtil,
  //Survey
  useClassSurveyQuery,

  //Studentlist
  useClassStudentListQuery,

  //AssistantList
  useClassAssistantListQuery,

  //ActivityList
  useClassActivityQuery,
  useClassActivitiesQuery,

  //Course Detail
  useCourseDetailsQuery,
  useLazyCourseDetailsQuery,

  //Attendance
  useClassAttendanceSummaryQuery,
  useClassAttendanceListQuery,
  useClassSingleAttendanceListTotalQuery,
  useClassAttendanceListTotalQuery,
  useClassTakeAttendanceMutation,
  useClassUpdateAttendanceMutation,
  useClassDeleteAttendanceMutation,

  //CLO
  useClass_clo_attainmentQuery,
  useClass_closQuery,

  //PLO
  useClass_plo_attainmentQuery,

  //Notifications
  useClassSendNotificationMutation,

  //Quiz
  useClassQuizCheckQuery,
  useClassQuizStatusQuery,
  useClassQuizStopMutation,
  useClassQuizStartMutation,
  useClassQuizReTakeMutation,
  useClassQuizMarkMutation,
  useClassCourseOutlineQuery,

  
  //Discussion Forum
  useClassForumQuery,
  useClassForumsQuery,
  useCreateClassForumMutation,
  useUpdateClassForumMutation,
  useDeleteClassForumMutation,
  useAddCommentsMutation,
  useUpdateCommentForumMutation,
  useDeleteCommentForumMutation,
  
  //Video Material
  useVideoMaterialQuery,

  //Class
  useClassPlansQuery,
  useClassResourcesQuery,
  usePlanDetailsQuery,

  //permissions
  useGetPermissionsQuery,

  //timetables
  useAllTimetableQuery,
  useAllTimetableModeQuery,
  useAllTimetableSlotsQuery,
  useSingleTimetableSlotsQuery,
  useOtherTimetableClassListQuery,
  useOtherTimetableActivityListQuery,
  useAddTimeTableOtherMutation,
  useDeleteOtherTimeTableMutation,
  useUpdateTimeTableOtherMutation,
  //Main
  useAddTimeTableMainMutation,
  useUpdateTimeTableMainMutation,
  useDeleteMainTimeTableMutation,
  //Class-room
  useClassroomTimetableQuery,
  useAddTimeTableClassroomMutation,

  //Profile
  useUserProfileQuery,
  useUpdateUserProfileMutation,
  useUserprofilepictureMutation,

  //Complaint
  useUseComplaintQuery,
  useChatComplaintQuery,
  useCommentComplaintMutation,
  
} = CourseApi;
