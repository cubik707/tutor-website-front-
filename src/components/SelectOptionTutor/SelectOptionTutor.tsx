import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper/FlexWrapper.tsx";
import {Button} from "../Button/Button.tsx";
import {Navigate} from "react-router-dom";


export const SelectOptionTutor = () => {
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleChangeSubject = (event: SelectChangeEvent) => {
        setSelectedSubject(event.target.value);
    };

    const [selectedCity, setSelectedCity] = useState('');

    const handleChangeCity = (event: SelectChangeEvent) => {
        setSelectedCity(event.target.value);
    };

    const [selectedOffline, setSelectedOffline] = useState('');

    const handleChangeOffline = (event: SelectChangeEvent) => {
        setSelectedOffline(event.target.value);
    };

    const filteredTutors = () => {

        return <Navigate to={'/tutors'}/>;
    }

    return (
        <SelectOptionStyled>
            <FlexWrapper gap={"15px"}>
                <FormControl sx={{m: 0, minWidth: 330}}>
                    <InputLabel id="choose-subject-label">Выберите предмет</InputLabel>
                    <Select
                        labelId="choose-subject-label"
                        id="choose-subject"
                        value={selectedSubject}
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
                        <MenuItem value={'История'}>Биология</MenuItem>
                        <MenuItem value={'История'}>Химия</MenuItem>
                        <MenuItem value={'История'}>Русский язык</MenuItem>
                        <MenuItem value={'История'}>Белорусский язык</MenuItem>
                        <MenuItem value={'История'}>Обществоведение</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{m: 0, minWidth: 330}}>
                    <InputLabel id="choose-city-label">Выберите город</InputLabel>
                    <Select
                        labelId="choose-city-label"
                        id="choose-city"
                        value={selectedCity}
                        onChange={handleChangeCity}
                        autoWidth
                        label="Выберите город"
                    >
                        <MenuItem value="">
                            <em>-</em>
                        </MenuItem>
                        <MenuItem value={'Минск'}>Минск</MenuItem>
                        <MenuItem value={'Брест'}>Брест</MenuItem>
                        <MenuItem value={'Гродно'}>Гродно</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{m: 0, minWidth: 230}}>
                    <InputLabel id="choose-offline-label">Формат обучения</InputLabel>
                    <Select
                        labelId="choose-offline-label"
                        id="choose-offline"
                        value={selectedOffline}
                        onChange={handleChangeOffline}
                        autoWidth
                        label="Формат обучения"
                    >
                        <MenuItem value="">
                            <em>-</em>
                        </MenuItem>
                        <MenuItem value={'Минск'}>Оффлайн</MenuItem>
                        <MenuItem value={'Брест'}>Онлайн</MenuItem>
                    </Select>
                </FormControl>
                <Button height={"56px"} width={"150px"} title={"Найти"} onClick={filteredTutors}/>
            </FlexWrapper>

        </SelectOptionStyled>
    );
};

const SelectOptionStyled = styled.div`
    height: 155px;
    border: 1px solid rgb(108, 108, 114);
    background: rgba(245, 245, 245, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 47px;
`