import React, {PropsWithChildren} from 'react';

type ButtonProps = {
    customStyles?: React.CSSProperties,
    [key: string]: string | number | (() => void) | React.ReactNode | React.CSSProperties | undefined,
} &  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const styles = {
    button:{
        color: 'white',
        marginRight: 'auto',
        backgroundColor: 'navy',
        borderRadius: '5px',
        padding: '0.5rem 1rem',
    }
}
function Button({onClick, children, customStyles, ...rest}:PropsWithChildren<ButtonProps>){
    return (
        <button style={{...customStyles, ...styles.button }} {...rest}>{children}</button>
    );
}

export default Button;