"use client" 
import React from 'react'
import styles from '/Example.module.css'

const ExampleComp = () => {
    return (
        <div className={styles.container}> 
            <h1 className={styles.title}>Hello Css! Modules !!</h1>
            <p className={styles.message}>Hello !  </p>
        </div>
    )
}
   
export default ExampleComp ;    