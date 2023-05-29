import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
import { updateField, resetModal } from 'store/slices/modalSlice';
let Editor;
if (typeof window !== 'undefined') {
  Editor = require('react-draft-wysiwyg').Editor;
}

const Modal = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const { editorContent } = useSelector((state) => state.modal);

  const handleEditorChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    dispatch(updateField({ field: 'editorContent', value: rawContent }));
  };

  const handleSave = () => {
    onSave();
  };

  const handleCancel = () => {
    dispatch(resetModal());
    onCancel();
  };

  return (
    <div>
      <div>
        <strong>Your Full Name:</strong> Your Name Placeholder
      </div>
      <div>
        <strong>Your Email ID:</strong> Your Email Placeholder
      </div>
      <div>
        <strong>Your Phone Number:</strong> Your Phone Placeholder
      </div>
      {Editor && (
        <Editor
          editorState={EditorState.createEmpty()}
          onEditorStateChange={handleEditorChange}
        />
      )}
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default Modal;
