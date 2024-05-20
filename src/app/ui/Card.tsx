"use client";

import React from 'react';
import Modal from "@/app/ui/Modal";
import EditNote from "@/app/ui/Notes/EditNote";
import {deleteNote} from "@/app/lib/actions";

const styles = {
    card:{
        display: 'grid',
        gridTemplateRows: '2fr 1fr',
        alignItems: 'center',
        width: '33.33%',
        minHeight: '200px',
        backgroundColor: '#ffffff',
        color: '#333333',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        padding: '1rem',

   } as React.CSSProperties,
    bodyWrapper:{
        gridRow: '1',
    } as React.CSSProperties,
    button:{
        padding: '0.5rem 1rem',
        margin: '0.5rem',
        backgroundColor: '#f0f0f0',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    } as React.CSSProperties,
    buttonWrapper:{
        display: 'flex',
        justifyContent: 'space-between',
    } as React.CSSProperties,
}

type CardProps = {
    title: string,
    body: string,
    id: string,
}

function Card({title, body, id}: CardProps){
    const [isEdit, setIsEdit] = React.useState(false);
    const toggleEdit = () =>{
        setIsEdit((prevState)=>!prevState);
    }

    const handleDeleteNote = async () => {
        await deleteNote(id);
    }

    return (
        <>
        <div style={styles.card}>
            <div style={styles.bodyWrapper}>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
            <div style={styles.buttonWrapper}>
                <button style={styles.button} onClick={toggleEdit}>Edit</button>
                <button style={styles.button} onClick={handleDeleteNote}>delete</button>
            </div>
        </div>
            {
                isEdit && <Modal>
                    <EditNote id={id} handleClose={toggleEdit}/>
                </Modal>
            }

        </>
    );
}

export default Card;