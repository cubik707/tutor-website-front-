import {SelectTutor} from "./SelectTutor/SelectTutor.tsx";
import {ConvenientService} from "./ConvenientService/ConvenientService.tsx";
import {ReviewAboutTutor} from "../../components/ReviewAboutTutor/ReviewAboutTutor.tsx";
import {WhyTutor} from "./WhyTutor/WhyTutor.tsx";
import {Review} from "../../components/Review/Review.tsx";
import {useEffect} from "react";

import axios from '../../axios.ts'
import {useDispatch} from "react-redux";
import {fetchReviews} from "../../redux/slices/review.ts";
import {AppDispatch} from "../../redux/store.ts";

const reviewItems = [
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
    <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
];
export const MainPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchReviews());
    }, [])
    return (
        <>
            <SelectTutor/>
            <ConvenientService/>
            <ReviewAboutTutor reviewItems={reviewItems} title={"Отзывы о репетиторах"}/>
            <WhyTutor/>
        </>
    );
};