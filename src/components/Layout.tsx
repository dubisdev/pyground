import type { FC, ReactNode } from "react"
import styles from "./layout.module.css"

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export default Layout
