export interface ShowTxtProps{
    title:string

    expanded:boolean
    setIsExpanded: (visible: boolean) => void;

    numLines:number
    setNumLines: (visible: number) => void;
    
    detail:string
}