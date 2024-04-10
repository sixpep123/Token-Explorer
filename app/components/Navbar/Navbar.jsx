import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <main className={styles.nav}>
      <div className={styles.title}>
        <Image
          src={"/Designer.png"}
          alt="Icon"
          className={styles.logo}
          width={20}
          height={40}
        />

        <h2>TokenTrackr</h2>
      </div>
    </main>
  );
};

export default Navbar;
