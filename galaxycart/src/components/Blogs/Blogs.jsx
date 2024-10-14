import React from 'react'
import Heading from '../Shared/Heading';

const Blogs = () => {
  return (
    <div>
        <div className='container'>
            {/** heading section */}
            <Heading title='Trending Products' subtitle={'Explore More'} />
            {/** blog section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                {/** blog card */}

            </div>
        </div>
    </div>
  );
};

export default Blogs;