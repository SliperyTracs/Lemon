import styles from '../styles/Home.module.css'
import Layout from "../components/Layout.js"
import Image from 'next/image'
import HomePage from "../public/HomePage.jpg"
export default function Home() {
  return (
    <Layout>
    <div className="d-flex justify-content-between ">
       <div className="">
        <h1>
          your all-in-one gym companion 
        </h1>
       </div>
       <Image height="1000" width="1000" src={HomePage} alt="HomePage image"/>
    </div>
    </Layout>
  )
}
