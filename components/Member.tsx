import React from 'react'
import styles from '@styles/page.module.css';
import Image from 'next/image'
import { IMember } from '@models/member';

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
        <>
            {
                ([1, 2, 3, 4, 5, 6, 7, 8]).map((e) => (
                    <LoadingTemplate/>
                ))
            }
        </>
    )
}



interface MemberCardProps {
    members: readonly IMember[]
}


const MemberCard = (props: MemberCardProps) => {
    return (
        <>{
            props.members.map((member) => {
                return (
                    <div
                        className={styles.cardd}
                    >
                        <div>
                            <Image
                                src="/user.svg"
                                alt="user profile picture"
                                className={"image"}
                                width={200}
                                height={200}
                                priority
                            />
                        </div>

                        <div className='profile-info'>
                            <span className={styles.lt}>{member.firstname} {member.lastname}</span>
                            <span className={styles.pt}>@{member.username}</span>
                            <span className={styles.pt}>
                                XXX • 200 level
                            </span>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}




export default MemberCard;
