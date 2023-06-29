import { UserStatusProps } from '@utils/types';
import React from 'react';
import styles from '@styles/page.module.css';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const Header = (props:UserStatusProps) =>{
    let state = 'Not signed in';

    const nav = usePathname();

    // console.log(nav)

    const navIsStats = nav ==='/stats';

    if (props.isAuthenticated) state = "Log out";
    if (props.isLoading) state = "Loading...";

    // console.log(props.user)

    return (
        <div className={styles.description}>
            <h1>
                Oila connect
                
                    { props.user?.isAdmin && (
                        <>
                            {" "}|&nbsp;
                            <a
                                href={navIsStats ? '/': '/stats'}
                                className={styles.nav}
                                title={'Click to see stats'}
                            >
                                {navIsStats ? "Home" : "stats"}
                            </a>
                        </>
                        )
                    }
                <span className={styles.dsp}>&nbsp;| </span>
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