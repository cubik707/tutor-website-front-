import {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    text:string
    changeText: (title:string) => void
    rows: number
};

export const EditableSpan = ({text, changeText, rows}: EditableSpanPropsType) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [itemText, setItemText] = useState(text);

    const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setItemText(event.currentTarget.value)
    }

    const onEditMode = () => setIsEditMode(true)
    const offEditMode = () => {
        setIsEditMode(false)
        changeText(itemText)
    }

    return (
        isEditMode
            ?
            <TextField
                variant="standard"
                value={itemText}
                onChange={changeItemTitleHandler}
                onBlur={offEditMode}
                multiline
                rows={rows}
            />
            : <span onDoubleClick={onEditMode}> {text} </span>
    );
};