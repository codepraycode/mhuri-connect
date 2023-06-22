'use client';
import { useEffect, useState } from 'react';
import MemberCard, {LoadingMembers} from '@components/Member';
import styles from '@styles/page.module.css';

export default function Home() {

	const [members, setMembers] = useState(null);

	useEffect(()=>{
		(async ()=>{
			const res = await fetch('/api/members');
			const res_data = await res.json()
			// console.log(JSON.stringify(data, null, 4));
			setMembers(()=>res_data.status === 200 ? res_data.data : [])
		})()
	},[])
	
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1>
					Oila connect |&nbsp;
					<a href="/" className={styles.nav}>
						About
					</a>
				</h1>

				<div>
					<span className={styles.credit}>
						By{' '}
						<h4>codepraycode</h4>
					</span>
				</div>
			</div>

			<div className={styles.grid}>
				{
					members ? <MemberCard members={members}/> : <LoadingMembers/>
				}
			</div>
		</main>
	)
}
