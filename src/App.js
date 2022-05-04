import AppContext from "AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import TeacherPassword from "pages/TeacherPassword";
import Menu from "pages/Menu";
import Paint from "pages/Paint";
import EditCour from "pages/EditCour";
import CourCentrale from "pages/CourCentrale";
import CourAxiale from "pages/CourAxiale";
import MenuCour from "pages/MenuCour";
import Lngchoix from "./pages/lngchoix";
import NUserMode from "pages/NuserMode";
import NMenu from "pages/NMenu";

function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route path="teacher-password" element={<TeacherPassword />} />
          <Route path="menu" element={<Menu />} />
          <Route path="edit-cour/:type" element={<EditCour />} />
          <Route path="paint" element={<Paint />} />
          <Route path="/cour-centrale" element={<CourCentrale />} />
          <Route path="/cour-axiale" element={<CourAxiale />} />
          <Route index element={<Lngchoix />} />
          <Route path="/userMode" element={<NUserMode />} />
          <Route path="NMenu" element={<NMenu />} />
          <Route path="/Menu-Cour" element={<MenuCour />} />

          {/* <Route index  element={<LanguageChoice />} /> */}
          {/* <Route path="user-mode" element={<UserMode />} />*/}
          {/* <Route path="teacher-password" element={<TeacherPassword />} />*/}
          {/* <Route index  element={<Menu />} /> */}
          {/* <Route path="/paint" element={<Paint />} />    */}
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

export default App;
