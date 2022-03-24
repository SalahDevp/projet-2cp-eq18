import { HashRouter, Routes, Route } from "react-router-dom";

import AppContext from "AppContext";
import LanguageChoice from "pages/LanguageChoice";
import TeacherPassword from "pages/TeacherPassword";
import UserMode from "pages/UserMode";
import Menu from "pages/Menu";
import Paint from "pages/Paint";

function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route index element={<LanguageChoice />} />
          <Route path="user-mode" element={<UserMode />} />
          <Route path="teacher-password" element={<TeacherPassword />} />
          <Route path="menu" element={<Menu />} />
          <Route path="grille" element={<Paint />} />
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

export default App;
