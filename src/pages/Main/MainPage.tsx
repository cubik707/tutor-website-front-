import {SelectTutor} from "./SelectTutor/SelectTutor.tsx";
import {ConvenientService} from "./ConvenientService/ConvenientService.tsx";
import {ReviewAboutTutor} from "./ReviewAboutTutor/ReviewAboutTutor.tsx";
import {WhyTutor} from "./WhyTutor/WhyTutor.tsx";

export const MainPage = () => {
    return (
        <>
            <SelectTutor/>
            <ConvenientService/>
            <ReviewAboutTutor/>
            <WhyTutor/>
        </>
    );
};