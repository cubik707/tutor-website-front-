import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GlobalStyled} from "./styles/Global.styled.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyled/>
        <App/>
    </React.StrictMode>,
)
