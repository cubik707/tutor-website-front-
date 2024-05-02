import { Button, Paper, TextField, Typography } from "@mui/material";

import styles from "./Login.module.css";

// type LoginPropsType = {
//
// };
export const Login = () => {
    return (
        <Paper className={styles.root}>
            <Typography className={styles.title} variant="h5">
                Вход в аккаунт
            </Typography>
            <TextField className={styles.field} label="E-Mail" fullWidth />
            <TextField className={styles.field} label="Пароль" fullWidth />
            <Button size="large" variant="contained" fullWidth>
                Войти
            </Button>
        </Paper>
    );
};