// Modal component
'use client';

import { ModalProps } from "@utils/types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from '@styles/page.module.css';
import Form, { EmailInput, PasswordInput } from "./Form";

const Modal = ({open, userCanClose, disableCloseOnBackgroundClick, onClose=()=>{}, }: ModalProps) =>{
    
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
                            <Form error="A sample error">

                                <EmailInput
                                    name="email"
                                    label="Enter your email"
                                />

                                <PasswordInput
                                    name="password"
                                    label="Enter your password"
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