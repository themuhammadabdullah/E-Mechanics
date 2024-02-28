import Image from 'next/image';
import Mechanic from '@/public/images/mech1.jpg';
import Link from 'next/link'


export default function Features() {
  const imageBorderRadius = '12px'; // Adjust the value to control the curviness

  const imageStyle = {
    borderRadius: imageBorderRadius,
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">E-Mechanics: Your Solution for Quick Automotive Repairs.</h2>
            <p className="text-xl text-gray-600">
              Experience hassle-free solutions with E-Mechanics. We understand your vehicle's needs and provide instant services to get you back on the road.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={Mechanic} width={200} height={200} alt="Bike Mechanic" style={imageStyle} />
            </a>
              </div>
              
  <h4 className="h4 mb-2">Ali Kareem</h4>
  <div className="text-lg text-gray-600 text-center">
    <p className='text-left'><span className='font-bold'>Phone no:</span> 03123456789</p>
    <p className='text-left'><span className='font-bold'>E Mail:</span> abc123@gmail.com</p>
    <p className='text-left'><span className='font-bold'>Shop:</span> MCS,NUST RWP</p>
  </div>

              <br></br>
  <Link href="/UsersForm" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
    Book Now
  </Link>

            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={Mechanic} width={200} height={200} alt="Car Mechanic" style={imageStyle} />
            </a>
              </div>
              
  <h4 className="h4 mb-2">Ali Kareem</h4>
  <div className="text-lg text-gray-600 text-center">
    <p className='text-left'><span className='font-bold'>Phone no:</span> 03123456789</p>
    <p className='text-left'><span className='font-bold'>E Mail:</span> abc123@gmail.com</p>
    <p className='text-left'><span className='font-bold'>Shop:</span> MCS,NUST RWP</p>
  </div>

              <br></br>
  <Link href="/UsersForm" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
    Book Now
  </Link>

            </div>

            {/* 3rd item */}
            

<div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">

    <div className="max-w-full mx-auto md:max-w-none h-auto">
      <Image src={Mechanic} width={200} height={200} alt="Electrician" style={imageStyle} />
    </div>
    <h4 className="h4 mb-2">Ali Kareem</h4>
  <div className="text-lg text-gray-600 text-center">
    <p className='text-left'><span className='font-bold'>Phone no:</span> 03123456789</p>
    <p className='text-left'><span className='font-bold'>E Mail:</span> abc123@gmail.com</p>
    <p className='text-left'><span className='font-bold'>Shop:</span> MCS,NUST RWP</p>
  </div>
    <br></br>
  <Link href="/UsersForm" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
    Book Now
  </Link>

</div>


            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={Mechanic} width={200} height={200} alt="Plumber" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">Ali Kareem</h4>
  <div className="text-lg text-gray-600 text-center">
    <p className='text-left'><span className='font-bold'>Phone no:</span> 03123456789</p>
    <p className='text-left'><span className='font-bold'>E Mail:</span> abc123@gmail.com</p>
    <p className='text-left'><span className='font-bold'>Shop:</span> MCS,NUST RWP</p>
  </div>
              <br></br>
  <Link href="/UsersForm" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
    Book Now
  </Link>

            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={Mechanic} width={200} height={200} alt="LPG Gas" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">Ali Kareem</h4>
  <div className="text-lg text-gray-600 text-center">
    <p className='text-left'><span className='font-bold'>Phone no:</span> 03123456789</p>
    <p className='text-left'><span className='font-bold'>E Mail:</span> abc123@gmail.com</p>
    <p className='text-left'><span className='font-bold'>Shop:</span> MCS,NUST RWP</p>
  </div>
              <br></br>
  <Link href="/UsersForm" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
    Book Now
  </Link>

            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={Mechanic} width={200} height={200} alt="AC Repairing" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">Ali Kareem</h4>
  <div className="text-lg text-gray-600 text-center">
    <p className='text-left'><span className='font-bold'>Phone no:</span> 03123456789</p>
    <p className='text-left'><span className='font-bold'>E Mail:</span> abc123@gmail.com</p>
    <p className='text-left'><span className='font-bold'>Shop:</span> MCS,NUST RWP</p>
  </div>
              <br></br>
  <Link href="/UsersForm" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
    Book Now
  </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
