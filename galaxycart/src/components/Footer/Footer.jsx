import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaEnvelope, FaInstagram, FaLinkedin, FaFacebook  } from 'react-icons/fa'; // Corrected import



const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/#blog',
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/** company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Galaxy Cart
            </a>
            <p className="text-gray-600 lg:pr-3">
              is an ecommerce platform catering to fashion-forward,
              environmentally conscious consumers seeking style without
              compromising on ethical standards. It offers a curated selection
              of products that blend sustainability with modern trends,
              ensuring customers can shop with a purpose.
            </p>
          </div>

          {/** quick links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/** second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/** Shop Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Shop Address
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>1234 Main St, Middelburg, 1055</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>Phone: +27 11 123 4567</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaEnvelope />
                  <p>Email: siphiwe@galaxycart.co.za</p>
                </div>
                {/** social media links */}
                <div className='flex items-center gap-3 mt-6'>
                    <a href='#'>
                        <FaInstagram className='text-3xl hover:text-primary duration-300' />   
                    </a>
                    <a href='#'>
                        <FaFacebook className='text-3xl hover:text-primary duration-200' />   
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-3xl hover:text-primary duration-200' />   
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
