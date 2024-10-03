import offer from '../asserts/offer.png';
import shoe from '../asserts/shoe.png';
import shipping from '../asserts/shipping.png';
import exchange from '../asserts/exchange.png';
import support from '../asserts/support.png';
import Image from '../components/Image';

export default function OfferPage() {

    return (
        <>
            <div className='flex justify-between h-1/2 m-4 border rounded-lg shadow bg-gray-100 font-mono'>
                <Image source={shoe} className='w-64 h-96 p-4 m-2' />
                <div className='flex flex-col gap-4 p-6 m-2'>
                    <div className='flex flex-col items-center border rounded-lg shadow p-2'>
                        <h2 className="text-lg font-bold">Free Shipping</h2>
                        <p className="text-lg">Free Shipping for orders</p>
                        <p className="text-lg">over ₹ 500 on prepaid</p>
                    </div>
                    <div className='flex flex-col items-center border rounded-lg shadow p-2'>
                        <h2 className="text-lg font-bold">Hassle Free Exchange</h2>
                        <p className="text-lg">Exchange on your purchase with</p>
                        <p className="text-lg">7 days from delivery</p>
                    </div>
                    <div className='flex flex-col items-center border rounded-lg shadow p-2'>
                        <h2 className="text-lg font-bold">24x7 Online Support</h2>
                        <p className="text-lg">Talk to our support team on</p>
                        <p className="text-lg">any questions</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8 p-6 m-5'>
                    <Image source={shipping} varient='service' />
                    <Image source={exchange} varient='service' />
                    <Image source={support} varient='service' />
                </div>
                <div className='flex items-center'>
                    <Image source={offer} className='w-96 h-64 p-4' />
                </div>
            </div>
        </>
    );
}