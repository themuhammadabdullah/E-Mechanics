"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../public/images/Mechanic.png'
interface Testimonial {
  _id: string;
  name: string;
  review: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:8000/Review')
      .then((response) => response.json())
      .then((data: Testimonial[]) => setTestimonials(data.slice(0, 3))) // Display only the latest 3 reviews
      .catch((error) => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-400">See what our customers have to say about E-Mechanics' reliable and efficient service providers.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {testimonials.map((testimonial) => (
              <div key={testimonial._id} className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={img} width={48} height={48} alt="Testimonial" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">— {testimonial.review}</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">{testimonial.name}</cite> - <span className="text-purple-600">Customer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}