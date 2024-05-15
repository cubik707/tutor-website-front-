import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import {Link, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {TutorCard} from "../../components/TutorCard/TutorCard.tsx";
import {TutorInfo} from "../../components/TutorInfo/TutorInfo.tsx";
import {Pagination, PaginationItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store.ts";
import {fetchRemoveTutorApplication, fetchTutorApplicationGET} from "../../redux/slices/tutorApplication.ts";
import {fetchTutorsCreate} from "../../redux/slices/tutor.ts";
// import {fetchRegister} from "../../redux/slices/auth.ts";
//
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
        experience: string
        education: string
    }
    certificates?: string[]
}

function Content() {
    const dispatch = useDispatch();


    useEffect(() => {
        // @ts-expect-error: Fetching initial data on component mount
        dispatch(fetchTutorApplicationGET());
    }, []);


    const { items, status } =
        useSelector((state: RootState) => state.tutorApplication);

    const {page } = useParams<{ page: string }>();
    const tutorsApplicationPerPage = 4;

    console.log(status);
    // Если данные загружаются, показываем индикатор загрузки
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    const startIndex = (parseInt(page ?? '1', 10) - 1) * tutorsApplicationPerPage;
    const endIndex = startIndex + tutorsApplicationPerPage;
    const tutorsToShow = items.slice(startIndex, endIndex);

    const approveApplication = async (values: TutorType, id:string) => {
        // @ts-expect-error: Fetching initial data on component mount
        const data = await dispatch(fetchTutorsCreate(values));
        // @ts-expect-error: Fetching initial data on component mount
        dispatch(fetchRemoveTutorApplication(id));
        if(!data.payload){
            return alert('Не удалось одобрить заявку!')
        } else {
            return alert('Заявка успешно одобрена!')
        }
    };

    const onClickReject = (id: string) => {

        if(window.confirm('Вы действительно хотите отклонить заявку?')){
            // @ts-expect-error: Fetching initial data on component mount
            dispatch(fetchRemoveTutorApplication(id));
        }

    }

    console.log(items)

    return (
        <React.Fragment>
            {tutorsToShow.map((tutorApplication, index) => (
                <React.Fragment key={index}>
                    <FlexWrapper gap={"22px"} margin={"0 0 22px 0"}>
                        <TutorCard tutorName={tutorApplication.user.fullName}
                                   subject={tutorApplication.subjects}
                                   qualification={tutorApplication.qualification}
                                   description={tutorApplication.description}/>

                        <TutorInfo btnTitle={"Одобрить заявку"}
                                   onClickHandler={() => approveApplication(tutorApplication, tutorApplication._id)}
                                   rating={tutorApplication.rating}
                                   experience={tutorApplication.resume?.experience}
                                   pricePerHour={tutorApplication.pricePerHour}
                                   teachingFormat={tutorApplication.teachingFormat}
                                   city={tutorApplication.location}
                                   reviewsCount={0}
                                   secondBtn
                                   secondBtnTitle={"Отклонить заявку"}
                                   secondBtnOnClickHandler={()=>onClickReject(tutorApplication._id)}
                        />
                    </FlexWrapper>
                </React.Fragment>
            ))}
            <FlexWrapper justify={"center"}>
                <Pagination
                    page={(parseInt(page ?? '1', 10) - 1) * tutorsApplicationPerPage}
                    count={Math.ceil(items.length / tutorsApplicationPerPage)}
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`/personalAccount/tutorApplication/${item.page}`}
                            {...item}
                        />
                    )}
                />
            </FlexWrapper>
        </React.Fragment>
    );
}


export const TutorControl = () => {
    return (
        <TutorControlStyled>
            <Container>
                <Content/>
            </Container>
        </TutorControlStyled>
    );
};

const TutorControlStyled = styled.section`
    padding: 65px 0;
`