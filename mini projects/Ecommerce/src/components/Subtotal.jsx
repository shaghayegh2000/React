import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
    return (
        <div className='d-flex flex-column bg-secondary bg-opacity-25 py-3 rounded-2 border border-dark'>
            <CurrencyFormat
                renderText={(value) => (
                    <div className='mx-5'>
                        <p>
                            
                            Subtotal (0 items): <strong>$0</strong>
                        </p>
                        <small>
                            <input type="checkbox"/> This order contains a gift!
                        </small>
                    </div>
                )}

                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className='w-75 mt-3 btn-warning text-center mx-auto'>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;