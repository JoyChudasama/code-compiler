import './App.css'

import React, { useRef } from "react";

import Editor from "@monaco-editor/react";

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    const currentCode = editorRef.current?.getValue()
    
    // TODO: Make api call and show output
  }

  return (
    <>
      <button onClick={showValue}>Run</button>
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        defaultValue="//Write your code here"
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />
    </>
  );
}

export default App
