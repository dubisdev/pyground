import Editor from '@monaco-editor/react';
import styles from './editor.module.css';
import { useCodeStore } from '../state/CodeStore';

const ResultDisplayer = () => {
    const codeResult = useCodeStore((state) => state.codeResult)

    return (
        <div className={styles.editor}>
            <Editor
                defaultLanguage='python'
                options={{
                    lineNumbers: 'off',
                    theme: 'vs-dark',
                    minimap: { enabled: false },
                    overviewRulerLanes: 0,
                    scrollbar: {
                        vertical: "hidden",
                        horizontal: "hidden",
                    },
                    wordWrap: 'on',
                }}
                value={codeResult}
            />
        </div>
    );
}

export default ResultDisplayer;
