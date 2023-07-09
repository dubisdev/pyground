import { useEffect } from "react"
import { LoadingDots } from "./LoadingDots"
import { useHashLocation } from "../hooks/useHashLocation"
import { init } from "@x-python/core";

import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import { loader } from "@monaco-editor/react"

const LoadPage = () => {
    const [_, navigate] = useHashLocation()
    useEffect(() => {
        // configure monaco
        self.MonacoEnvironment = {
            getWorker(_) {
                return new editorWorker();
            },
        };
        loader.config({ monaco })

        // init x-python (pyodide)
        init()
            .then(() => navigate("/app"))
    }, [])

    return <div
        style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            zIndex: 1000
        }}
    >
        <LoadingDots />
    </div >

}


export default LoadPage
