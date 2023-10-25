import Header from "./Header";
import "../styles/Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";

const Checkout = () => {
    return(
        <div>
            <Header/>
            <div className=" checkout">
                <div className="row m-3">
                    <div className="col-8">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkoutImage" className="w-100" />
                        <div className="checkout-title mt-4">
                            <h2>Your Shopping Basket</h2>
                            <hr/>
                        </div>
                        <CheckoutProducts/>
                        <CheckoutProducts/>
                    </div>
                    <div className="col-4">
                        <Subtotal/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;