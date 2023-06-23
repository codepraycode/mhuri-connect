import React, { ReactNode } from 'react'
import styles from '@styles/page.module.css';
import Image from 'next/image'
import { IMember } from '@models/member';
import { GridDisplay } from './DisplayWrappers';

interface MemberCardProps {
    members: readonly IMember[]
}


const MemberCard = ({members}: MemberCardProps) => {

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
                                <span className={styles.lt}>{member.firstname} {member.lastname}</span>
                                <span className={styles.pt}>@{member.username}</span>
                                <span className={styles.pt}>
                                    {member.department || "AAA"} • {member.level || "AAA"} level
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </GridDisplay>
    );
}




export default MemberCard;
