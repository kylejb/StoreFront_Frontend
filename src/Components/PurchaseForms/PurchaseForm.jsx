import React, { useState } from 'react';


const PurchaseForm = ( props ) => {

    const [billingAddress, setBillingAddress] = useState({ addressLine1: "", addressLine2: "", city: "", state: "", zipcode: ""}),
        [shippingAddress, setShippingAddress] = useState({ addressLine1: "", addressLine2: "", city: "", state: "", zipcode: ""});       
    
    // in order to grab the required information for backend processing, this form should be a child of cart/items in order to extract the information for checking-out process.
    //* Note: purchaseObj should be primarily reconstructed on the backend to confirm with Stripe API requirements; this will minimize the amount of data we need to transport back to the backend...
    //* ... as we would only require information such as item id number and quantity from the frontend... in order to build up the purchaseObj on the backend via Items table.
    const handleSubmitHelper = (e, purchaseObj) => {
        e.preventDefault();
        console.log("Buying stuff in PurchaseForm")
        // props.handlePurchase(purchaseObj)
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

    console.log("Rendering PurchaseForm", props)
    //* We should consider splitting this form out to several pages... page 1, shipping.... page 2, billing... page 3, order confirmation list/receipt and "place order" button
    //* In the interim, I am creating a folder to be potentially used for purchaseform.components
    return (
        <>
            <h3>[DRAFT] PurchaseForm</h3>            
            <form onSubmit={handleSubmitHelper}>

                <div>
                    {/* Shipping Address Info Below */}
                    <input type="text" placeholder="Shipping Address Line 1" name="addressLine1" value={shippingAddress.addressLine1} onChange={handleShippingAddressChange} />
                    <input type="text" placeholder="Shipping Address Line 2" name="addressLine2" value={shippingAddress.addressLine2} onChange={handleShippingAddressChange} />
                    <input type="text" placeholder="City" name="city" value={shippingAddress.city} onChange={handleShippingAddressChange} />
                    <input type="text" placeholder="State" name="state" value={shippingAddress.state} onChange={handleShippingAddressChange} />
                    <input type="text" placeholder="Zipcode" name="zipcode" value={shippingAddress.zipcode} onChange={handleShippingAddressChange} />
                </div>


                <div>
                    {/* Billing Address Info Below */}
                    <input type="text" placeholder="Billing Address Line 1" name="addressLine1" value={billingAddress.addressLine1} onChange={handleBillingAddressChange} />
                    <input type="text" placeholder="Billing Address Line 2" name="addressLine2" value={billingAddress.addressLine2} onChange={handleBillingAddressChange} />
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