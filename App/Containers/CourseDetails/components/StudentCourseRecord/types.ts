export interface StudentCourseRecordProps {
  id:number
  student:number
  activity:number
  classes:number
  modalVisible?: boolean;
  setModalVisible: (visible: boolean) => void;
  clicked?:boolean;
  setClicked: (visible: boolean) => void;
}
