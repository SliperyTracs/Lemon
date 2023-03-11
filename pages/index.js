import styles from '../styles/Home.module.css'
import Layout from "../components/Layout.js"
import Image from 'next/image'
import HomePage from "../public/HomePage.jpg"
export default function Home() {
  return (
    <Layout>
    <div className={styles.contentContainer}>
       <div className={styles.content}>
         <p className={styles.title}> your all-in-one gym companion </p>
          <p>gym tracker, meal prep, gym diary</p>
          <button>hit your goals now</button>
       </div>
       <Image height="1000" width="1000" src={HomePage} alt="HomePage image"/>
    </div>
    </Layout>
  )
}
