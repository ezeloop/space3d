"use client";
import { use, useEffect } from "react";
import styles from "./page.module.css";
import { App } from "./core";

export default function Home() {
  useEffect(()=>{
    App.start();
  }, []);

  return (
    <div className={styles.page}>
      <canvas id="canvas"></canvas>

      <div id="touch-controls">
        <button data-key="KeyW">↑</button>
        <button data-key="KeyS">↓</button>
        <button data-key="KeyA">←</button>
        <button data-key="KeyD">→</button>
      </div>

      <style jsx>{`
        #touch-controls {
          position: fixed;
          bottom: 20px;
          left: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          z-index: 999;
        }

        #touch-controls button {
          width: 60px;
          height: 60px;
          font-size: 24px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid #ccc;
        }

        @media (min-width: 768px) {
          #touch-controls {
            display: none; /* Oculta en escritorio */
          }
        }
      `}</style>
    </div>
  );
}