import './App.css'

import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

import { API_HOST } from "../config";
import { sendPostRequest } from './helpers/RequestHelper';


function App() {
  const editorRef = useRef(null);
  const terminalOutPut = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  async function showValue() {
    const currentCode = editorRef.current?.getValue();

    const apiUrl = `${API_HOST}/api/javascript_code/run`;
    try {
      const codeOutPut = await sendPostRequest(apiUrl, {
        language: 'javascript',
        code: currentCode
      });

      terminalOutPut.current.innerHTML = codeOutPut
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
      <button onClick={showValue} style={{marginBottom: '1rem'}}>Run</button>
      <Editor
        height="70vh"
        defaultLanguage="javascript"
        defaultValue="//Write your code here"
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />

      <div ref={terminalOutPut} style={{ whiteSpace: 'pre-wrap', background: '#f4f4f4', padding: '10px', borderRadius: '5px', minHeight: '20vh', overflowX: 'auto', marginTop:'1rem', border:'1px solid black'}}>
      </div>
    </>
  );
}

export default App
