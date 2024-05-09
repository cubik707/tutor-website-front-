import {Header} from "./pages/Header/Header.tsx";
import {MainPage} from "./pages/Main/MainPage.tsx";
import {Footer} from "./pages/Footer/Footer.tsx";
import {TutorPage} from "./pages/TutorPage/TutorPage.tsx";
import {ChooseTutor} from "./pages/ChooseTutor/ChooseTutor.tsx";
import {Login} from "./pages/Login/Login.tsx";
import {Registration} from "./pages/Registration/Registration.tsx";

import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth.ts";
import {PersonalAccount} from "./pages/PersonalAccount/PersonalAccount.tsx";



function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);
  return (
      <>
          <Header/>
          <Routes>
              <Route path={"/"} element={<MainPage/>}/>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/register"} element={ <Registration/>}/>
              <Route path={"/tutors/:page"} element={<ChooseTutor/>}/>
              <Route path={`/tutors/:_id`} element={<TutorPage/>}/>
              <Route path={`/personalAccount/*`} element={<PersonalAccount/>}/>
          </Routes>
          <Footer/>
      </>
  )

}

export default App
