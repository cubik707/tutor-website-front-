import styled from "styled-components";
import {Avatar} from "@mui/material";
import {fetchUpdateUser, UserType} from "../redux/slices/user.ts";
import {FlexWrapper} from "./FlexWrapper/FlexWrapper.tsx";
import {Button} from "./Button/Button.tsx";
import {theme} from "../styles/Theme.ts";
import {EditableSpan} from "./EditableSpan/EditableSpan.tsx";
import {useState} from "react";
import {useAppDispatch} from "../redux/store.ts";

type UserCardPropsType = {
    user: UserType
    onClick: () => void
}

export const UserCard = ({user, onClick}: UserCardPropsType) => {
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);
    const dispatch = useAppDispatch();
    const changeFullNameHandler = (text: string) => {
        setFullName(text);
        dispatch(fetchUpdateUser({ id: user._id, fullName: text, email:  email}));
    }
    const changeEmailHandler = (text: string) => {
        setEmail(text);
        dispatch(fetchUpdateUser({ id: user._id, fullName: fullName, email: text }));
    }
    return (
        <UserCardStyled>
            <FlexWrapper gap={"25px"}>
                <Avatar  src={user.avatarUrl} sx={{width:115, height: 115}}/>
                <FlexWrapper justify={'center'} direction={'column'}>
                    <Text>
                        <Accent>Имя: </Accent>
                        {fullName
                            ? <EditableSpan text={fullName} changeText={changeFullNameHandler} rows={1}/>
                            : ''}
                    </Text>
                    <Text>
                        <Accent>Почта: </Accent>
                        <EditableSpan text={email} changeText={changeEmailHandler} rows={1}/>
                    </Text>
                </FlexWrapper>
            </FlexWrapper>
            <Button width={"300px"} title={'Удалить пользователя'} onClick={onClick}/>
        </UserCardStyled>
    );
};

const UserCardStyled = styled.div`
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25), 4px 0 10px 0 rgba(0, 0, 0, 0.25);
    background: rgb(255, 255, 255);
    max-width: 525px;
    width: 100%;
    padding: 50px 30px 45px 30px;
    display: flex;
    flex-direction: column;

    gap: 35px
`

const Accent = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 28px;
    text-transform: uppercase;
    color: rgb(108, 108, 114);
    margin-right: 10px;
`

const Text = styled.span`
    font-size: 14px;
    font-weight: 300;
    line-height: 28px;
    text-transform: uppercase;
    color: ${theme.colors.fontBlack};
`
