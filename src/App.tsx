import {Header} from "./pages/Header/Header.tsx";
// // import {MainPage} from "./pages/Main/MainPage.tsx";
import {Footer} from "./pages/Footer/Footer.tsx";
import {TutorPage} from "./pages/TutorPage/TutorPage.tsx";
// import {ChooseTutor} from "./pages/ChooseTutor/ChooseTutor.tsx";
// import {Login} from "./pages/Login/Login.tsx";
// import {Registration} from "./pages/Registration/Registration.tsx";

function App() {
  return (
      <>
          <Header/>
          {/*<MainPage/>*/}
          {/*<ChooseTutor/>*/}
          <TutorPage/>
          <Footer/>

        {/*<Login/>*/}
        {/*  <Registration />*/}
      </>
  )

}

export default App
