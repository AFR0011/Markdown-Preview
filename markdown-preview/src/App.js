// src/App.js
import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./styles/App.css";
import ToggleButton from "./components/ToggleButton";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <>
    <ToggleButton initState = "horizontal" values={["horizontal", "vertical"]}></ToggleButton>
      <div className="app-container">
        <h1>Markdown Editor</h1>
        <div className="editor-preview-container">
          <Editor onMarkdownChange={handleMarkdownChange} />
          <Preview markdown={markdown} />
        </div>
      </div>
    </>
  );
};

export default App;
