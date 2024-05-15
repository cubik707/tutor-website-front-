import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {EditableReview} from "./EditableReview.tsx";
import {useEffect} from "react";
import {fetchReviews} from "../../redux/slices/review.ts";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {fetchAuthMe} from "../../redux/slices/auth.ts";

export const MyReviews = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {items, status}
        = useSelector((state: RootState) => state.reviews);
    const { data } = useSelector((state: RootState) => state.auth);


    useEffect(() => {
        dispatch(fetchReviews());
        dispatch(fetchAuthMe());
    }, []);

    const userReviews = items.filter(review => review.user._id == data!._id);
    return (
        <MyReviewsStyled>
            <Container>
                <FlexWrapper gap={'25px'} direction={'column'}>
                    {status === 'loading'
                        ? <div>Loading...</div>
                        : userReviews.length > 0
                            ? userReviews.map((review, index) => (
                                <EditableReview key={index} review={review}/>
                            ))
                            : <div>У вас еще нет отзывов</div>
                    }
                </FlexWrapper>

            </Container>
        </MyReviewsStyled>
    );
};

const MyReviewsStyled = styled.section`
    padding: 65px 0;
    height: 1000px;
`
