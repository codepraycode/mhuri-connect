'use client';
import { useState, useRef } from "react";
import { useSession } from 'next-auth/react';
import { IUserHook, ObjectString, User } from "@utils/types";
import { IMember } from "@models/member";


export const userHook = ():IUserHook => {
    // const _id: ObjectString = ("6491a4420929f39bccea8100" as unknown as ObjectString);

	const {data: session, status} = useSession();

	// Status includes: loading, unauthenticated, authenticated.

	// console.log("Session", session, status);

	const sessionUser = session?.user;

	const user = (sessionUser as User);
    
    // const [user, setUser] = useState<User>(userData);
	const [claims, setClaims] = useState(user?.claims || []);
    // const [claims, setClaims] = useState(()=>user && user.claims || []);

	const updateTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

    const updateClaims = (id: ObjectString)=>{
		// Using debounce method
		clearTimeout(updateTimeout.current);

		let updatedClaims:ObjectString[];

		if (claims.includes(id)) updatedClaims = claims.filter(e=>e !== id)
		else updatedClaims = [...claims, id]

		
		setClaims(()=> updatedClaims);

		// Using debounce method
        updateTimeout.current = setTimeout(()=>submitClaims(updatedClaims), 500)
	}

    const submitClaims = (values: ObjectString[]) => {
		// console.log("Submitting claims", values);
		fetch('/api/members', {
			method: "POST",
			headers: {
				"Content-type": 'application.json'
			},
			body: JSON.stringify({
				id: user?._id,
				claims: values
			})
		})
		.then((res)=>res.json())
		.then((res)=>{
            console.log("REs",res);
            // setUser(()=>res.data);
        })
		.catch((e)=>console.error("Err:>", e))

		return values;
	}



    return {
		user: !user ? null : {
			...user,
			claims,
			isAdmin: user?.isAdmin || false
		},
		status,

		updateClaims,
	};
}