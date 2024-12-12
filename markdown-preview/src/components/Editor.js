import React, { useState } from 'react';

const Editor = ({ onMarkdownChange }) => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
    onMarkdownChange(e.target.value); // Pass the markdown to the parent
  };

  return (
    <div className="editor-container">
      <textarea
        value={markdown}
        onChange={handleChange}
        placeholder="Type your markdown here..."
        className="editor-textarea"
      />
    </div>
  );
};

export default Editor;
