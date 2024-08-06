export interface DeleteProps {
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    setModalVisibleMain: (visible: boolean) => void;
    setRefreshed: (visible: boolean) => void;
    courseSection:string
    date:string
    topic:string
    slot:string
    id:number
    room:string
    isOnline:string
    from:string
  }
  