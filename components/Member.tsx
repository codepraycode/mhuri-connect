import React from 'react'
import styles from '@styles/page.module.css';
import Image from 'next/image'
import { GridDisplay } from './DisplayWrappers';
import { MemberCardProps } from '@utils/types';



const MemberCard = ({members, isAdmin}: MemberCardProps) => {

    return (
        <GridDisplay>
            {
                members.map((member) => {
                    return (
                        <div
                            className={styles.cardd}
                            key={member._id}
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
                                <h4 className={styles.lt}>{member.firstname} {member.lastname}</h4>

                                
                                <div>
                                    <span className={styles.pt}>@{member.username}</span>
                                    <span className={styles.pt}>
                                        {member.department || "AAA"} • {member.level || "AAA"} level
                                    </span>
                                </div>
                                {
                                    isAdmin && (
                                        <>
                                            <hr/>
                                            <div>
                                                <span className={styles.pt}>
                                                    Know: xxx | known by: xxx
                                                </span>
                                                <span className={styles.pt}>
                                                    connections: xx%
                                                </span>
                                            </div>

                                        </>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </GridDisplay>
    );
}




export default MemberCard;
