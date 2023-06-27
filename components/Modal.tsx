// Modal component
'use client';

import { ModalProps, PayloadError } from "@utils/types";
import { FormEventHandler, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from '@styles/page.module.css';
import Form, { EmailInput, PasswordInput } from "./Form";
import { signIn } from 'next-auth/react';



const Modal = ({open, userCanClose, disableCloseOnBackgroundClick, onClose=()=>{}, }: ModalProps) =>{

    const [authEmail, setAuthEmail] = useState<string>('')
    const [authError, setAuthError] = useState<PayloadError>(null)
    
    useEffect(()=>{
        (()=>{
            // console.log(modal);
            const modal = document.querySelector('dialog');
            if (open) {
                try{
                    modal?.showModal();
                    modal?.addEventListener('click', function(e) {
                        if (!disableCloseOnBackgroundClick) return;

                        const r = modal.getBoundingClientRect();

                        if (
                            !(e.clientX > r.left &&
                            e.clientX < r.right &&
                            e.clientY > r.top &&
                            e.clientY < r.bottom)
                        ) modal.close()
                    })
                } catch(err){}
            }else {
                modal?.close();
            }
        })()
    }, [open])


    const handleAuth:FormEventHandler = (e)=>{
        if (e) e.preventDefault();

        // console.log("Email:", authEmail)
        signIn();
    }
    
    const handleChange = (val: string | number)=> setAuthEmail(()=>(val as string))

    return (
        <>
            {
                createPortal(
                    <dialog>

                        <div className="header">
                            <h3>
                                Oila connect |&nbsp;
                                <span>
                                    Sign In
                                </span>
                            </h3>
                            {
                                userCanClose && (

                                    <span
                                        id="closeBtn"
                                        onClick={()=>onClose()}
                                    ></span>
                                )
                            }

                        </div>


                        <div className="content">
                            <Form
                                error={authError?.message}
                                // handleSubmit={handleAuth}
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
                        </div>
                    </dialog>,
                    document.body,
                )
            }
        </>
    )
}
export default Modal