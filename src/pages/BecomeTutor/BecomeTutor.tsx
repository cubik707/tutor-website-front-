import {SectionTitle} from "../../components/SectionTitle/SectionTitle.tsx";
import {
    Checkbox, FormControl,
    FormControlLabel,
    FormGroup, InputLabel, MenuItem, Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import {Button} from "../../components/Button/Button.tsx";
import styled from "styled-components";
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useForm} from "react-hook-form";
import {fetchTutorApplication} from "../../redux/slices/tutorApplication.ts";
import {selectIsAuth} from "../../redux/slices/auth.ts";
import {Navigate} from "react-router-dom";

type TutorApplicationType = {
    subjects: string[]
    pricePerHour: number
    location?: string
    rating: number;
    qualification?: string
    description?: string
    additionalInfo?: string
    teachingFormat: string
    resume?: {
        experience: string
        education: string
    }
};


export const BecomeTutor = () => {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth);
    const isAuth = useSelector(selectIsAuth);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<TutorApplicationType>({
        mode: "onChange",
    });


    const onSubmit = async (formData: TutorApplicationType) => {
        const applicationData = {
            ...formData,
            user: {
                fullName: auth.data ? auth.data.fullName : '',
                avatarUrl: auth.data ? auth.data.avatarUrl : '',
            },
            rating: 0,
            subjects: subjects,
            teachingFormat: offline,
        };
        console.log(applicationData);
        // Отправляем данные на сервер
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const response = await dispatch(fetchTutorApplication(applicationData));

        // Обработка ответа от сервера
        if (response.payload) {
            alert('Заявка успешно подана!');
            return <Navigate to={'/'}/>
        } else {
            alert('Не удалось подать заявку!')
        }
    };


    const [subjects, setSubjects] = useState<string[]>([]);
    const handleChangeSubject = (event: ChangeEvent<HTMLInputElement>) => {
        const subject = event.target.value;
        const isChecked = event.target.checked;

        setSubjects(prevSelectedSubjects => {
            if (isChecked) {
                return [...prevSelectedSubjects, subject];
            } else {
                return prevSelectedSubjects.filter(item => item !== subject);
            }
        });
    };

    const [offline, setOffline] = useState('');

    const handleChangeOffline = (event: SelectChangeEvent) => {
        setOffline(event.target.value);
    };


    return (
        isAuth
            ? <Wrapper>
                <BecomeTutorStyled>
                    <SectionTitle textAlign={"center"}>Подать заявку на репетитора</SectionTitle>
                    <StyledForm onSubmit={handleSubmit(onSubmit)}>
                        <Text>Выберите преподаваемые предметы:</Text>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox onChange={handleChangeSubject} value="Математика"/>}
                                label="Математика"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChangeSubject} value="Физика"/>}
                                label="Физика"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChangeSubject} value="История"/>}
                                label="История"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChangeSubject} value="Обществоведение"/>}
                                label="Обществоведение"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChangeSubject} value="Химия"/>}
                                label="Химия"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChangeSubject} value="Биология"/>}
                                label="Биология"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChangeSubject} value="Русский язык"/>}
                                label="Русский язык"
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleChangeSubject} value="Белорусский язык"/>}
                                label="Белорусский язык"
                            />
                        </FormGroup>
                        <TextField
                            label="Цена за час"
                            error={Boolean(errors.pricePerHour?.message)}
                            helperText={errors.pricePerHour?.message}
                            {...register('pricePerHour', {required: 'Укажите цену'})}
                            fullWidth/>
                        <FormControl>
                            <InputLabel id="choose-offline-label">Формат обучения</InputLabel>
                            <Select
                                labelId="choose-offline-label"
                                id="choose-offline"
                                value={offline}
                                onChange={handleChangeOffline}
                                autoWidth
                                label="Формат обучения"
                                fullWidth
                            >
                                <MenuItem value="">
                                    <em>-</em>
                                </MenuItem>
                                <MenuItem value={'Минск'}>Оффлайн</MenuItem>
                                <MenuItem value={'Брест'}>Онлайн</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Место пребывания"
                            {...register('location')}
                            fullWidth/>
                        <TextField
                            label="Квалификация"
                            {...register('qualification')}
                            fullWidth/>
                        <TextField
                            label="Образование"
                            {...register('resume.education')}
                            fullWidth/>
                        <TextField
                            label="Опыт работы"
                            {...register('resume.experience')}
                            fullWidth/>
                        <TextField
                            label="Дополнительная информация"
                            {...register('description')}
                            multiline
                            rows={4}
                        />
                        <Button type={"submit"} width={"100%"} title={"Подать заявку"} onClick={() => {
                        }}/>
                    </StyledForm>
                </BecomeTutorStyled>
            </Wrapper>
            : <div>Для того чтобы стать репетитором вам необходимо сначала авторизоваться!</div>
    );
};

const BecomeTutorStyled = styled.div`
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    padding: 50px;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 175px 0 65px 0;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
`
