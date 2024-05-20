import React, {CSSProperties} from 'react';
import Card from "@/app/ui/Card";

const styles = {
    body:{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: '1rem',
    } as CSSProperties
}

function Page() {
    return (
        <div style={styles.body}>
            <Card title={"tile"} body={"body"} id={''}/>
        </div>
    );
}

export default Page;