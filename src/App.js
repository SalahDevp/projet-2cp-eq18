import AppContext from "AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
 import LanguageChoice from "pages/LanguageChoice";
 import TeacherPassword from "pages/TeacherPassword";
 import UserMode from "pages/UserMode";
 import Menu from "pages/Menu";
 import Paint from "pages/Paint";
 import Cour from "pages/cour-centrale";
 import CourAxiale from "pages/cour-axiale";
function App() {
  return (
    <AppContext>
   
        <HashRouter>
        <Routes>
          <Route  path='/'  element={<LanguageChoice />} />
          <Route path="user-mode" element={<UserMode />} />
          <Route path="teacher-password" element={<TeacherPassword />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/paint" element={<Paint />} />    
          <Route index    element={<Cour />} />    
          <Route  path="/cour-centrale" element={<CourAxiale />} />     
 
        </Routes>
      </HashRouter>   
    </AppContext>
  );
}

export default App;
