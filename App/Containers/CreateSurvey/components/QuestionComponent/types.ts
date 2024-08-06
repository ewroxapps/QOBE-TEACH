export interface surveyQuestionProps {
    questions: SurveyQuestion[];
    setQuestionsValue: (value: SurveyQuestion[]) => void;
    errorIndex:number
}