import React from 'react'
import Image1 from '../../assets/Category/earphone.png';
import Image2 from '../../assets/Category/watch.png';
import Image3 from '../../assets/Category/macbook.png';
import Button from '../Shared/Button';

const Category = () => {
  return (
        <div className='py-8'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/**First col */}
                    <div>
                        <div>
                            <div>
                                <p>Enjoy</p>
                                <p>With</p>
                                <p>Earphone</p>
                                <Button 
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>

                    </div>
                    {/**Second col */}
                    {/**third col */}

                </div>
            </div>

        </div>
  );
};

export default Category;