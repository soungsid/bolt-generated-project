export interface Question {
    question: string;
    questionVisual?: Img;
    questionType: string;
    questionOrientation: string;
    options: Option[];
    identifiant: string;
    categorie: string;
    correctOption: string;
    explanation: string;
    id: string;
}

export interface Img {
    imgUrl?: string;
    imgAlt?: string;
    width?: number;
    height?: number;
    title?: string;
    id: string;
}

export interface Option {
    optionText?: string;
    optionMarker: string;
    optionVisual?: Img;
    id: string;
    isCorrect?: boolean
    choosedByUser?: boolean
}

export interface UserQuiz {
    currentQuestion: Question;
    nbQuestion?: number;
    userResponse?: Array<boolean>;
    progression?: number;
    dateDebut?: Date;
    score?: number;
    id: string;
    quizId?: string;
    choosedOptionId?: string;
}

export interface Quiz {
    id: string;
    categorie: string;
    title: string;
}
