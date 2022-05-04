import AppContext from "AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import LanguageChoice from "pages/LanguageChoice";
import TeacherPassword from "pages/TeacherPassword";
import UserMode from "pages/UserMode";
import Menu from "pages/Menu";
import Paint from "pages/Paint";
import EditCour from "pages/EditCour";
import CourCentrale from "pages/CourCentrale";
import CourAxiale from "pages/CourAxiale";
import MenuCour from "pages/MenuCour";

function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route index element={<LanguageChoice />} />
          <Route path="user-mode" element={<UserMode />} />
          <Route path="teacher-password" element={<TeacherPassword />} />
          <Route path="menu" element={<Menu />} />
          <Route path="edit-cour/:type" element={<EditCour />} />
          <Route path="paint" element={<Paint />} />
          <Route path="/menu-cour" element={<MenuCour />} />
          <Route path="/cour-centrale" element={<CourCentrale />} />
          <Route path="/cour-axiale" element={<CourAxiale />} />
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

export default App;
