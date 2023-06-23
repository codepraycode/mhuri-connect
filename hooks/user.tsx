'use client';
import { IMember } from "@models/member";
import { ObjectString } from "@utils/types";
import { useEffect, useRef } from "react";
import { useState } from "react";


export const userHook = () => {
    const _id: ObjectString = ("6491a4420929f39bccea8100" as unknown as ObjectString);
    
	const updateTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

    const [user, setUser] = useState<IMember | null>(null);
    
    const [claims, setClaims] = useState(()=>user && user.claims || []);

    // useEffect(()=> {
    //     // Load Users
    //     (()=>{
    //         setUser(()=>({
    //             _id
    //         }))
    //     })()
    // }, []);

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
				id: user?._id || _id,
				claims: values
			})
		})
		.then((res)=>res.json())
		.then((res)=>{
            console.log("REs",res);
            setUser(()=>res.data);
        })
		.catch((e)=>console.error("Err:>", e))

		return values;
	}


    return {...user, _id, claims, updateClaims};
}