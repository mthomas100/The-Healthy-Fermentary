import Image from 'next/image';

export default function Hero() {
  const imageUrl =
    'https://res.cloudinary.com/mthomas/image/upload/v1637687534/satyn-ecommerce/large_kombucha_Fruit_d95b969dfa_cec9e031d7.jpg';

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/THFCrew.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
        />

        <div
          className="absolute inset-0 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-loose text-white sm:text-5xl lg:text-6xl">
          Fermented Beverages Delivered to your Doorstep
        </h1>
        <p className="mt-6 text-xl font-bold text-white max-w-3xl">
          Coming in 2022
        </p>
      </div>
    </div>
  );
}
