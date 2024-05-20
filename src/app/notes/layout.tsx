import React, {CSSProperties, PropsWithChildren} from 'react';
import Nav from "@/app/ui/Nav";

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        gap: '1rem',
        height: '100vh',
        width: '100vw',
        boxSizing: 'border-box',
        backgroundColor: '#fffdd0',
        padding: '1rem',
    }  as CSSProperties
}

function Layout({children}: PropsWithChildren) {
    return (
        <>
            <Nav/>
            <div style={styles.container}>
                {children}
            </div>
        </>

    );
}

export default Layout;