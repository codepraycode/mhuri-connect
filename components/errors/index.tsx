import React from 'react'
import styles from '@styles/page.module.css';
import Image from 'next/image'

interface ErrorProps {
    title?: string, 
    icon?:string,
    message?: string,
    ctaText?: string,
    reload: ()=>void
}


// Base of them all
export const PassiveError = ({title="", message="",icon, ctaText="Try again", reload}:ErrorProps ) => {
    return (
        <div className={styles.error}>
            <div>
                {icon && <Image
                    src={icon}
                    alt={title}
                    className={"image"}
                    width={200}
                    height={200}
                    priority
                />}
            </div>

            <div>
                <h1>{title ?? "Error!"}</h1>

                <p>
                    {message} {" "}
                    <span className={styles.nav} onClick={reload}>{ctaText ?? "Try again"}</span>
                </p>
            </div>

        </div>
    )
}

export const NetworkError = ({title="Network Error!", icon="/network-error.svg", message="There seem to be an issue with your network", ctaText="Try again", reload}:ErrorProps ) => {
    return (
        <PassiveError
            title={title}
            icon={icon}
            message={message}
            ctaText={ctaText}
            reload={reload}
        />
    )
}