import offer from "../asserts/offer.png";
import shoe from "../asserts/shoe.png";
import shipping from "../asserts/shipping.png";
import exchange from "../asserts/exchange.png";
import support from "../asserts/support.png";
import Image from "../components/Image";
import ServiceContent from "../components/ServiceContent";

export default function OfferPage() {
  return (
    <div className="flex justify-between h-1/2 m-4 border rounded-lg shadow bg-gray-100 font-mono">
      <Image source={shoe} className="w-64 h-96 p-4 m-2" />
      <div className="flex flex-col gap-4 p-6 m-2">
        <ServiceContent
          title="Free Shipping"
          subTitle="Free Shipping for orders"
          description="over ₹ 500 on prepaid"
        />
        <ServiceContent
          title="Hassle Free Exchange"
          subTitle="Exchange on your purchase with"
          description="7 days from delivery"
        />
        <ServiceContent
          title="24x7 Online Support"
          subTitle="Talk to our support team on"
          description="any questions"
        />
      </div>
      <div className="flex flex-col gap-8 p-6 m-5">
        <Image source={shipping} varient="service" />
        <Image source={exchange} varient="service" />
        <Image source={support} varient="service" />
      </div>
      <div className="flex items-center">
        <Image source={offer} className="w-96 h-64 p-4" />
      </div>
    </div>
  );
}
