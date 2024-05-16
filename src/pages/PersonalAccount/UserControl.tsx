import styled from "styled-components";
import {Container} from "../../components/Container/Container.ts";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {RootState} from "../../redux/store.ts";
import {Link, useParams} from "react-router-dom";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper.tsx";
import {Pagination, PaginationItem} from "@mui/material";
import {fetchRemoveUsers, fetchUsers} from "../../redux/slices/user.ts";
import {UserCard} from "../../components/UserCard.tsx";

function Content() {
    const {page } = useParams<{ page: string }>();
    const userPerPage = 4;
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-expect-error: Fetching initial data on component mount
        dispatch(fetchUsers());
    }, [dispatch, page]);

    const { items, status } =
        useSelector((state: RootState) => state.users);

    // Если данные загружаются, показываем индикатор загрузки
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    // Если нет пользователей, показываем сообщение
    if (items.length === 0) {
        return <div>Нет пользователей</div>;
    }

    const currentPage = parseInt(page ?? '1', 10);
    const startIndex = (currentPage - 1) * userPerPage;
    const endIndex = startIndex + userPerPage;
    const tutorsToShow = items.slice(startIndex, endIndex);

    const onClickReject = (id: string) => {
        if (window.confirm('Вы действительно хотите удалить пользователя?')) {
            // @ts-expect-error: Fetching initial data on component mount
            dispatch(fetchRemoveUsers(id));
        }
    };

    return (
        <React.Fragment>
            {tutorsToShow.map((user, index) => (
                <React.Fragment key={index}>
                    <FlexWrapper gap={"22px"} margin={"0 0 22px 0"}>
                        <UserCard user={user} onClick={() => onClickReject(user._id)} />
                    </FlexWrapper>
                </React.Fragment>
            ))}
            <FlexWrapper justify={"center"}>
                <Pagination
                    page={currentPage}
                    count={Math.ceil(items.length / userPerPage)}
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`/personalAccount/users/${item.page}`}
                            {...item}
                        />
                    )}
                />
            </FlexWrapper>
        </React.Fragment>
    );
}

export const UserControl = () => {
    return (
        <UserControlStyled>
            <Container>
                <Content/>
            </Container>
        </UserControlStyled>
    );
};

const UserControlStyled = styled.section`
    padding: 65px 0;
    min-height: 800px;
    height: 100%;
`
