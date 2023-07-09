import Editor from '@monaco-editor/react';
import styles from './editor.module.css';
import { useCodeStore } from '../state/CodeStore';

const CustomEditor = () => {
    const [code, setCode] = useCodeStore((state) => [state.code, state.setCode])

    return (
        <div className={styles.editor}>
            <Editor
                defaultLanguage='python'
                options={{
                    theme: 'vs-dark',
                    lineNumbersMinChars: 4,
                    minimap: { enabled: false },
                    overviewRulerLanes: 0,
                    scrollbar: {
                        vertical: "hidden",
                        horizontal: "hidden",
                    },
                    wordWrap: 'on',
                }}
                value={code}
                onChange={(value) => setCode(String(value))}
            />
        </div>
    );
}

export default CustomEditor;
