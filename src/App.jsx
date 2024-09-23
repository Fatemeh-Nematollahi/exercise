import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Bloge from "./pages/bloge/bloge";
import Login from "./pages/login/login";
import Panel from "./pages/panel/panel";
import Course from "./pages/course/course";
import Setting from "./pages/setting";
import PrivetRoute from "./Component/rout/privetRoute";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bloge/*" element={<Bloge />} >
        <Route path="php" element={<h2>php article</h2>}/>
        <Route path="react" element={<h2>react article</h2>}/>
        <Route path="js" element={<h2>js article</h2>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<PrivetRoute><Panel/></PrivetRoute>} />
        <Route path="/setting" element={<PrivetRoute><Setting /></PrivetRoute>} />
        <Route path="/course/:courseId" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
