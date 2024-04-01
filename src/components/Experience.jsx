import React from "react";

const Experience = () => {
    return (
        <div className="max-w-[1240px] mx-auto ">
            <div className="flex justify-start items-center my-5">
                <div className=" md:backdrop-blur-lg rounded-lg shadow-2xl p-6 max-w-xl w-full text-white">
                    <div className="mb-4">
                        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
                        <div className="flex items-center mb-4">
                            <img src="https://i0.wp.com/brandeducer.com/wp-content/uploads/2020/09/BrandEducer-Logo.png?fit=215%2C43&ssl=1"
                                alt="Brandeducer Digital Solutions" className="h-10 mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold">Front-End Developer</h3>
                                <h4 className="text-lg font-semibold"><a href="https://brandeducer.com" className="text-blue-400">Brandeducer Digital Solutions</a></h4>
                                <p className="text-sm">1 Year Experience</p>
                            </div>
                        </div>
                    </div>
                    <ul className="list-disc ml-8">
                        <li>Designed and developed user interfaces using React, Bootstrap, and Tailwind.</li>
                        <li>Implemented Node.js, Flask, MongoDB, and SQL for web application integration.</li>
                        <li>Proficient in Python web scraping with BeautifulSoup.</li>
                        <li>Extracted data from various websites for email marketing campaigns and lead generation.</li>
                        <li>Created automation tools for social media messaging, streamlining communication.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
