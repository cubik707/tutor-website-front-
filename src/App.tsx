import {Header} from "./pages/Header/Header.tsx";
import {MainPage} from "./pages/Main/MainPage.tsx";
import {Footer} from "./pages/Footer/Footer.tsx";
import {TutorPage} from "./pages/TutorPage/TutorPage.tsx";
import {ChooseTutor} from "./pages/ChooseTutor/ChooseTutor.tsx";
import {Login} from "./pages/Login/Login.tsx";
import {Registration} from "./pages/Registration/Registration.tsx";

import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAuthMe} from "./redux/slices/auth.ts";
import {fetchTutors} from "./redux/slices/tutor.ts";
import {PersonalAccount} from "./pages/PersonalAccount/PersonalAccount.tsx";
import {BecomeTutor} from "./pages/BecomeTutor/BecomeTutor.tsx";



function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        // @ts-expect-error: Fetching initial data on component mount
        dispatch(fetchAuthMe());
        // @ts-expect-error: Fetching initial data on component mount
        dispatch(fetchTutors());
    }, []);


  return (
      <>
          <Header/>
          <Routes>
              <Route path={"/"} element={<MainPage/>}/>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/register"} element={ <Registration/>}/>
              <Route path={"/tutors/choose/:page"} element={<ChooseTutor/>}/>
              <Route path={'/tutors/:id/*'} element={<TutorPage/>}/>
              <Route path={'/tutors/create'} element={<BecomeTutor/>}/>
              <Route path={`/personalAccount/*`} element={<PersonalAccount/>}/>
          </Routes>
          <Footer/>
      </>
  )

}

export default App
