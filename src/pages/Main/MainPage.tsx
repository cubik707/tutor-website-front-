import {SelectTutor} from "./SelectTutor/SelectTutor.tsx";
import {ConvenientService} from "./ConvenientService/ConvenientService.tsx";

export const MainPage = () => {
    return (
        <>
            <SelectTutor/>
            <ConvenientService/>
        </>
    );
};