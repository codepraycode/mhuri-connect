'use client';

import Form, { EmailInput } from '@components/Form';
import Modal from '@components/Modal';
import { PayloadError } from '@utils/types';
import { signIn } from 'next-auth/react';
import React, { FormEventHandler, useState } from 'react';


const LoginTemplate = () => {

    const [authEmail, setAuthEmail] = useState<string>('')
    const [authError, setAuthError] = useState<PayloadError>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleAuth:FormEventHandler = (e)=>{
        if (e) e.preventDefault();

        // console.log("Email:", authEmail)
        setLoading(true);
        signIn("email", {
            email: authEmail
        })
        .then((res)=>{
            console.log("response:", res);
        }).catch((err)=>console.log("Error:", err))
        .finally(()=>setLoading(false));
    }
    
    const handleChange = (val: string | number)=> setAuthEmail(()=>(val as string))
    
    return (
        <>
            <div className={"header"}>
                    <h3>
                        Oila connect |&nbsp;
                        <span>
                            {loading ? 'Signing in...' : 'Sign In'}
                        </span>
                    </h3>
            </div>


            <div className="content">
                <Form
                    error={authError?.message}
                    handleSubmit={handleAuth}
                >
                    <EmailInput
                        name="email"
                        label="Enter your email"
                        value={authEmail}
                        handleChange={handleChange}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </Form>

                <div className="credit credit--sm mt-5">
                    By codepraycode
                </div>
            </div>
        </>
    )
}

const LoginModal = ({show, close}: {show: boolean, close: ()=>void}) =>{

    return (
        <Modal
            open={show}
            onClose={()=>close()}
        >
            <LoginTemplate/>
        </Modal>
    )
}

export {LoginTemplate, LoginModal}