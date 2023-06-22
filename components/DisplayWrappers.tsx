import { ReactNode } from "react";
import styles from '@styles/page.module.css';


interface TemplateWrapperProps {
    children: ReactNode
}

export const GridDisplay = ({children}: TemplateWrapperProps) =>{
    return (
        <div className={styles.grid}>
            {
                children
            }
        </div>
    )
}