import Image from 'next/image';
import Bike from '@/public/images/bike1.jpg';
import Car from '@/public/images/car1.jpg';
import Electrician from '@/public/images/elec1.jpg';
import Plumber from '@/public/images/plum1.jpg';
import AC from '@/public/images/ac1.jpg';
import LPG from '@/public/images/lpg.jpg';

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
              <Image src={Bike} width={200} height={200} alt="Bike Mechanic" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">Bike Mechanic</h4>
              <p className="text-lg text-gray-600 text-center">
              Get back on two wheels with our professional bike mechanic services. We fix all bike-related issues quickly and efficiently, so you can get back to riding as soon as possible.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={Car} width={200} height={200} alt="Car Mechanic" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">Car Mechanic</h4>
              <p className="text-lg text-gray-600 text-center">
                Keep your car in peak condition with our professional car mechanic services. We fix all car-related issues quickly.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={Electrician} width={200} height={200} alt="Electrician" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">Electrician</h4>
              <p className="text-lg text-gray-600 text-center">
              Keep your electrical system safe and up-to-code with our professional electrical services.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={Plumber} width={200} height={200} alt="Plumber" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">Plumber</h4>
              <p className="text-lg text-gray-600 text-center">
              Keep your plumbing in top condition with our professional plumbing services. 
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={LPG} width={200} height={200} alt="LPG Gas" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">LPG Gas</h4>
              <p className="text-lg text-gray-600 text-center">
              Get the LPG gas you need for your home or business from our reliable LPG gas delivery service.
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <div className="max-w-full mx-auto md:max-w-none h-auto">
              <a href="/ac-repairing" style={{ cursor: 'pointer' }}>
              <Image src={AC} width={200} height={200} alt="AC Repairing" style={imageStyle} />
            </a>
              </div>
              <h4 className="h4 mb-2">Battery Replacement</h4>
              <p className="text-lg text-gray-600 text-center">
              Stay cool during your journeys. Our expert technicians offer quick and reliable AC repairing services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
