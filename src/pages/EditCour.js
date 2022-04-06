import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
//styling
import "style/editor.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditCour = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const handleEditorChange = (state) => {
    setEditorState(state);
  };
  return (
    <div className="h-100">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </div>
  );
};

export default EditCour;
