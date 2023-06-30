import React from 'react'
import styles from '@styles/page.module.css';
import Image from 'next/image'
import { GridDisplay } from './DisplayWrappers';
import { MemberCardProps, ObjectString } from '@utils/types';



const MemberCard = ({members, isAdmin, selections, user, onSelect}: MemberCardProps) => {
    return (
        <GridDisplay>
            {
                members.map((member) => {
                    if (member._id === user?._id) return null;
                    const id = (member._id as unknown as ObjectString);

                    const isSelected = isAdmin  || selections.includes(id);

                    return (
                        <div
                            className={`${styles.cardd} ${styles.selectable} ${isSelected ? styles.selected: ''}`}
                            key={member._id}
                            onClick={()=>{
                                if(!isAdmin) onSelect(id);
                            }}
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
                                                    Know: {member.stats?.knows || 0} | known by: {member.stats?.known || 0}
                                                </span>
                                                <span className={styles.pt}>
                                                    connections: {member.stats?.connections || 0}%
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
