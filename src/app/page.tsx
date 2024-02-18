"use-client"

import Image from "next/image";
import styles from "./page.module.css";
import { LocationFinder } from "./components/location";
import ImageGallery from "./components/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <LocationFinder/>
      <div className={styles.center}>
        <ImageGallery />
      </div>
    </main>
  );
}
