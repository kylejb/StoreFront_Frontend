import React, { useState } from 'react';


const PurchaseForm = ( props ) => {

    const [billingAddress, setBillingAddress] = useState({ first_addressline: "", second_addressline: "", city: "", state: "", zipcode: ""}),
        [shippingAddress, setShippingAddress] = useState({ first_addressline: "", second_addressline: "", city: "", state: "", zipcode: ""});       
    

    const makePayment = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `bearer ${props.token}`
            },
            body: JSON.stringify( { payment: { order: [{cart: props.cart, shipping: shippingAddress, billing: billingAddress, total: parseInt(props.total)*100}] }})
        };
        let response = await fetch("http://localhost:3000/api/v1/payments", options);
        let data = await response.json();
        // console.log("makePayment... serverResponse ", data);
    }

    const handleSubmitHelper = (e) => {
        e.preventDefault();
        makePayment();
    };
    
    const handleShippingAddressChange = (e) => {
        const { name, value } = e.target;
        setShippingAddress(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleBillingAddressChange = (e) => {
        const { name, value } = e.target;
        setBillingAddress(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <h3>[DRAFT] PurchaseForm</h3>            
            <form onSubmit={handleSubmitHelper}>

                <div>
                    {/* Shipping Address Info Below */}
                    <input type="text" placeholder="Shipping Address Line 1" name="first_addressline" value={shippingAddress.first_addressline} onChange={handleShippingAddressChange} />
                    <input type="text" placeholder="Shipping Address Line 2" name="second_addressline" value={shippingAddress.second_addressline} onChange={handleShippingAddressChange} />
                    <input type="text" placeholder="City" name="city" value={shippingAddress.city} onChange={handleShippingAddressChange} />
                    <input type="text" placeholder="State" name="state" value={shippingAddress.state} onChange={handleShippingAddressChange} />
                    <input type="text" placeholder="Zipcode" name="zipcode" value={shippingAddress.zipcode} onChange={handleShippingAddressChange} />
                </div>

                <div>
                    {/* Billing Address Info Below */}
                    <input type="text" placeholder="Billing Address Line 1" name="first_addressline" value={billingAddress.first_addressline} onChange={handleBillingAddressChange} />
                    <input type="text" placeholder="Billing Address Line 2" name="second_addressline" value={billingAddress.second_addressline} onChange={handleBillingAddressChange} />
                    <input type="text" placeholder="City" name="city" value={billingAddress.city} onChange={handleBillingAddressChange} />
                    <input type="text" placeholder="State" name="state" value={billingAddress.state} onChange={handleBillingAddressChange} />
                    <input type="text" placeholder="Zipcode" name="zipcode" value={billingAddress.zipcode} onChange={handleBillingAddressChange} />
                </div>

                <div>
                    {/* Credit Card Inputs will be rendered below in later revision; for MVP, we can assume static number on backend and make dynamic when revising... would like to secure communication between servers when implementing this feature */}
                </div>

                <input type="submit" value="Place Order" />
            </form>
        </>
    );
}

export default PurchaseForm;