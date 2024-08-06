export interface detailProps {
    name: string;
    setName: (value: string) => void;

    question: string;
    setQuestion: (value: string) => void;

    note: string;
    setNote: (value: string) => void;

    active: boolean;
    setActive: (value: boolean) => void;
}