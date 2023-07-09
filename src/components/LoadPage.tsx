import { useEffect } from "react"
import { LoadingDots } from "./LoadingDots"
import { useHashLocation } from "../hooks/useHashLocation"
import { init } from "@x-python/core";

const LoadPage = () => {
    const [_, navigate] = useHashLocation()
    useEffect(() => {
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
