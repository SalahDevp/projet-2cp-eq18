import AppContext from "AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
//  import LanguageChoice from "pages/LanguageChoice";
//  import TeacherPassword from "pages/TeacherPassword";
//  import UserMode from "pages/UserMode";
//  import Menu from "pages/Menu";
//  import Paint from "pages/Paint";
 import CourCentrale from "pages/cour-centrale";
 import CourAxiale from "pages/cour-axiale";
 import MenuCour from "pages/MenuCour";
 import Lngchoix from "./pages/lngchoix"
 import NUserMode from "pages/NuserMode";
 import NMenu from "pages/NMenu";
 import NTeacherpassword from "pages/NTeacherpassword";
 import NchangeTeacherpassword from "pages/NchangeTeacherPassword";
 import Paramatre from "pages/paramatre";

function App() {
  return (
    <AppContext>
   
        <HashRouter>
        <Routes>
        <Route index element={<Lngchoix />} />
        <Route  path="/userMode" element={<NUserMode />} />    
        <Route  path="NMenu"  element={<NMenu />} />
        <Route  path="/Menu-Cour" element={<MenuCour />} />     
          <Route path="/cour-centrale"    element={<CourCentrale />} />    
          <Route  path="/cour-axiale" element={<CourAxiale />} />   
          <Route  path="/TeacherPassword" element={<NTeacherpassword />} />   
          <Route  path="/NchangeTeacherPassword" element={<NchangeTeacherpassword />} /> 
          <Route  path="/paramatre" element={<Paramatre />} /> 
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
