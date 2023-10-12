import "../styles/Product.css";

const Product = ({id , title , price , image , rating}) => {
    return (
        <div className="bg-white my-2 py-4 products">
            <div className="product d-flex flex-column align-items-center">
                <div className="product-info mx-4">
                    <p className="title">{title}</p>
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="product-rate mt-2 d-flex">
                        {Array(rating).fill().map(()=>(
                            <p>⭐</p>
                        ))}
                    </div>
                </div>
                <img src={image} alt=""/>
                <button className="btn-warning my-1 mt-5">Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;