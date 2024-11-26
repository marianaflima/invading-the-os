import React, { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
    photoCard: {
        position: 'relative',
        height: 'calc(100% - 20px)',
        width: 'calc(30.33% - 20px)',
        margin: '10px',
        overflow: 'hidden',
        borderRadius: '8px',
        transition: 'transform 0.3s ease',
    },
    photoCardImage: {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'cover',
    },
    photoCardOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0, 0.6)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        transition: 'opacity 0.3s ease',
    },
    photoCardTitle: {
        margin: 0,
        fontSize: '1.5rem',
    },
    photoCardDescription: {
        textAlign: 'center',
    },
    photoCardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '10px',
    },
};

export default styles;