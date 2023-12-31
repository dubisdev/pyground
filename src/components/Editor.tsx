import Editor from '@monaco-editor/react';
import styles from './editor.module.css';
import { useCodeStore } from '../state/CodeStore';

const CustomEditor = () => {
    const [code, setCode] = useCodeStore((state) => [state.code, state.setCode])

    return (
        <div className={styles.editor}>
            <Editor
                defaultLanguage='python'
                theme='vs-dark'
                options={{
                    lineNumbersMinChars: 4,
                    minimap: { enabled: false },
                    overviewRulerLanes: 0,
                    scrollbar: {
                        vertical: "auto",
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
