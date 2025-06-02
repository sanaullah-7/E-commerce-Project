import { useContext } from 'react';
import { ShopContextData } from '../../../Pages/ShopContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItem, all_product, RemoveFromCart, AddToCart } = useContext(ShopContextData);

    const cartProducts = all_product.filter(product => cartItem[product.id] > 0);

    // Calculate total price
    const totalPrice = cartProducts.reduce(
        (total, product) => total + product.new_price * cartItem[product.id],
        0
    );

    if (cartProducts.length === 0) {
        return (
            <div className='text-center pt-28 font-bold text-2xl text-gray-600'>
                🛒 Your cart is empty!
            </div>
        );
    }

    return (
        <div className='pt-28 px-4 max-w-4xl mx-auto'>
            <h1 className='text-3xl font-extrabold mb-6 text-primary'>Your Cart</h1>

            <div className='flex flex-col gap-6'>
                {cartProducts.map(product => (
                    <div
                        key={product.id}
                        className='flex flex-col md:flex-row justify-between items-center border p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300'
                    >
                        <div className='flex items-center gap-4'>
                            <img
                                src={product.image}
                                alt={product.name}
                                className='w-20 h-20 object-cover rounded-lg shadow'
                            />
                            <div>
                                <h2 className='font-bold text-lg'>{product.name}</h2>
                                <p className='text-green-600 font-semibold'>${product.new_price}</p>
                            </div>
                        </div>

                        <div className='flex gap-2 items-center mt-4 md:mt-0'>
                            <button
                                onClick={() => RemoveFromCart(product.id)}
                                className='px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition'
                            >
                                -
                            </button>
                            <span className='font-semibold text-lg'>{cartItem[product.id]}</span>
                            <button
                                onClick={() => AddToCart(product.id)}
                                className='px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition'
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Total section */}
            <div className='mt-8 p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow flex justify-between items-center'>
                <h2 className='text-xl font-bold'>Total:</h2>
                <p className='text-2xl font-extrabold'>${totalPrice.toFixed(2)}</p>
            </div>

            <div className='flex justify-between items-center mt-6'>
                <Link
                    to='/'
                    className='inline-block bg-gray-200 text-primary font-bold px-4 py-2 rounded shadow hover:bg-gray-300 transition'
                >
                    ⬅️ Continue Shopping
                </Link>
                <button
                    className='bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded shadow transition'
                    onClick={() => alert('Checkout process coming soon!')}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
