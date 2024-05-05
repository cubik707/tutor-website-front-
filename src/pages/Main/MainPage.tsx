import {SelectTutor} from "./SelectTutor/SelectTutor.tsx";
import {ConvenientService} from "./ConvenientService/ConvenientService.tsx";
import {ReviewAboutTutor} from "../../components/ReviewAboutTutor/ReviewAboutTutor.tsx";
import {WhyTutor} from "./WhyTutor/WhyTutor.tsx";
import {Review} from "../../components/Review/Review.tsx";

const reviewItems = [
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
];
export const MainPage = () => {
    return (
        <>
            <SelectTutor/>
            <ConvenientService/>
            <ReviewAboutTutor reviewItems={reviewItems} title={"Отзывы о репетиторах"}/>
            <WhyTutor/>
        </>
    );
};