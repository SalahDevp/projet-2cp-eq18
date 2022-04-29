//editor
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
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
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const EditCour = () => {
  //routing
  const navigate = useNavigate();
  const { type: CourseType } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
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
    //get content as html
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
    //save page
    const pageNum =
      searchParams.get("edit") === "true"
        ? searchParams.get("pageNum")
        : undefined;
    const fileSaved = await window.electronAPI.saveCoursePage(
      CourseType,
      contentAsHtml,
      pageNum
    );
    if (fileSaved) navigate(`/cour-${CourseType}`);
  };
  //init editor with page content if in editing mode
  useEffect(() => {
    if (searchParams.get("edit") !== "true") return; //teacher is not editing an existing page
    const pageNum = searchParams.get("pageNum");
    //async bloc
    (async () => {
      try {
        const htmlContent = await window.electronAPI.getCoursePageContent(
          CourseType,
          pageNum
        );
        const { contentBlocks, entityMap } = htmlToDraft(htmlContent);
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        setEditorState(EditorState.createWithContent(contentState));
      } catch (e) {
        console.error(e);
        navigate(`/cour-${CourseType}`);
      }
    })();
  }, []);
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
