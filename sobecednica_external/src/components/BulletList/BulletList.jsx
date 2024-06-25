import React from 'react';

export function BulletList({elements}) {
    return (
        <ul style={{
            textAlign: 'left', margin: '0',
        }}>
            {elements.map((item) => (
                <li key={item}>{`${item}`}</li>
            ))}
        </ul>
    );
}


