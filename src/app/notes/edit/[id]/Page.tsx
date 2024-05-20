import React from 'react';
import Form from "@/app/ui/Form";
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

function Page(props:any) {
    const handleFormSubmit = async (formData: FormData) => {
        "use server"
        console.log('Form Data:', formData);
    }
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Edit Note</h1>
            <Form handleFormSubmit={handleFormSubmit} />
        </div>
    );
}

export default Page;