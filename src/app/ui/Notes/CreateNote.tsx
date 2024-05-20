import React from 'react';
import Form from "@/app/ui/Form";
import {createNote} from "@/app/lib/actions";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    } as React.CSSProperties,
    title: {
        color: 'navy',
        fontSize: '2rem',
        fontWeight: 'bold',
    }
}

async function CreateNote() {

   console.log('Create Note==>>> I render on the server');

    return (
        <div style={styles.container}>
        <h1 style={styles.title}>Create Note</h1>
        <Form handleFormSubmit={createNote} />
        </div>
    );
}

export default CreateNote;