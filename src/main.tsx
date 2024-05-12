
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import {GlobalStyled} from "./styles/Global.styled.ts";
import {Provider} from "react-redux";
import store from "./redux/store.ts";
import {TutorProvider} from "./context/TutorContext.tsx";



ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <GlobalStyled/>
        <BrowserRouter>
            <Provider store={store}>
                <TutorProvider> {/* Добавьте TutorProvider внутри Provider */}
                    <App/>
                </TutorProvider>
            </Provider>
        </BrowserRouter>
    </>,
)
