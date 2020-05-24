import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_crPSWov7r5BtwAsmefcYe4iN00SkOJg4iP';
    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return (
        <div>
            <StripeCheckout 
                label="Pay Now"
                name="React Ecommerce"
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
        </div>
    )
}

export default StripeCheckoutButton;
