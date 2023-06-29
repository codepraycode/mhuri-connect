'use client';
import { useEffect, useState } from 'react';
import MemberCard from '@components/Member';
import styles from '@styles/page.module.css';
import { IMember } from '@models/member';
import { LoadingMembers } from '@components/Loaders';
import { NetworkError, PassiveError } from '@components/errors';
import { ObjectString, PayloadError } from '@utils/types';
import { useUser } from '@hooks';
import { LoginModal } from '@components/auth/login';
import Header from '@components/Header';

export default function Home() {

	const [members, setMembers] = useState<IMember[]>([]);
	const [error, setError] = useState<PayloadError | null>(null);
	const [loadingMembers, setLoadingMembers] = useState<boolean>(true);
	

	const {updateClaims, user, status} = useUser();

	// console.log("User:", user);

	const isLoading = status === 'loading';
	const isAuthenticated = status === 'authenticated';
	const isNotAuthenticated = status === 'unauthenticated';

	const claims:ObjectString[] = user?.claims || [];

	useEffect(()=>{
		(async ()=>{

			if (isLoading || !isAuthenticated) return;

			// if (!user?._id) {
			// 	return;
			// }

			if (members.length > 1) {
				// console.log("False load")
				return
			}

			
			try{
				const res = await fetch('/api/members');
				const res_data = await res.json()
				// console.log(JSON.stringify(data, null, 4));

				if (res_data.status === 200) {
					setMembers(()=>res_data.data);
					if (error) setError(()=>null);
				}else if (res_data.error){
					// console.log("Error loading members")
					setError(()=>res_data.error);
				}
			} catch(err) {
				setError(()=>({code: "Network Error!", message:"Could not load members!"}))
			}finally {
				setLoadingMembers(false);
			}
		})()
	},[status, loadingMembers, members, error]);


	const reload= () => {
		setError(null);
		setLoadingMembers(true)
		if (members?.length >= 1) setMembers(()=>[])
	}

	let template = <LoadingMembers/>;
	
	if (error) template = <NetworkError 
			message={error.message}
			title={error.code}
			reload={reload}
		/>
    else if (!isLoading && !loadingMembers) template = members.length < 1 ? 
		<PassiveError 
			title='No Members!'
			icon="/users.svg"
			message='No members registered yet!'
			ctaText='Load again'
			reload={reload}
		/> : <MemberCard 
				members={members}
				selections={claims}
				onSelect={updateClaims}
			/>;

	return (
		<>
			<LoginModal show={isNotAuthenticated} close={()=>{}}/>

			<main className={styles.main}>
				<Header
					user={user}
					isLoading={isLoading}
					isAuthenticated={isAuthenticated}
				/>

				<>
					{ template }
				</>
			</main>
		</>
	)
}
