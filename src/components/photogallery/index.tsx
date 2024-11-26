import React, { useState, useEffect } from 'react';

const images: string[] = [
    '/placeholder-1.jpg',
    '/placeholder-2.jpg',
    '/placeholder-3.jpg',
];

const PhotoGallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    let interval: NodeJS.Timeout | undefined;

    useEffect(() => {
        if (!isPaused) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000); 
        }
        return () => {
            if (interval) {
                clearInterval(interval); 
            }
        };
    }, [isPaused]);

    const nextImage = () => {
        setIsPaused(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setIsPaused(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ position: 'relative', width: '600px', height: '400px', overflow: 'hidden' }}>
            <img 
                src={images[currentIndex]} 
                alt={`Image ${currentIndex + 1}`} 
                style={{ width: '100%', height: '100%', transition: 'opacity 1s ease-in-out' }} 
            />
            <button 
                onClick={previousImage} 
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
            >
                &lt;
            </button>
            <button 
                onClick={nextImage} 
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
            >
                &gt;
            </button>
        </div>
    );
};

export default PhotoGallery;