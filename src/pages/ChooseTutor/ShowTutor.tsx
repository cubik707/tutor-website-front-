import {TutorCard} from "../../components/TutorCard/TutorCard.tsx";
import {Container} from "../../components/Container/Container.ts";
import {TutorInfo} from "../../components/TutorInfo/TutorInfo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {Link, useParams} from 'react-router-dom';
import {Pagination, PaginationItem} from "@mui/material";
import styled from "styled-components";
import React from "react";


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

type ShowTutorPropsType = {
    tutorItems: TutorType[]
    status: 'loading' | 'loaded' | 'error'
}

function Content({tutorItems, status} : ShowTutorPropsType) {
    const { page } =  useParams<{ page: string }>();
    const tutorsPerPage = 4;

    // Если данные загружаются, показываем индикатор загрузки
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    const startIndex = (parseInt(page ?? '1', 10) - 1) * tutorsPerPage;
    const endIndex = startIndex + tutorsPerPage;
    const tutorsToShow = tutorItems.slice(startIndex, endIndex);

    return (
        <React.Fragment>
            {tutorsToShow.map((tutor, index) => (
                <React.Fragment key={index}>
                    <FlexWrapper gap={"22px"} margin={"0 0 22px 0"}>
                        <TutorCard tutorName={tutor.user.fullName}
                                   subject={tutor.subjects}
                                   qualification={tutor.qualification}
                                   description={tutor.description}/>

                        <TutorInfo btnTitle={"Перейти к профилю"}
                                   onClickHandler={() => {}}
                                   rating={tutor.rating}
                                   experience={tutor.resume?.experience}
                                   pricePerHour={tutor.pricePerHour}
                                   reviewsCount={0}/>
                    </FlexWrapper>
                </React.Fragment>
            ))}
            <FlexWrapper justify={"center"}>
                <Pagination
                    page={(parseInt(page ?? '1', 10) - 1) * tutorsPerPage}
                    count={Math.ceil(tutorItems.length / tutorsPerPage)}
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`/tutors/${item.page}`}
                            {...item}
                        />
                    )}
                />
            </FlexWrapper>
        </React.Fragment>
    );
}


export const ShowTutor = ({tutorItems, status} : ShowTutorPropsType) => {
    return (
        <ShowTutorStyled>
            <Container>
                <Content tutorItems={tutorItems} status={status}/>
            </Container>
        </ShowTutorStyled>
    );
}

const ShowTutorStyled = styled.section`
    padding: 65px 0;
`