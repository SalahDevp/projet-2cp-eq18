import AppContext from "AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import LanguageChoice from "pages/LanguageChoice";
import TeacherPassword from "pages/TeacherPassword";
import UserMode from "pages/UserMode";
import Menu from "pages/Menu";
import Paint from "pages/Paint";
import EditCour from "pages/EditCour";
import CourCentrale from "pages/cour-centrale";
import CourAxiale from "pages/cour-axiale";
import MenuCour from "pages/MenuCour";
import CustomCourse from "pages/CustomCourse";

function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route path="h" element={<LanguageChoice />} />
          <Route path="user-mode" element={<UserMode />} />
          <Route path="teacher-password" element={<TeacherPassword />} />
          <Route path="menu" element={<Menu />} />
          <Route path="edit-cour" element={<EditCour />} />
          <Route index element={<Paint />} />
          <Route path="/menu-cour" element={<MenuCour />} />
          <Route path="/cour-centrale" element={<CourCentrale />} />
          <Route path="/cour-axiale" element={<CourAxiale />} />
          <Route path="/custom-course/:title" element={<CustomCourse />} />
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

export default App;
