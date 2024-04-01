// This module includes the functions to run python scripts

import { exec } from "@x-python/core"
import basecode from "./runwithlinenumbers.py?raw"

export const runpy = async (code: string) => {
    try {
        const executionResult = await exec({
            code: basecode.replace("${code}", code),
        })
        return {
            result: concatenateValuesByKeys(executionResult.result),
            stdout: executionResult.stdout || "",
            stderr: executionResult.stderr
        }
    } catch (e) {
        return { error: String(e) }
    }
}

function concatenateValuesByKeys(object: any) {
    if (object["38"]?.startsWith("Error")) return object["38"]


    const keys = Object.keys(object).map(Number).sort((a, b) => a - b);

    const result = [];

    for (const key of keys) {
        result[key] = object[key].trim()
    }

    result.shift()

    return result.join("\n")

}
