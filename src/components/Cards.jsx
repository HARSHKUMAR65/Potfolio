

const Cards = () => {
    return (
        <>
            <h2 className='text-3xl text-white font-bold text-center'>Projects </h2>
            <div className='w-full py-5  '>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 text-white'>
                    <a href="https://harshkumar65.github.io/Spinner-/">
                        <div className='w-full shadow-2xl  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:backdrop-blur-lg text-white'>
                            <img className='w-20 mx-auto mt-[1.7rem] bg-white' src='https://harshkumar65.github.io/Spinner-/assets/wheel-2.png' alt="/" />
                            <h2 className='text-2xl font-bold text-center py-8'>Spinner</h2>
                            {/* <p className='text-center text-4xl font-bold'>$149</p> */}
                            <div className='text-center font-medium'>
                                <p className='py-2 border-b mx-8 mt-8'>Developed a custom spinner component using HTML, CSS, and JavaScript to enhance user experience on web applications. </p>

                            </div>

                            {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}

                        </div>
                    </a>
                    <a href="https://harshkumar65.github.io/Store_site/">
                        <div className='w-full shadow-2xl  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:backdrop-blur-lg'>
                            <img className='w-20 mx-auto mt-[1.7rem] bg-white' src='https://mobirise.com/extensions/organicamp/assets/images/logo1.jpg' alt="/" />
                            <h2 className='text-2xl font-bold text-center py-8'>Vegan Store </h2>
                            {/* <p className='text-center text-4xl font-bold'>$149</p> */}
                            <div className='text-center font-medium'>
                                <p className='py-2 border-b mx-8 mt-8'>Developed an e-commerce store website using HTML, CSS, and JavaScript, showcasing a wide range of products and providing a seamless shopping experience for customers. </p>

                            </div>

                            {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}

                        </div>
                    </a>
                    <a href="https://github.com/HARSHKUMAR65/Wheather_app">
                        <div className='w-full shadow-2xl  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:backdrop-blur-lg'>
                            <img className='w-20 mx-auto mt-[1.7rem] bg-white' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZICV0fftz_-7z6RqV753FHwIECEPSxjhi6g&usqp=CAU' alt="/" />
                            <h2 className='text-2xl font-bold text-center py-8'>Wheather Aplication </h2>
                            {/* <p className='text-center text-4xl font-bold'>$149</p> */}
                            <div className='text-center font-medium'>
                                <p className='py-2 border-b mx-8 mt-8'>Built a weather application using React, providing real-time weather updates and forecasts, enhancing user experience with dynamic data visualization and intuitive design.</p>

                            </div>

                            {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button> */}

                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Cards;