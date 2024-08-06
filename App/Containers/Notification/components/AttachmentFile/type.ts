import {
  DocumentPickerResponse
} from 'react-native-document-picker';
export interface CourseDetailsModalProps {
    modalVisible?: boolean;
    setModalVisible: (visible: boolean) => void;

    attachment?: boolean;
    setAttachment: (visible: boolean) => void;

    title: any;
    
    selectedFiles: DocumentPickerResponse[];
    setSelectedFiles: (files: DocumentPickerResponse[]) => void;
  }
  