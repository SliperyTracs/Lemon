import styles from "../../styles/components/ui/navbar.module.css"
import Image from "next/image"
import Logo from "../../public/logo.jpg"
export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-dark navbar-expand-lg  border-bottom border-dark ">
            <div class="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="/"><Image className={styles.image} height="1000" width="1000" src={Logo} alt="logo"/> Lemon</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Pricing</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    )

}
