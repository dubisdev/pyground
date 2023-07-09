import Editor from '@monaco-editor/react';
import styles from './editor.module.css';
import { useCodeStore } from '../state/CodeStore';

const ResultDisplayer = () => {
    const codeResult = useCodeStore((state) => state.codeResult)

    return (
        <div className={styles.editor}>
            <Editor
                defaultLanguage='python'
                options={{ minimap: { enabled: false }, readOnly: true }}
                value={codeResult}
            />
        </div>
    );
}

export default ResultDisplayer;
