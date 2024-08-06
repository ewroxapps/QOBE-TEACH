export interface SearchBoxProps {
    string?: string;
    setString: (value: string) => void;

    data:CourseData

    click?:Boolean
    setClick: (visible: boolean) => void;

    setName: (searchStr: string) => void;
    name?: string;

    currentIndex?: number;
    setCurrentIndex: (value: number) => void;
  }
  