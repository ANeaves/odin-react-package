import React from 'react'
// import OdinNav from './OdinNav'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { default as Button } from './OdinNav';