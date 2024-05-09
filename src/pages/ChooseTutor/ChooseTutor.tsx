import {SearchTutor} from "./SearchTutor.tsx";
import {ShowTutor} from "./ShowTutor.tsx";

type TutorType = {
    user: {
        fullName: string;
        avatarUrl: string;
    }
    subjects: string[]
    pricePerHour: number
    location?: string
    rating: number
    qualification?: string
    teachingFormat: string
    description?: string
    resume?: {
        experience: string;
        education: string;
    }
    certificates?: string[]
}

type ChooseTutorPropsType = {
    tutorItems: TutorType[]
    status: 'loading' | 'loaded' | 'error'
}

export const ChooseTutor = ({tutorItems, status}: ChooseTutorPropsType) => {

    return (
        <>
            <SearchTutor tutorItems={tutorItems} status={status}/>
            <ShowTutor tutorItems={tutorItems} status={status}/>
        </>
    );
};