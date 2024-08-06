export interface DropDownProps {
    containerName:string,
    height:number | null
    options:String[]

    value?: string;
    setValue: (value: string) => void;

    error?: Boolean ;
    setError: (value: boolean) => void;
   }
   