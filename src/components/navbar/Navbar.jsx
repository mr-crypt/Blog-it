import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
        <Image src="/facebook.png" alt="Instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="Instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="Instagram" width={24} height={24} />
      </div>
      <div className={styles.logo}>Blog it </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default Navbar