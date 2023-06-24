// Modal component
'use client';

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({open:Opened,}: {open:boolean, close: ()=>void}) =>{

    const [open, setOpen] = useState(false);
    
    useEffect(()=>{
        (()=>{
            // console.log(modal);
            const modal = document.querySelector('dialog');
            if (open) {
                try{
                    modal?.showModal();
                    modal?.addEventListener('click', function(e) {
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

    useEffect(()=>{
        (()=>setTimeout(()=>setOpen(true), 2000))()
    },[])

    return (
        <>
            {
                createPortal(
                    <dialog>
                        <h2>App Modal</h2>
                        <span id="closeBtn" onClick={()=>setOpen(false)}></span>
                    </dialog>,
                    document.body,
                )
            }
        </>
    )
}
export default Modal