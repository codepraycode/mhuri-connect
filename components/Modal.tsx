// Modal component
'use client';

import { ModalProps } from "@utils/types";
import { useEffect } from "react";
import { createPortal } from "react-dom";

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
                        <h2>App Modal</h2>
                        {
                            userCanClose && (

                                <span
                                    id="closeBtn"
                                    onClick={()=>onClose()}
                                ></span>
                            )
                        }
                    </dialog>,
                    document.body,
                )
            }
        </>
    )
}
export default Modal