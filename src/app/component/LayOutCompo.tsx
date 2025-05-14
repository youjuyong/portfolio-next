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

// 프로젝트 소개 레이아웃
export function Project_Section_Layout ( { children } : any ) {
    return (
         <section className={styles.content_section1}>
            {children}
         </section>
    )
}