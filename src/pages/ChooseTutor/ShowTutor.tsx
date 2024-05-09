import {TutorCard} from "../../components/TutorCard/TutorCard.tsx";
import {Container} from "../../components/Container/Container.ts";
import {TutorInfo} from "../../components/TutorInfo/TutorInfo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {Link, useParams} from 'react-router-dom';
import {Pagination, PaginationItem} from "@mui/material";
import styled from "styled-components";
import {useState} from "react";
import React from "react";

function Content() {
    const { page } =  useParams<{ page: string }>();
    const tutorsPerPage = 4;

    // Создаем данные о репетиторе
    const [tutorData, setTutorData] = useState([
        {
            tutorName: "Станислав Борисов",
            subjects: ["Матемитика", "Физика"],
            qualification: "Кандидат наук",
            description: "Преподаватель ВУЗа с 17-летним опытом работы Математика (программа средней школы, высшая математика), математический анализ, внешнее независимое оценивание, подготовка к экзаменам (зачетам, контрольным работам и др. )",
            rating: 5,
            experience: "5 лет",
            pricePerHour: 20,
            reviewsCount: 12
        },
        {
            tutorName: "Станислав Борисов",
            subjects: ["Матемитика", "Физика"],
            qualification: "Кандидат наук",
            description: "Преподаватель ВУЗа с 17-летним опытом работы Математика (программа средней школы, высшая математика), математический анализ, внешнее независимое оценивание, подготовка к экзаменам (зачетам, контрольным работам и др. )",
            rating: 5,
            experience: "5 лет",
            pricePerHour: 20,
            reviewsCount: 12
        }, {
            tutorName: "Станислав Борисов",
            subjects: ["Матемитика", "Физика"],
            qualification: "Кандидат наук",
            description: "Преподаватель ВУЗа с 17-летним опытом работы Математика (программа средней школы, высшая математика), математический анализ, внешнее независимое оценивание, подготовка к экзаменам (зачетам, контрольным работам и др. )",
            rating: 5,
            experience: "5 лет",
            pricePerHour: 20,
            reviewsCount: 12
        }, {
            tutorName: "Станислав Борисов",
            subjects: ["Матемитика", "Физика"],
            qualification: "Кандидат наук",
            description: "Преподаватель ВУЗа с 17-летним опытом работы Математика (программа средней школы, высшая математика), математический анализ, внешнее независимое оценивание, подготовка к экзаменам (зачетам, контрольным работам и др. )",
            rating: 5,
            experience: "5 лет",
            pricePerHour: 20,
            reviewsCount: 12
        }, {
            tutorName: "Станислав Борисов",
            subjects: ["Матемитика", "Физика"],
            qualification: "Кандидат наук",
            description: "Преподаватель ВУЗа с 17-летним опытом работы Математика (программа средней школы, высшая математика), математический анализ, внешнее независимое оценивание, подготовка к экзаменам (зачетам, контрольным работам и др. )",
            rating: 5,
            experience: "5 лет",
            pricePerHour: 20,
            reviewsCount: 12
        },
        // Добавьте других репетиторов по аналогии, если нужно
    ]);

    const startIndex = (parseInt(page ?? '1', 10) - 1) * tutorsPerPage;
    const endIndex = startIndex + tutorsPerPage;
    const tutorsToShow = tutorData.slice(startIndex, endIndex);

    return (
        <React.Fragment>
            {tutorsToShow.map((tutor, index) => (
                <React.Fragment key={index}>
                    <FlexWrapper gap={"22px"} margin={"0 0 22px 0"}>
                        <TutorCard tutorName={tutor.tutorName}
                                   subject={tutor.subjects}
                                   qualification={tutor.qualification}
                                   description={tutor.description}/>

                        <TutorInfo btnTitle={"Перейти к профилю"}
                                   onClickHandler={() => {}}
                                   rating={tutor.rating}
                                   experience={tutor.experience}
                                   pricePerHour={tutor.pricePerHour}
                                   reviewsCount={tutor.reviewsCount}/>
                    </FlexWrapper>
                </React.Fragment>
            ))}
            <FlexWrapper justify={"center"}>
                <Pagination
                    page={(parseInt(page ?? '1', 10) - 1) * tutorsPerPage}
                    count={Math.ceil(tutorData.length / tutorsPerPage)}
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
                <Content />
            </Container>
        </ShowTutorStyled>
    );
}

const ShowTutorStyled = styled.section`
    padding: 65px 0;
`