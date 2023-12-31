import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header d-flex">
            <Link to="/" className="text-decoration-none d-flex header-logo mx-3 mt-1">
                    <svg className=" mx-1 h4" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" /></svg>
                    <span className="mx-2 h5">eSHOP</span>
            </Link>
            <div className="header-search">
                <div className="input-group">
                    <input type="text" className="form-control rounded-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    <div>
                        <span className="input-group-text py-2 bg-warning rounded-0" id="basic-addon1"><i className="fa fa-search py-1 text-black"></i></span>
                    </div>
                </div>
            </div>
            <div className="header-nav d-flex">
                <div className="d-flex">
                    <span>Hello Guest</span>
                    <span className="h2">Sign In</span>
                </div>
                <div className="d-flex">
                    <span>Your{" "}
                        <i className="fa fa-pencil mx-1"></i>
                    </span>
                    <span className="h2">Shop</span>
                </div>
                <Link to="/checkout" className="text-decoration-none">
                    <div className="d-flex flex-row last">
                        <span><i className="fa fa-shopping-basket mx-1"></i></span>
                        <span className="mx-1">0</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header;