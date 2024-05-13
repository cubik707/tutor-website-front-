import {Container} from "../../components/Container/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {TutorCard} from "../../components/TutorCard/TutorCard.tsx";
import {TutorInfo} from "../../components/TutorInfo/TutorInfo.tsx";
import {ReviewAboutTutor} from "../../components/ReviewAboutTutor/ReviewAboutTutor.tsx";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {TutorType} from "../../redux/slices/tutor.ts";
import {useNavigate} from "react-router-dom";
import axios from "../../axios.ts";
import {fetchReviews} from "../../redux/slices/review.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {Review} from "../../components/Review/Review.tsx";
import {selectIsAuth} from "../../redux/slices/auth.ts";

type TutorInfoBlockPropsType = {
    tutorId: string | undefined
}

export const TutorInfoBlock = ({tutorId}: TutorInfoBlockPropsType) => {
    const [tutor, setTutor] = useState<TutorType>();
    console.log('TutorInfoBlock')

    useEffect(() => {
        axios.get(`/tutors/${tutorId}`)
            .then(res => {
                setTutor(res.data);
            })
            .catch((err) => {
                console.warn(err);
                alert('Ошибка при получении репетитора!')
            })

    }, []);

    const dispatch = useDispatch<AppDispatch>();
    const {items, status} = useSelector((state: RootState) => state.reviews);


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
    const navigate = useNavigate();
    const isAuth = useSelector(selectIsAuth);
    const onClickHandler = (id: string | undefined) => {
        isAuth
            ? navigate(`/tutors/${id}/reviews/create`)
            : alert('Для того чтобы оставить отзыв необходимо авторизоваться!')
    }

    return (
        <TutorInfoBlockStyled>
            <Container>
                {tutor && (
                    <FlexWrapper justify={"space-between"}>
                        <TutorCard tutorName={tutor.user.fullName}
                                   subject={tutor.subjects}
                                   qualification={tutor.qualification}
                                   description={tutor.description}/>
                        <TutorInfo btnTitle={"Оставить отзыв"}
                                   onClickHandler={() => onClickHandler(tutorId)}
                                   rating={tutor.rating}
                                   experience={tutor.resume!.experience}
                                   pricePerHour={tutor.pricePerHour}
                                   reviewsCount={0}
                                   teachingFormat={tutor.teachingFormat}
                                   city={tutor!.location}
                        />
                    </FlexWrapper>
                )}
                <ReviewAboutTutor reviewItems={reviewItems} title={"Отзывы о репетиторе"} status={status}/>
                {tutor && tutor.resume && (
                    <ResumeBlock>
                        <SectionTitle margin={"0 0 45px 0"}>Резюме</SectionTitle>
                        <FlexWrapper gap={"125px"} justify={"space-between"}>
                            <FlexWrapper direction={"column"} gap={"25px"}>
                                <Title>Образование</Title>
                                <Text>{tutor.resume.education}</Text>
                            </FlexWrapper>
                            <FlexWrapper direction={"column"} gap={"25px"}>
                                <Title>Опыт работы</Title>
                                <Text>{tutor.resume.experience}</Text>
                            </FlexWrapper>
                        </FlexWrapper>
                    </ResumeBlock>
                )}
            </Container>
        </TutorInfoBlockStyled>
    );
};

const TutorInfoBlockStyled = styled.section`
    padding: 65px 0;
`

const ResumeBlock = styled.section`
    margin: 0 0 65px 0;
`

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;
    color: ${
            theme.colors.fontBlack
    };
`
// const DateText = styled.span`
//     font-size: 18px;
//     font-weight: 400;
//     line-height: 28px;
//     color: ${
//     theme.colors.fontGray
// };
// `

const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: ${
            theme.colors.fontGray
    };
`