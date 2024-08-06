export interface SearchBoxBatchProps{
    id?: number;
    setID: (value: number) => void;

    click?:Boolean
    setClick: (visible: boolean) => void;

    batchData:BatchPLO[]
}