import Form, { EmailInput } from '@components/Form';
import { AuthTemplateProps } from '@utils/types';
import React from 'react';


const LoginTemplate = ({authError, authEmail, handleChange, handleAuth}:AuthTemplateProps) => {
    
    return (
        <>
            <div className={"header"}>
                    <h3>
                        Oila connect |&nbsp;
                        <span>
                            Sign In
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

                    <button type="submit">
                        Sign In
                    </button>
                </Form>

                <div className="credit credit--sm mt-5">
                    By codepraycode
                </div>
            </div>
        </>
    )
}


export {LoginTemplate}