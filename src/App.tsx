import {Header} from "./pages/Header/Header.tsx";
import {MainPage} from "./pages/Main/MainPage.tsx";
import {Footer} from "./pages/Footer/Footer.tsx";
import {TutorPage} from "./pages/TutorPage/TutorPage.tsx";
import {ChooseTutor} from "./pages/ChooseTutor/ChooseTutor.tsx";
import {Login} from "./pages/Login/Login.tsx";
import {Registration} from "./pages/Registration/Registration.tsx";

import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
          <Header/>
          <Routes>
              <Route path={"/"} element={<MainPage/>}/>
              <Route path={"/login"} element={<Login/>}/>
              <Route path={"/register"} element={ <Registration/>}/>
              <Route path={"/tutors"} element={<ChooseTutor/>}/>
              <Route path={"/tutors/${_id}"} element={<TutorPage/>}/>
          </Routes>
          <Footer/>
      </>
  )

}

export default App
