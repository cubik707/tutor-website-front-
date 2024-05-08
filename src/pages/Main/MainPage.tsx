import {SelectTutor} from "./SelectTutor/SelectTutor.tsx";
import {ConvenientService} from "./ConvenientService/ConvenientService.tsx";
import {ReviewAboutTutor} from "../../components/ReviewAboutTutor/ReviewAboutTutor.tsx";
import {WhyTutor} from "./WhyTutor/WhyTutor.tsx";
import {Review} from "../../components/Review/Review.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchReviews} from "../../redux/slices/review.ts";
import {AppDispatch, RootState} from "../../redux/store.ts";


// const reviewItems = [
//     <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
//     <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
//     <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
//     <Review rating={4} tutorName={"Анна Юдашкина"} userName={"Евгения"} comment={"Анна - замечательный репетитор. Мне понравилось работать с ней. Рекомендую."}/>,
// ];
export const MainPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, status } = useSelector((state: RootState) => state.reviews);


    // const isReviewsLoading = status === 'loading';

    useEffect(() => {
        dispatch(fetchReviews());
    }, []);

    // Создаем элементы компоненты Review на основе данных отзывов
    const reviewItems = items.map((review, index) => (
        <Review
            key={index}
            rating={review.rating}
            tutorName={review.tutorId.user.fullName}
            user={review.user}
            comment={review.comment}
        />
    ));

    return (
        <>
            <SelectTutor/>
            <ConvenientService/>
            <ReviewAboutTutor reviewItems={reviewItems} title={"Отзывы о репетиторах"} status={status}/>
            <WhyTutor/>
        </>
    );
};