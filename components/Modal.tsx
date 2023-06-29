// Modal component
'use client';

import { ModalProps } from "@utils/types";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";



const Modal = ({children, open:isOpen, userCanClose, disableCloseOnBackgroundClick, onClose=()=>{}, }: ModalProps) =>{

    const modal = useRef(null)
    useEffect(()=>{
        (()=>{
            // console.log(modal);
            if (!document) return;
            // const modal = document.querySelector('dialog');
            if (isOpen) {
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
                        ) closeModal()
                    })
                } catch(err){
                    console.log("Modal already opened")
                }
            }else {
                closeModal()
            }
        })()
    }, [isOpen])


    const closeModal = () =>{
        //const modal = document.querySelector('dialog');
        modal?.close();
    }


    return (
        <>
            {
                createPortal(
                    <dialog ref={modalRef}>
                        {
                            userCanClose && (

                                <span
                                    id="closeBtn"
                                    onClick={()=>{
                                        if (onClose) onClose();

                                        closeModal()
                                    }}
                                ></span>
                            )
                        }
                        {children}
                    </dialog>,
                    document.body,
                )
            }
        </>
    )
}
export default Modal
