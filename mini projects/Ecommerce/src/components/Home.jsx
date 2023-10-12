import React from "react";
import "../styles/Home.css";
import Product from "./Product";


const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <img className="homeImg" src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" alt="ECOMMERCE" />
                    <div className="d-flex">
                        <div className="mx-2">
                            <Product />
                        </div>
                        <div className="mx-2">
                            <Product />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="mx-2">
                            <Product />
                        </div>
                        <div className="mx-2">
                            <Product />
                        </div>
                        <div className="mx-2">
                            <Product />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mx-2">
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;