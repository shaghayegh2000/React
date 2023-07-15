import styles from '../Navbar.module.css'
import SearchContact from './contact/SearchContact';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg">
            <div className="container">
                <div className="row w-100">
                    <div className="col mt-2">
                        <i className="fa fa-id-badge"></i>
                        {" "}contact manager web application{" "}
                        <span className={styles.purple}>Contacts</span>
                    </div>
                    <div className='col'>
                        <SearchContact/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;