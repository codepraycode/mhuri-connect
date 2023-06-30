import styles from '@styles/page.module.css';
import { GridDisplay } from './DisplayWrappers';
import { LoaderProps } from '@utils/types';

const LoadingTemplate = ({isAdmin}:LoaderProps) => {
    return (
        <div
            className={`${styles.cardd} ${styles.cardd_loading}`}
        >
            <div></div>

            <div className='profile-info'>
                <span className='mt-3'></span>
                <span></span>
                <div className={styles.bottom}>
                    <span></span>
                    <span></span>
                </div>


                {
                    isAdmin && (
                        <>
                            <hr/>
                            <div>
                                <span></span>
                                <span className='my-3'></span>
                            </div>

                        </>
                    )
                }
            </div>
        </div>
    )
}


export const LoadingMembers = ({isAdmin}:LoaderProps) =>{
    return (
        <GridDisplay>
            {
                ([1, 2, 3, 4, 5, 6, 7, 8]).map((e) => (
                    <LoadingTemplate key={e} isAdmin={isAdmin}/>
                ))
            }
        </GridDisplay>
    )
}