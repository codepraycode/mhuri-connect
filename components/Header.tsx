import { UserStatusProps } from '@utils/types';
import React from 'react';
import styles from '@styles/page.module.css';
import { signOut } from 'next-auth/react';


const Header = (props:UserStatusProps) =>{
    let state = 'Not signed in';

    if (props.isAuthenticated) state = "Log out";
    if (props.isLoading) state = "Loading...";

    return (
        <div className={styles.description}>
            <h1>
                Oila connect <span className={styles.dsp}>&nbsp;| </span>

                <a
                    href="/"
                    className={styles.nav} 
                    onClick={(e)=>{
                        e.preventDefault();
                        if (!props.isAuthenticated) return
                        signOut();
                    }}
                    title={props.user ? 'Click to logout' : state}
                >
                    {
                        props.user ? (
                            <span className={styles.user}>
                                <span data-img="/user.svg" className={styles.userImg}></span>
                                <b className={styles.username}>
                                    {props.user.username}
                                </b>
                            </span> 
                        ): state
                    }
                </a>
            </h1>

            <span className={"credit"}>
                By{' '}
                <h4>codepraycode</h4>
            </span>
        </div>
    )
}


export default Header;