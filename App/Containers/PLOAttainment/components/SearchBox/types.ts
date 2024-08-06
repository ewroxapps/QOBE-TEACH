export interface SearchBoxProps {
    string?: string;
    setString: (value: string) => void;

    data:DataPLO

    click?:Boolean
    setClick: (visible: boolean) => void;

    setName: (searchStr: string) => void;
    name?: string;

    id:number

    currentIndex?: number;
    setCurrentIndex: (value: number) => void;

  }
  