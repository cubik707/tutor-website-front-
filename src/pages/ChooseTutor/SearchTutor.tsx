import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {theme} from "../../styles/Theme.ts";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";

export const SearchTutor = () => {
    //----------subject-----------
    const [subject, setSubject] = useState('');

    const handleChangeSubject = (event: SelectChangeEvent) => {
        setSubject(event.target.value);
    };

    //------------pricePerHour------------
    const [pricePerHour, setPricePerHour] = useState('');

    const handleChangePricePerHour = (event: SelectChangeEvent) => {
        setPricePerHour(event.target.value);
    };

    //------City----------
    const [city, setCity] = useState('');

    const handleChangeCity = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    };

    //--------Time------
    const [time, setTime] = useState('');

    const handleChangeTime = (event: SelectChangeEvent) => {
        setTime(event.target.value);
    };

    //--------Rating------
    const [rating, setRating] = useState('');

    const handleChangeRating = (event: SelectChangeEvent) => {
        setRating(event.target.value);
    };

    //--------Qualification------
    const [qualification, setQualification] = useState('');

    const handleChangeQualification = (event: SelectChangeEvent) => {
        setQualification(event.target.value);
    };

    //----------Experience---------
    const [experience, setExperience] = useState('');

    const handleChangeExperience = (event: SelectChangeEvent) => {
        setExperience(event.target.value);
    };

    //---------StudyFormat----------
    const [offline, setOffline] = useState('');

    const handleChangeOffline = (event: SelectChangeEvent) => {
        setOffline(event.target.value);
    };

    return (
        <SearchTutorStyled>
            <Container>
                <SectionTitle color={"white"}>Удобный поиск репетитора tutor</SectionTitle>
                <Block>
                    <FormControl variant="standard" sx={{m: 0, minWidth: 242}}>
                        <InputLabel id="choose-subject-label">Выберите предмет</InputLabel>
                        <Select
                            labelId="choose-subject-label"
                            id="choose-subject"
                            value={subject}
                            onChange={handleChangeSubject}
                            autoWidth
                            label="Выберите предмет"
                        >
                            <MenuItem value="">
                                <em>-</em>
                            </MenuItem>
                            <MenuItem value={'Математика'}>Математика</MenuItem>
                            <MenuItem value={'Физика'}>Физика</MenuItem>
                            <MenuItem value={'История'}>История</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{m: 0, minWidth: 242}}>
                        <InputLabel id="pricePerHour-label">Цена за час</InputLabel>
                        <Select
                            labelId="pricePerHour-label"
                            id="pricePerHour"
                            value={pricePerHour}
                            onChange={handleChangePricePerHour}
                            autoWidth
                            label="Выберите предмет"
                        >
                            <MenuItem value="">
                                <em>-</em>
                            </MenuItem>
                            <MenuItem value={'10-15'}>10-15 р.</MenuItem>
                            <MenuItem value={'15-20'}>15-20 р.</MenuItem>
                            <MenuItem value={'20+'}>20+ р.</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{m: 0, minWidth: 242}}>
                        <InputLabel id="choose-city-label">Выберите город</InputLabel>
                        <Select
                            labelId="choose-city-label"
                            id="choose-city"
                            value={city}
                            onChange={handleChangeCity}
                            autoWidth
                            label="Выберите предмет"
                        >
                            <MenuItem value="">
                                <em>-</em>
                            </MenuItem>
                            <MenuItem value={'Минск'}>Минск</MenuItem>
                            <MenuItem value={'Брест'}>Брест</MenuItem>
                            <MenuItem value={'Гродно'}>Гродно</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{m: 0, minWidth: 242}}>
                        <InputLabel id="choose-time-label">Выберите время</InputLabel>
                        <Select
                            labelId="choose-time-label"
                            id="choose-time"
                            value={time}
                            onChange={handleChangeTime}
                            autoWidth
                            label="Выберите время"
                        >
                            <MenuItem value="">
                                <em>-</em>
                            </MenuItem>
                            <MenuItem value={'Математика'}>Математика</MenuItem>
                            <MenuItem value={'Физика'}>Физика</MenuItem>
                            <MenuItem value={'История'}>История</MenuItem>
                        </Select>
                    </FormControl>
                </Block>
                <FlexWrapper justify={"space-between"}>
                    <MiniBlock>
                        <FormControl variant="standard" sx={{m: 0, minWidth: 242}}>
                            <InputLabel id="rating-label">Рейтинг</InputLabel>
                            <Select
                                labelId="rating-label"
                                id="rating"
                                value={rating}
                                onChange={handleChangeRating}
                                autoWidth
                                label="Рейтинг"
                            >
                                <MenuItem value="">
                                    <em>-</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </MiniBlock>
                    <MiniBlock>
                        <FormControl variant="standard" sx={{m: 0, minWidth: 242}}>
                            <InputLabel id="choose-qualification-label">Квалификация</InputLabel>
                            <Select
                                labelId="choose-qualification-label"
                                id="choose-qualification"
                                value={qualification}
                                onChange={handleChangeQualification}
                                autoWidth
                                label="Квалификация"
                            >
                                <MenuItem value="">
                                    <em>-</em>
                                </MenuItem>
                                <MenuItem value={'Кандидат наук'}>Кандидат наук</MenuItem>
                                <MenuItem value={'Нет'}>Нет</MenuItem>
                            </Select>
                        </FormControl>
                    </MiniBlock>
                    <MiniBlock>
                        <FormControl variant="standard" sx={{m: 0, minWidth: 242}}>
                            <InputLabel id="choose-experience-label">Опыт работы</InputLabel>
                            <Select
                                labelId="choose-experience-label"
                                id="choose-experience"
                                value={experience}
                                onChange={handleChangeExperience}
                                autoWidth
                                label="Опыт работы"
                            >
                                <MenuItem value="">
                                    <em>-</em>
                                </MenuItem>
                                <MenuItem value={'Нет'}>Нет</MenuItem>
                                <MenuItem value={'1-5'}>1-5</MenuItem>
                                <MenuItem value={'5+'}>5+</MenuItem>
                            </Select>
                        </FormControl>
                    </MiniBlock>
                    <MiniBlock>
                        <FormControl variant="standard" sx={{m: 0, minWidth: 242}}>
                            <InputLabel id="choose-offline-label">Формат обучения</InputLabel>
                            <Select
                                labelId="choose-offline-label"
                                id="choose-offline"
                                value={offline}
                                onChange={handleChangeOffline}
                                autoWidth
                                label="Оффлайн"
                            >
                                <MenuItem value="">
                                    <em>-</em>
                                </MenuItem>
                                <MenuItem value={'Минск'}>Оффлайн</MenuItem>
                                <MenuItem value={'Брест'}>Онлайн</MenuItem>
                            </Select>
                        </FormControl>
                    </MiniBlock>
                </FlexWrapper>
            </Container>
        </SearchTutorStyled>
    );
};

const SearchTutorStyled = styled.section`
    padding: 175px 0 65px 0;
    background-color: ${theme.colors.fontBlack};
`

const Block = styled.div`
    margin: 45px 0 10px 0;
    padding: 7px 20px 20px 20px;
    background-color: #fff;
    border: 1px solid rgb(108, 108, 114);
    display: flex;
    justify-content: space-between;
    //gap: 57px;

`

const MiniBlock = styled.div`
    background-color: #fff;
    border: 1px solid rgb(108, 108, 114);
    padding: 7px 20px 20px 20px;
`