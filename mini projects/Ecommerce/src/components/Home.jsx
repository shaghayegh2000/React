import "../styles/Home.css";
import Product from "./Product";
import Header from "./Header";


const Home = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <div className="home-container">
                    <img className="homeImg" src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" alt="ECOMMERCE" />
                    <div className="d-flex">
                        <div className="mx-2 w-50 h-100">
                            <Product id="12321341" title="Consequatur delectus et voluptate neque voluptates officiis corporis quasi veritatis inventore debitis." price={76} rating={4} image="https://images-eu.ssl-images-amazon.com/images/I/71mEsHyzSCL._AC_UL200_SR200,200_.jpg" />
                        </div>
                        <div className="mx-2 w-50 h-100">
                        <Product id="12321342" title="Consequatur delectus et voluptate neque voluptates officiis.Consequatur delectus et voluptate neque voluptates officiis corporis quasi veritatis inventore debitis.Consequatur delectus et voluptate neque voluptates officiis corporis quasi veritatis inventore debitis.Consequatur delectus et voluptate neque voluptates officiis corporis quasi veritatis inventore debitis.Consequatur delectus et voluptate neque voluptates officiis corporis quasi veritatis inventore debitis." price={305} rating={5} image="https://m.media-amazon.com/images/I/61GFwwSWD6L._AC_UF894,1000_QL80_.jpg" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="mx-2">
                            <Product id="12321343" title="Consequatur delectus et voluptate neque voluptates officiis." price={17} rating={3} image="https://m.media-amazon.com/images/I/81ai1wWKL1L._AC_UF894,1000_QL80_.jpg" />
                        </div>
                        <div className="mx-2">
                            <Product id="12321344" title="Consequatur delectus et voluptate neque voluptates officiis." price={80} rating={4} image="https://celltronics.lk/wp-content/uploads/2022/07/Amazon-Echo-Smart-Speaker-with-Alexa.jpg" />
                        </div>
                        <div className="mx-2">
                            <Product id="12321345" title="Consequatur delectus et voluptate neque voluptates officiis." price={1140} rating={5} image="https://m.media-amazon.com/images/I/81941xFYc6L._AC_SL1500_.jpg" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mx-2">
                            <Product id="12321346" title="Consequatur delectus et voluptate neque voluptates officiis." price={2243} rating={3} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2T_auVrs8hthaymg9TSSPXQ8Jx6SsQZJ9hQ&usqp=CAU" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;