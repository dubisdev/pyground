import Editor from '@monaco-editor/react';
import styles from './editor.module.css';
import { useCodeStore } from '../state/CodeStore';

const ResultDisplayer = () => {
    const codeResult = useCodeStore((state) => state.codeResult)

    return (
        <div className={styles.editor}>
            <Editor
                defaultLanguage='python'
                theme='vs-dark'
                options={{
                    lineNumbers: 'off',
                    minimap: { enabled: false },
                    overviewRulerLanes: 0,
                    scrollbar: {
                        vertical: "auto",
                        horizontal: "hidden",
                    },
                    wordWrap: 'on',
                    readOnly: true,
                }}
                value={codeResult}
            />
        </div>
    );
}

export default ResultDisplayer;
