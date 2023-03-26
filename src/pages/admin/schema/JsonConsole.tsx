import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor";
import schema from "amis/schema.json";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

export default ({ code, onCodeChange , context}) => {
    const [theme, setTheme] = useState("vs-light");
    let key = window.location.pathname;

    // console.log("dispatchEvent", dispatchEvent);
    
    if(code==null || code== '') {
        code = window.localStorage.getItem(key);
    }
    const onEditorReady = (editor) => {
        console.log("onEditorReady", editor);
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
            validate: true,
            schemas: [
                {
                    uri: "",
                    fileMatch: ["*"],
                    schema: schema
                }
            ]
        });
    };

    const options:monacoEditor.editor.IStandaloneEditorConstructionOptions = {
        minimap: {
            enabled: true, // 是否启用预览图
        },
        foldingStrategy: "indentation",
        language: "json",
        folding: true,
        automaticLayout: true,
        quickSuggestions: true,
        acceptSuggestionOnCommitCharacter: true,
        acceptSuggestionOnEnter: "on",
        wordWrap: "on",
    };

    const changeCode = (e) => {
        localStorage.setItem(key, e);
        context.dispatchEvent('change',{value:e});
        // context.setValue(e);
        // context.onAction('{}', 'reload');
        return onCodeChange(e);
    };

    return (
        <>
            <MonacoEditor
                height={800}
                language="json"
                options={options}
                theme={theme}
                onChange={(e) => changeCode(e)}
                value={code}
                editorDidMount={onEditorReady}
            />
        </>
    );
};