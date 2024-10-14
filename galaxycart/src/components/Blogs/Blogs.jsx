import React from 'react'
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

const BlogData = [
    {
        title: "How to choose a perfact Smarwatch",
        subtitle: "Most smartwatches are designed to serve as companions to your smartphone, device compatibility is worth considering. Fortunately, there are a lot of smartwatches that play nicely with both iOS and Android devices.",
        published: "14 Oct, 2024 by Siphiwe",
        image: Img1,
    },
    {
        title: "How to choose a perfact Gadget",
        subtitle: "Identify Your Needs and Preferences Do Your Research Set a Realistic Budget Consider Long-Term Value Hands-On Experience Read User Feedback Future-Proof Your Purchase",
        published: "1 Sep, 2024 by Thabo",
        image: Img2,
    },
    {
        title: "How to choose a perfact VR Headset",
        subtitle: "To choose the perfect VR headset, you need to carefully consider a variety of factors, including hardware specifications, compatibility, content library, user experience, and budget. ",
        published: "1 Oct, 2024 by Zweli",
        image: Img3,
    },
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container'>
            {/** heading section */}
            <Heading title='Trending Products' subtitle={'Explore More'} />
            {/** blog section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/** blog card */}
                {
                    BlogData.map((data) => (
                        <div key={data.title} className='bg-white dark:bg-gray-800 rounded-2xl p-4'>
                            {/**image section */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-200' />
                            </div>
                            {/**content section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-300'>{data.subtitle}</p>
                            </div>
                            </div>
                    ))}
                

            </div>
        </div>
    </div>
  );
};

export default Blogs;