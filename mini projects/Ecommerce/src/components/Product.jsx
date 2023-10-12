import "../styles/Product.css";

const Product = () => {
    return (
        <div className="bg-white my-3 py-4">
            <div className="product d-flex flex-column align-items-center">
                <div className="product-info mx-3">
                    <p>Consequatur delectus et voluptate neque voluptates officiis corporis quasi veritatis inventore debitis.</p>
                    <p className="product-price">$30</p>
                    <div className="product-rate">⭐⭐⭐</div>
                </div>
                <img src="https://images-eu.ssl-images-amazon.com/images/I/71mEsHyzSCL._AC_UL200_SR200,200_.jpg" alt="productImage" />
                <button className="btn-warning">Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;