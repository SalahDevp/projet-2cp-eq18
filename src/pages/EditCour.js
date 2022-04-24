import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
//nav component
import Nav from "components/Nav";
//translation
import { useTranslation } from "react-i18next";
import arTranslation from "utils/translation/edit-cour-ar";
//styling
import "style/editor.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SaveCoursDialogue from "components/Cours/SaveCoursDialogue";

const EditCour = () => {
  //save cour dialogue state
  const [dialogueOpened, setDialogueOpened] = useState(false);
  //editor state
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  //translation
  const { i18n } = useTranslation();
  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const getImage = (file) =>
    new Promise((resolve, reject) => {
      console.log(file);
      const url = "file://" + file.path;
      resolve({
        data: {
          link: url,
        },
      });
    });

  return (
    <>
      {dialogueOpened && (
        <SaveCoursDialogue
          setDialogueOpened={setDialogueOpened}
          editorState={editorState}
        />
      )}
      <Nav title={"editeur"} pathAvant="/menu-cour" />
      <div className="h-100">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          localization={
            i18n.language === "ar"
              ? {
                  locale: "ar",
                  translations: arTranslation,
                }
              : { locale: "fr" }
          }
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "emoji",
              "image",
              "history",
            ],
            image: {
              urlEnabled: false,
              uploadCallback: getImage,
              uploadEnabled: true,
              previewImage: true,
            },
          }}
        />
        <button
          className="bg-green-400 p-2 ml-4"
          onClick={() => setDialogueOpened(true)}
        >
          save
        </button>
      </div>
    </>
  );
};

export default EditCour;
