"use client"
import Link from 'next/link'
// import { useRouter } from 'next/router';
import { useState } from 'react';
import SignIn from '../signin/page';

export default function SignUp() {

  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
  });

  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
  
    // Collect all form data
    const {
      Name,
      email,
      phoneNumber,
      address,
      password,
    } = formData;
  
    // Add validation logic here
    const newErrors = {};
    try {
      // Send the form data to your API or perform other actions
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name,
          email,
          phoneNumber,
          address,
          password,
        }),
      });
  
      if (response.ok) {
        // router.push('/signin');
        // Success, handle the response here
        // For example, redirect to another page or show a success message.
      } else {
        // Error handling, handle errors here
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1">Users Form</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
           
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <h1 className="text-gray-600 font-bold">Register as a User</h1>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <form  onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
                  <input name='Name' onChange={handleInputChange} id="full-name" type="text" className="form-input w-full text-gray-800" placeholder="First and last name" required />
                </div>
              </div>
              
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="phone">Alternative Phone Number</label>
                  <input name='phoneNumber' onChange={handleInputChange} id="phone" type="text" className="form-input w-full text-gray-800" placeholder="Your phone number" />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="address">Address</label>
                  <input name='address' onChange={handleInputChange} id="city" type="text" className="form-input w-full text-gray-800" placeholder="Your address" />
                </div>
              </div>
             
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" type="submit">Register</button>
                </div>
              </div>
            </form>
            
          </div>

        </div>
      </div>
    </section>
  )
}
