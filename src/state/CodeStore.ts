import { create } from "zustand"
import { runpy } from "../services/runpy"
import debounce from "just-debounce"

type CodeStore = {
    code: string
    setCode: (code: string) => void
    codeResult: string
}

const useCodeStore = create<CodeStore>((set) => ({
    code: "",
    codeResult: "",

    setCode: async (code) => {
        set({ code })
        debouncedRunCode(set, code)
    }
}))

const debouncedRunCode = debounce(async (set, code) => {
    const { result, stdout, stderr, error } = await runpy(code)

    if (error || stderr) return set({ codeResult: error || stderr || "" })

    if (result && stdout) return set({ codeResult: `${stdout}\nResult: ${result}` })

    return set({ codeResult: result || stdout })
}, 500)

export { useCodeStore }

