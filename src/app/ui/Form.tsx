import React from 'react';
import Button from "@/app/ui/Button";

type FormProps = {
    title?: string,
    body?: string,
    handleFormSubmit: (formData: FormData) => void,
}

const styles = {
    form:{
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        gap: '0.5rem',
        backgroundColor: '#ffffff',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    } as React.CSSProperties,
    inputWrapper:{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem',
    } as React.CSSProperties,
    input:{
        width: '100%',
        color: 'black',
        padding: '0.5rem',
        borderRadius: '5px',
        border: '1px solid navy',
    },
    textInput:{
       minHeight: '100px',
    },
    label:{
        color: 'navy',
        fontWeight: 'bold',
    }
}

function Form({title, body, handleFormSubmit}: FormProps) {
    return (
        <form action={handleFormSubmit} >
            <div style={styles.form}>
                <div style={styles.inputWrapper}>
                    <label htmlFor="title" style={styles.label}>Title</label>
                    <input style={styles.input} type="text" id="title" name="title" defaultValue={title}/>
                </div>

                <div style={styles.inputWrapper}>
                    <label htmlFor="body" style={styles.label}>Body</label>
                    <textarea style={{...styles.input, ...styles.textInput}} id="body" name="body" defaultValue={body}/>
                </div>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </div>


        </form>
    );
}

export default Form;