import React from 'react';
import Link from "next/link";

const styles = {
    nav: {
        width: '100%',
        // height: '80px',
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    } as React.CSSProperties,
button:{
        color: 'white',
    marginRight: 'auto',
    backgroundColor: 'navy',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
}
}
function Nav() {

    return (
        <nav style={styles.nav}>
           <Link style={styles.button} href={`notes/create`}>Add Note</Link>
        </nav>
    );
}

export default Nav;