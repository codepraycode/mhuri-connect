'use client';

import { LoginTemplate } from '@components/auth/login';
import { PayloadError } from '@utils/types';
import React, { FormEventHandler, useState } from 'react';

const Login = () => {
    const [authEmail, setAuthEmail] = useState<string>('')
    const [authError, setAuthError] = useState<PayloadError>(null);
    // const [authenticate, setAuthenticate] = useState(false);

    const handleAuth:FormEventHandler = (e)=>{
        if (e) e.preventDefault();

        console.log("Email:", authEmail)
        // signIn();
    }
    
    const handleChange = (val: string | number)=> setAuthEmail(()=>(val as string))


    return (
        <div className={"authWrapper"}>
            <div className={"authContent"}>
                <LoginTemplate
                    authError={authError}
                    authEmail={authEmail}
                    handleChange={handleChange}
                    handleAuth={handleAuth}
                />
            </div>
        </div>
    )
}

export default Login;