import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publicKey = 'pk_test_51JJNkjJveZY1xymDzPZNHVFu3Y9Yg8YxmgDoOwDSSNiCKlse9cSl82VTSroQlTP447Ua1FNtkiDSqfzbQsP4f69K00s2vHdjuc';

	const onToken = token => {
		console.log(token);
		alert('payment successful');
	}

	return (
		<StripeCheckout 
		label='Pay Now'
		name='CRWN Clothing LTD'
		billingAddress
		shippingAddress
		image='https://svgshare.com/i/CUz.svg'
		description={`Your total is $${price}`}
		amount={priceForStripe}
		panelLabel='Pay Now'
		token={onToken}
		stripeKey={publicKey}
		/>
	);
}

export default StripeCheckoutButton;

