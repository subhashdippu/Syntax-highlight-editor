import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min.js';
const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('html');

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    const getLanguage = () => {
        switch (language) {
            case 'html':
                return 'html';
            case 'javascript':
                return 'javascript';
            case 'jsx':
                return 'language-jsx';
            default:
                return 'html';
        }
    };
    const highlightCode = (code) => {
        return Prism.highlight(code, Prism.languages[language], language);
    };

    return (
        <div className='container'>

            <div style={{ marginBottom: '1rem' }}>
                <button onClick={() => setLanguage('html')}
                    style={{
                        marginRight: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: language === 'html' ? 'gray' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    HTML
                </button>
                <button onClick={() => setLanguage('javascript')}
                    style={{
                        marginRight: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: language === 'javascript' ? 'gray' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    JavaScript
                </button>
                <button onClick={() => setLanguage('jsx')}
                    style={{
                        marginRight: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: language === 'jsx' ? 'gray' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    ReactJS
                </button>
            </div>
            <textarea value={code} onChange={handleCodeChange} style={{
                width: '100%',
                height: '300px',
                opacity: 1,
                caretColor: 'black',
                border: '1px solid gray',
                padding: '10px',
                fontSize: '16px',
            }} />
            <pre style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px',
                fontSize: '16px',
                overflow: 'auto',
                border: '1px solid gray',
                height: '300px',
                position: 'relative',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
            }}>
                <code
                    className={getLanguage()}
                    dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
                    style={{ all: 'unset', display: 'block' }}
                />
            </pre>
        </div>
    );
};

export default CodeEditor;