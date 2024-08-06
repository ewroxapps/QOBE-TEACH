export interface  CalendarProps {
    initialDate: Date;
    data :ScheduleData
    setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
    AllTimeTableFetch:any
    setRefresh: (visible: boolean) => void;
  }