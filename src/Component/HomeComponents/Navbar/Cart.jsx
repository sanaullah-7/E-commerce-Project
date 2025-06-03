import { useContext } from 'react';
import { ShopContextData } from '../../../Pages/ShopContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItem, all_product, RemoveFromCart, AddToCart } = useContext(ShopContextData);
    // Yahan pe humne useContext se ShopContextData ka data le liya — jaise:
    //cartItem: har product ki quantity.
    //all_product: poora product list.
    //RemoveFromCart, AddToCart: buttons ke functions

    const cartProducts = all_product.filter(product => cartItem[product.id] > 0);

    //reduce ka main maqsad:
    // Array ke elements ko ek hi value mein combine karna — jaise sum nikalna, ya total price, ya kisi aur cheez ka final result banana 
    //reduce  ka use ho raha hai taake har product ka price * quantity ka total mil sake.
    const totalPrice = cartProducts.reduce(
        (total, product) => total + product.new_price * cartItem[product.id], 0);
    // total pehle 0 hota hai, phir har product ke hisaab se increment hota rehta hai.

    if (cartProducts.length === 0) {
        // return ka mtlb: function yahin pe ruk jaata hai aur HTML yehi render hoti hai.
        return (
            <div className='text-center pt-48 mb-28 font-extrabold text-2xl sm:text-3xl text-gray-600'>
                🛒 Your cart is empty!
            </div>
        );
    }

    return (
        <div className='pt-28 px-4 max-w-6xl mx-auto'>
            <h1 className='text-3xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text '>Your Cart</h1>

            <div className='flex flex-col gap-6'>
                {cartProducts.map(product => (
                    <div
                        key={product.id}
                        className='flex flex-col sm:flex-row justify-between items-center border p-2 px-4 rounded-xl shadow-lg  dark:bg-black hover:bg-gradient-to-r from-primary/40 to-secondary/70  dark:hover:shadow-black hover:shadow-slate-400 hover:shadow-2xl  duration-300'
                    >
                        <div className='flex items-center gap-4'>
                            <img
                                src={product.image}
                                alt={product.name}
                                className='w-18 h-16 object-cover rounded-lg shadow'
                            />
                            <div>
                                <h2 className='font-bold text-lg'>{product.name}</h2>
                                <p className='text-green-600 font-semibold sm:font-extrabold'>${product.new_price}</p>
                            </div>
                        </div>

                        <div className='flex gap-2 items-center mt-4 md:mt-0'>
                            <button
                                onClick={() => RemoveFromCart(product.id)}
                                className='px-3 py-1 bg-red-500 hover:bg-red-700 text-white rounded-full font-bold transition'
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
            <div className='mt-8 p-4 bg-gradient-to-r from-primary to-secondary  rounded-lg shadow flex justify-between items-center'>
                <h2 className='text-xl font-bold'>Total:</h2>
                <p className='text-2xl font-extrabold'>${totalPrice.toFixed(2)}</p>
            </div>

            <div className='flex justify-between gap-x-10 sm:gap-0 items-center mt-6'>
                <Link
                    to='/'
                    className=' bg-gray-200 text-primary text-sm sm:text-lg font-bold py-1 px-2 sm:px-4 sm:py-2 rounded shadow hover:bg-gray-300 '
                >
                    ⬅️ Continue Shopping
                </Link>
                {/* Continue Shopping" par click karne par user home page par wapas jaata hai — shopping continue karne ke liye */}

                <button
                    className='bg-green-500 hover:bg-green-600 text-white text-sm sm:text-lg font-bold py-1 px-2 sm:px-4 sm:py- rounded '
                    onClick={() => alert('Checkout process coming soon!')}
                >
                    Proceed to Checkout
                </button>
                {/* “Abhi checkout ka feature tayaar nahi hai. Hum is par kaam kar rahe hain — jaldi aayega!”
                Normally, checkout ka matlab hota hai:
                 User ko ek page par le jaana jahan:
                 Address aur payment details maange jaati hain.
                 Order confirm hota hai.
                 Lekin abhi tak tumne checkout ka page nahi banaya, isliye yeh sirf ek message show karta hai.*/}
            </div>
        </div>
    );
}

export default Cart;
