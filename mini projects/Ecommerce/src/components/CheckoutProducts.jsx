
const CheckoutProducts = ({ title, price, rating, image }) => {
    return (
        <div className="d-flex align-items-center my-4">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/71mEsHyzSCL._AC_UL200_SR200,200_.jpg" alt="ProductImage" />
            <div className="d-flex flex-column" style={{marginLeft : 25}}>
                <p className="h6 mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ad assumenda esse asperiores tenetur temporibus earum vero.
                </p>
            
                <p className="m-0">
                    <small>$</small>
                    <strong>300</strong>
                </p>
                <div className="mt-1">
                    ⭐⭐⭐
                </div>
                <button className="btn-warning col-4 mt-3 py-1">Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProducts;