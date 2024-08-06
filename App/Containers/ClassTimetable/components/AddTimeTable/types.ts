export interface DeleteProps {
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    setRefreshed: (visible: boolean) => void;
    date:string
    topic:string
    slot:string
    id:number
    room:string
    isOnline:string
    from:string
  }
  