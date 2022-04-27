//editor
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
//nav component
import Nav from "components/Nav";
//translation
import { useTranslation } from "react-i18next";
import arTranslation from "utils/translation/edit-cour-ar";
//styling
import "style/editor.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//react
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCour = () => {
  //routing
  const navigate = useNavigate();
  const { type: CourseType } = useParams();
  //editor state
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  //translation
  const { i18n } = useTranslation();
  const handleEditorChange = (state) => {
    setEditorState(state);
  };
  //to insert an image
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

  const savePage = async () => {
    const contentAsHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent()),
      undefined,
      true,
      ({ type, data }) => {
        //to fix -image doesnt align in the center-
        if (type === "IMAGE") {
          const textAlign = data.alignment || "center";
          return `
                <p style="text-align:${textAlign};">
                    <img src="${data.src}" alt="${
            data.alt || ""
          }" style="height: ${data.height};width: ${data.width}"/>
                </p>
            `;
        }
      }
    );
    const fileSaved = await window.electronAPI.saveNewCoursePage(
      CourseType,
      contentAsHtml
    );
    if (fileSaved) navigate(`/cour-${CourseType}`);
  };

  return (
    <>
      <Nav title={"editeur"} pathAvant={`/cour-${CourseType}`} />
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
        <button className="bg-green-400 p-2 ml-4" onClick={() => savePage()}>
          save
        </button>
      </div>
    </>
  );
};

export default EditCour;
