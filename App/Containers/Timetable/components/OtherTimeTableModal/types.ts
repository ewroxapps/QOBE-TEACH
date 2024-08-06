export interface DeleteProps {
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    setModalVisibleMain: (visible: boolean) => void;
    setRefreshed: (visible: boolean) => void;
    courseSection:string
    slot:string
    activityType:string
    detail:string
    id:number
    date:string 
    from:string
  }
  