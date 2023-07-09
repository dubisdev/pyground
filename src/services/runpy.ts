// This module includes the functions to run python scripts

import { exec } from "@x-python/core"

export const runpy = async (code: string) => {
    try {
        const executionResult = await exec({ code })
        return {
            result: executionResult.result ? String(executionResult.result) : "",
            stdout: executionResult.stdout || "",
            stderr: executionResult.stderr
        }
    } catch (e) {
        return { error: String(e) }
    }
}
