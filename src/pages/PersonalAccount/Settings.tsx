import {Container} from "../../components/Container/Container.ts";
import styled from "styled-components";
import {UserCard} from "../../components/UserCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useEffect} from "react";
import {fetchAuthMe} from "../../redux/slices/auth.ts";
import {UserType} from "../../redux/slices/user.ts";

export const Settings = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {data} = useSelector((state: RootState) => state.auth);
    useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);
    const userData: UserType | null = data ? {
        fullName: data.fullName,
        createdAt: data.createdAt,
        email: data.email,
        isAdmin: data.isAdmin,
        updatedAt: data.updatedAt,
        __v: data.__v,
        _id: data._id
    } : null;

    return (
        <SettingsStyled>
            <Container>
                {userData && <UserCard user={userData}/>}
            </Container>
        </SettingsStyled>
    );
};

const SettingsStyled = styled.section`
    padding: 10% 0 10% 0 ;

`