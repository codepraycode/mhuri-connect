'use client';

import { LoginTemplate } from '@components/auth/login';
import { PayloadError } from '@utils/types';
import React from 'react';

const Login = () => {
    


    return (
        <div className={"authWrapper"}>
            <div className={"authContent"}>
                <LoginTemplate/>
            </div>
        </div>
    )
}

export default Login;