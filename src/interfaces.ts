export type IQuestion = {
  id: number;
  title: string;
  info: string;
};

export type IQuestions = IQuestion[];

export type QuestionProps = {
  question: IQuestion;
};
