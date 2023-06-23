import styles from '@styles/page.module.css';
import { GridDisplay } from './DisplayWrappers';

const LoadingTemplate = () => {
    return (
        <div
            className={`${styles.cardd} ${styles.cardd_loading}`}
        >
            <div></div>

            <div className='profile-info'>
                <span></span>
                <span></span>
                <div className={styles.bottom}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}


export const LoadingMembers = () =>{
    return (
        <GridDisplay>
            {
                ([1, 2, 3, 4, 5, 6, 7, 8]).map((e) => (
                    <LoadingTemplate key={e}/>
                ))
            }
        </GridDisplay>
    )
}