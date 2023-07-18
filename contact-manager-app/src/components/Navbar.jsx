import SearchContact from './contact/SearchContact';
import {Purple , Background} from '../helpers/colors'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{backgroundColor: Background}}>
            <div className="container">
                <div className="row w-100">
                    <div className="col my-auto navbar-brand">
                        <i className="fa fa-id-badge" style={{color:Purple}}></i>
                        {" "}contact manager web application{" "}
                        <span style={{color: Purple}}>Contacts</span>
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