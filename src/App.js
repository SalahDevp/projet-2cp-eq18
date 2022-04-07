import AppContext from "AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import LanguageChoice from "pages/LanguageChoice";
import TeacherPassword from "pages/TeacherPassword";
import UserMode from "pages/UserMode";
import Menu from "pages/Menu";
import Paint from "pages/Paint";
import Cour from "pages/cour";
import EditCour from "pages/EditCour";
function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route path="h" element={<LanguageChoice />} />
          <Route path="user-mode" element={<UserMode />} />
          <Route path="teacher-password" element={<TeacherPassword />} />
          <Route path="menu" element={<Menu />} />
          <Route path="hh" element={<Paint />} />
          <Route path="cour" element={<Cour />} />
          <Route index element={<EditCour />} />
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

export default App;
