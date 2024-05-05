import {TutorCard} from "../../components/TutorCard/TutorCard.tsx";
import {Container} from "../../components/Container/Container.ts";
import {TutorInfo} from "../../components/TutorInfo/TutorInfo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {Link, MemoryRouter, Route, Routes, useLocation} from 'react-router-dom';
import {Pagination, PaginationItem} from "@mui/material";
import styled from "styled-components";
import {useState} from "react";
import React from "react";

function Content() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
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

    // Вычисляем индекс начала и конца отображаемых репетиторов на текущей странице
    const startIndex = (page - 1) * tutorsPerPage;
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
                                   onClickHandler={()=>{}}
                                   rating={tutor.rating}
                                   experience={tutor.experience}
                                   pricePerHour={tutor.pricePerHour}
                                   reviewsCount={tutor.reviewsCount}/>
                    </FlexWrapper>
                </React.Fragment>
            ))}
            <FlexWrapper justify={"center"}>
                <Pagination
                    page={page}
                    count={Math.ceil(tutorData.length / tutorsPerPage)} // Вычисляем общее количество страниц
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
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
                <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
                    <Routes>
                        <Route path="*" element={<Content/>}/>
                    </Routes>
                </MemoryRouter>
            </Container>
        </ShowTutorStyled>

    );
}

const ShowTutorStyled = styled.section`
    padding: 65px 0;
`