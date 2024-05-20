import React from 'react';
import Form from "@/app/ui/Form";
import {updateNote} from "@/app/lib/actions";

type Props = {
    id: string;
    handleClose: () => void;
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '1rem',
        padding: '3rem 2rem',
        position: 'relative',
    } as React.CSSProperties,
    title: {
        color: 'navy',
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    closeButton:{
        position: 'absolute',
        top: '0.5rem',
        right: '1rem',
        cursor: 'pointer',
        color: 'navy',
        fontSize: '1.5rem',
    } as React.CSSProperties,
}

function EditNote({id, handleClose}:Props) {

    console.log('Edit Note===>>> I render on the client');

    const handleFormSubmit = async (formData: FormData) => {

       await updateNote(id, formData);
    }

    return (
        <div style={styles.container}>
            <button style={styles.closeButton} onClick={handleClose}>x</button>
                <h1 style={styles.title}>Edit Note</h1>
                <Form handleFormSubmit={handleFormSubmit}/>
        </div>
    );
}

export default EditNote;