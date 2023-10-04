import SearchContact from "./Contact/SearchContact";
import { Purple, Background } from '../helpers/colors';

const Navbar = () => {
    return (
        <div className="navbar shadow-lg" style={{ backgroundColor: Background }}>
            <div className="container">
                <div className="row w-100 py-2">
                    <div className="col ">
                        <div className="navbar-brand text-white">
                        <i className="fa fa-id-badge" style={{ color: Purple }}></i>{" "}
                        Contacts web application{" "}
                        <span style={{ color: Purple }}>Contacts</span>
                        </div>
                    </div>
                    <div className="col">
                        <SearchContact />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
