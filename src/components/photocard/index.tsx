import React from "react";
import styles from "@/app/stylesheet";
import { useState } from "react";

// Define the type for the card props
interface PhotoCardProps {
  imageSrc: string;
  title: string;
  enemyType: string;
  description: string;
}

interface PhotoCardContainerProps {
  cards: PhotoCardProps[];
}

const PhotoCardImage: React.FC<PhotoCardProps> = ({
  imageSrc,
  title,
  enemyType,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.photoCard,
        transform: isHovered ? '1.05' : '1', // Scale on hover
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={title} style={styles.photoCardImage} />
      <div
        style={{
          ...styles.photoCardOverlay,
          opacity: isHovered ? 1 : 0.25, // Show overlay on hover
        }}
      >
        <h2 style={styles.photoCardTitle}>{title}: </h2>
        <h3 style={styles.photoCardTitle}>{enemyType}</h3>
        <p style={styles.photoCardDescription}>{description}</p>
      </div>
    </div>
  );
};

const PhotoCard: React.FC<PhotoCardContainerProps> = ({ cards }) => {
  return (
    <div style={styles.photoCardContainer}>
      {cards.map((card, index) => (
        <PhotoCardImage key={index} {...card} />
      ))}
    </div>
  );
};

export default PhotoCard;
