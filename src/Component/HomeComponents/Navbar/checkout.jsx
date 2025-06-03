import React, { useContext, useState } from "react";
import { ShopContextData } from "../../../Pages/ShopContext";
import { Link } from "react-router-dom";

function Checkout() {
    const { cartItem, all_product } = useContext(ShopContextData);

    // States for user details
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Filter out only the products in the cart
    const cartProducts = all_product.filter(product => cartItem[product.id] > 0);

    // Calculate total amount
    const totalAmount = cartProducts.reduce(
        (total, product) => total + (cartItem[product.id] * product.new_price),
        0
    );

    // Handle place order
    const handlePlaceOrder = () => {
        if (!address || !email || !phone) {
            alert("Please fill in all details before placing the order!");
            return;
        }
        alert("Order placed successfully! Thanks for shopping.");
        // Here you can integrate backend API to place the order, clear cart, etc.
    };

    return (
        <div className="p-4 pt-24 max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow rounded-md">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Address"
                    className="border p-2 rounded w-full"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    className="border p-2 rounded w-full sm:col-span-2"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className="mb-6">
                <h2 className="font-bold text-lg mb-2">Order Summary</h2>
                {cartProducts.length === 0 ? (
                    <p className="text-red-500">Your cart is empty!</p>
                ) : (
                    <div className="space-y-2">
                        {cartProducts.map(product => (
                            <div key={product.id} className="flex justify-between items-center border-b pb-2">
                                <div className="flex items-center gap-2">
                                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                                    <div>
                                        <p className="font-semibold">{product.name}</p>
                                        <p className="text-sm text-gray-500">Qty: {cartItem[product.id]}</p>
                                    </div>
                                </div>
                                <p className="font-semibold text-green-600">${product.new_price * cartItem[product.id]}</p>
                            </div>
                        ))}
                        <div className="flex justify-between font-bold pt-2">
                            <span>Total:</span>
                            <span>${totalAmount}</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-between">
                <Link to="/cart" className="bg-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-400">
                    ⬅️ Back to Cart
                </Link>
                <button
                    onClick={handlePlaceOrder}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
}

export default Checkout;
