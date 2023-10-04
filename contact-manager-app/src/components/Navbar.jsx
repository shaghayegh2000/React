import SearchContact from "./Contact/SearchContact";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                    Contacts web application {" "}
                        <i className="fas fa-id-badge"></i>
                        <span style={{color:'purple'}}>Contacts</span>
                    </div>
                    <div className="col">
                        <SearchContact/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
