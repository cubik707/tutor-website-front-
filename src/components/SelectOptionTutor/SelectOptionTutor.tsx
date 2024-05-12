import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper/FlexWrapper.tsx";
import {Button} from "../Button/Button.tsx";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectTutor, TutorType} from "../../redux/slices/tutor.ts";
import {useTutorContext} from "../../context/TutorContext.tsx";


export const SelectOptionTutor = () => {
    const {items, status} = useSelector(selectTutor);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedOffline, setSelectedOffline] = useState('');

    const { filteredTutors, setFilteredTutors } = useTutorContext();
    console.log(filteredTutors)

    const handleChangeSubject = (event: SelectChangeEvent) => {
        setSelectedSubject(event.target.value);
    };

    const handleChangeCity = (event: SelectChangeEvent) => {
        setSelectedCity(event.target.value);
    };

    const handleChangeOffline = (event: SelectChangeEvent) => {
        setSelectedOffline(event.target.value);
    };

    const handleFilterTutors = () => {
        let filteredTutorsTemp: TutorType[] = [...items];

        if (selectedSubject) {
            filteredTutorsTemp = items.filter(tutor => tutor.subjects.includes(selectedSubject));
        }

        if (selectedCity) {
            filteredTutorsTemp = items.filter(tutor => tutor.location === selectedCity);
        }

        if (selectedOffline) {
            filteredTutorsTemp = items.filter(tutor => tutor.teachingFormat === selectedOffline);
        }

        setFilteredTutors(filteredTutorsTemp);

        return <Navigate to={'/tutors'}/>
    };
    console.log(status);
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
                        <MenuItem value={'Оффлайн'}>Оффлайн</MenuItem>
                        <MenuItem value={'Онлайн'}>Онлайн</MenuItem>
                    </Select>
                </FormControl>
                <Button height={"56px"} width={"150px"} title={"Найти"} onClick={handleFilterTutors}/>
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