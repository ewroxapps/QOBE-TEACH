export interface modalProps {
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;
    setClicked: (visible: boolean) => void;
    image:string | undefined
    label:string | undefined
    instructorName: string | undefined
    id:string
    permission:PermissionList[]
  }
  