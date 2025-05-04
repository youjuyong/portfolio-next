
import styles from "../../css/layout.module.css";
import { Intro_Profile } from "../component/ImageCompo";

export const Intro = () => {
    return (
        <div className={styles.intro_layout}>
            <article className={styles.intro_art1}>
                <div className={styles.intro_art1_div}>
                        <dl>
                            <dt>
                                <Intro_Profile></Intro_Profile>
                            </dt>
                            <dd>
                                <div className={styles.art1_Dd_profile}> 
                                    <span>Name  : 유주용</span>
                                    <span>Age   : 1992. 05. 18</span>
                                    <span>Phone : 010-2966-3366</span>
                                    <span>Email : dbwndyd518@gmail.com</span>
                                </div>
                            </dd>
                        </dl>
                </div>
            </article>
            <article className={styles.intro_art2}>
                TEST
            </article>
        </div>
    )
}