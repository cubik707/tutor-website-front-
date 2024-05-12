import {TutorCard} from "../../components/TutorCard/TutorCard.tsx";
import {Container} from "../../components/Container/Container.ts";
import {TutorInfo} from "../../components/TutorInfo/TutorInfo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {Link, useParams} from 'react-router-dom';
import {Pagination, PaginationItem} from "@mui/material";
import styled from "styled-components";
import React from "react";
import {useTutorContext} from "../../context/TutorContext.tsx";



function Content() {
    const { filteredTutors, setFilteredTutors } = useTutorContext();

    const { page } =  useParams<{ page: string }>();
    const tutorsPerPage = 4;

    const startIndex = (parseInt(page ?? '1', 10) - 1) * tutorsPerPage;
    const endIndex = startIndex + tutorsPerPage;
    const tutorsToShow = filteredTutors.slice(startIndex, endIndex)

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
                                   reviewsCount={0}
                                   teachingFormat={tutor.teachingFormat}
                                   city={tutor.location}
                        />
                    </FlexWrapper>
                </React.Fragment>
            ))}
            <FlexWrapper justify={"center"}>
                <Pagination
                    page={(parseInt(page ?? '1', 10) - 1) * tutorsPerPage}
                    count={Math.ceil( filteredTutors.length / tutorsPerPage)}
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


export const ShowTutor = () => {
    return (
        <ShowTutorStyled>
            <Container>
                <Content/>
            </Container>
        </ShowTutorStyled>
    );
}

const ShowTutorStyled = styled.section`
    padding: 65px 0;
`