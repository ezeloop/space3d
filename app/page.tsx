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
    </div>
  );
}
