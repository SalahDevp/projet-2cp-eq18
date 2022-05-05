import AppContext from "AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import Paint from "pages/Paint";
import EditCour from "pages/EditCour";
import CourCentrale from "pages/CourCentrale";
import CourAxiale from "pages/CourAxiale";
import MenuCour from "pages/MenuCour";
import Lngchoix from "./pages/lngchoix";
import NUserMode from "pages/NuserMode";
import NMenu from "pages/NMenu";
import QCS from "pages/QCS";
import Redirect from "pages/Redirect";
import QCM from "pages/QCM";
import NTeacherpassword from "pages/NTeacherpassword";
import NchangeTeacherpassword from "pages/NchangeTeacherPassword";
import Paramatre from "pages/paramatre";

function App() {
  return (
    <AppContext>
      <HashRouter>
        <Routes>
          <Route path="edit-cour/:type" element={<EditCour />} />
          <Route path="paint" element={<Paint />} />
          <Route path="/cour-centrale" element={<CourCentrale />} />
          <Route path="/cour-axiale" element={<CourAxiale />} />
          <Route element={<Lngchoix />} />
          <Route path="/userMode" element={<NUserMode />} />
          <Route path="NMenu" element={<NMenu />} />
          <Route path="/Menu-Cour" element={<MenuCour />} />
          <Route path="qcs/:num" element={<QCS />} />
          <Route path="qcm/:num" element={<QCM />} />
          <Route index element={<Redirect />} />
          <Route path="/TeacherPassword" element={<NTeacherpassword />} />
          <Route
            path="/NchangeTeacherPassword"
            element={<NchangeTeacherpassword />}
          />
          <Route path="/paramatre" element={<Paramatre />} />

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
