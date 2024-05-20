import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {createPortal} from "react-dom";

const styles = {
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    } as React.CSSProperties
}

function Modal({children}:PropsWithChildren) {
    const modalContentWrapperRef = useRef<HTMLElement|null>(null);

    if(!modalContentWrapperRef.current){
        modalContentWrapperRef.current = document.createElement('div');
    }

    useEffect(()=>{
        const portal = document.getElementById('portal');
       if (portal && modalContentWrapperRef.current){
           portal.appendChild(modalContentWrapperRef.current);
       }
         return ()=> {
           if(modalContentWrapperRef.current && portal)
             portal?.removeChild(modalContentWrapperRef.current);
         }
    },[]);


    return createPortal(
        <div style={styles.modal}>
            {children}
        </div>,
        modalContentWrapperRef.current as HTMLElement
    );
}

export default Modal;