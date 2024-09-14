// 'use client'
import React from 'react'
import styles from './infiniteslider.module.css'

const InfiniteSlider = () => {
    return (
        <>
            <div className={styles.slider}>
                <div className={styles.slidetrack}>
                    <div className={styles.slide}>
                        <img src="/images/gallery/1.jpeg" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/gallery/2.jpeg" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/gallery/3.jpeg" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/gallery/4.jpeg" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/gallery/5.jpeg" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/gallery/6.jpeg" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/gallery/7.jpeg" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/gallery/8.jpeg" alt="Logo" />
                    </div>
                    <div className={styles.slide}>
                        <img src="/images/gallery/9.jpeg" alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfiniteSlider