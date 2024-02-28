import Image from "next/image";
import Link from "next/link";
import Mechanic from "@/public/images/Mechanic.png";
import Features from "@/components/features";
// import Map from "../components/map";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* <svg
            className="max-w-full"
            width="564"
            height="552"
            viewBox="0 0 564 552"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg> */}
        </div>

        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Welcome to E-Mechanics
            </h1>
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Welcome to E-Mechanics, your hub for all things automotive. Find
              expert mechanics or book quality service with ease.
            </p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  href={"signin"}
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                >
                  Start
                </Link>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  href={"signin"}
                  className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
            data-aos="fade-up"
          >
            {/* <div>
              <Map />
            </div> */}

            <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={Mechanic}
              width={640}
              height={505}
              alt="Features 01"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
