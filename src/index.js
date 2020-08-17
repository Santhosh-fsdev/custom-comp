import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const HeadComponent = () => {
  return <div className={styles.test}>Example Component: <h2>hello world</h2></div>
}