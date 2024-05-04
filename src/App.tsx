// import {Login} from "./components/Login/Login.tsx";


// import {MainPage} from "./pages/Main/MainPage.tsx";
import {Header} from "./pages/Header/Header.tsx";
import {MainPage} from "./pages/Main/MainPage.tsx";
import {Footer} from "./pages/Footer/Footer.tsx";

function App() {
  return (
      <>
          <Header/>
          <MainPage/>
          <Footer/>
        {/*/!*<Login/>*!/*/}
        {/*  <Registration />*/}
      </>
  )

}

export default App
