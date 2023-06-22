'use client';
import { useEffect } from 'react';
import Image from 'next/image'
import styles from '@styles/page.module.css';


export default function Home() {

	useEffect(()=>{
		(async ()=>{
			// const res = await fetch('/api/members');
			// const repo = await res.json()
			// console.log(JSON.stringify(repo, null, 4));
		})()
	},[])


	/* 
		<a
		href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
		className={styles.card}
		target="_blank"
		rel="noopener noreferrer"
	>
		<h2>
			Docs <span>-&gt;</span>
		</h2>

		<p>
			Find in-depth information about Next.js features and API.
		</p>
	</a>
	*/


	
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
					[1,2,3,4,5,6,7,8].map((e)=>(
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
					))
				}
			</div>
		</main>
	)
}
