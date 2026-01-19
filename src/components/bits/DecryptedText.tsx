import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  className?: string;
  interval?: number;
  delay?: number;
  scrambleDuration?: number; // Duración de la animación de descifrado en segundos
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className,
  interval = 50, // Tiempo entre cambios de caracter durante el descifrado
  delay = 0, // Retraso antes de que empiece a descifrar
  scrambleDuration = 2, // Duración total para descifrar todo el texto
}) => {
  const [displayText, setDisplayText] = useState(text);
  const animationRef = useRef<number | null>(null);

  const scramble = (targetText: string, duration: number) => {
    const totalIterations = duration * 1000 / interval; // Iteraciones totales
    let currentIteration = 0;

    const animate = () => {
      let scrambledText = '';
      for (let i = 0; i < targetText.length; i++) {
        // Cuántos caracteres se han "descifrado"
        const decipheredChars = Math.floor((currentIteration / totalIterations) * targetText.length);

        if (i < decipheredChars) {
          scrambledText += targetText[i]; // Carácter ya descifrado
        } else {
          scrambledText += chars[Math.floor(Math.random() * chars.length)]; // Carácter aleatorio
        }
      }
      setDisplayText(scrambledText);

      if (currentIteration < totalIterations) {
        currentIteration++;
        animationRef.current = setTimeout(animate, interval);
      } else {
        setDisplayText(targetText); // Asegurarse de que el texto final sea el correcto
      }
    };

    animationRef.current = setTimeout(animate, delay * 1000);
  };

  useEffect(() => {
    // Cuando el componente se monta, iniciamos el scramble
    if (text) {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      scramble(text, scrambleDuration);
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [text, interval, delay, scrambleDuration]); // Re-ejecutar si el texto o props cambian

  return (
    <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {displayText}
    </motion.h1>
  );
};