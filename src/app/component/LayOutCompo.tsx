import styles from "../../css/layout.module.css";

// Root 레이아웃
export function Root_Layout ( { children } : any ) {
    return (
        <div id="root">{children}</div>
    )
}

// 컨텐트 레이아웃
export function Content_Layout ( { children } : any ) {
    return (
        <div className={styles.content_layout}>
            {children}
        </div>
    )
}
