import AppContext from "AppContext";
import LanguageChoice from "pages/LanguageChoice";
import TeacherPassword from "pages/TeacherPassword";
import UserMode from "pages/UserMode";

function App() {
  return (
    <AppContext>
      <TeacherPassword />
    </AppContext>
  );
}

export default App;
