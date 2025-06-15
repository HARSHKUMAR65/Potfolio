import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

function Banner() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/Harsh_resume.pdf';
    link.setAttribute('download', 'Harsh_resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='w-full py-[110px] '>
      <div className='max-w-[1240px] mx-auto text-center'>

        {/* Intro */}
        <div className='text-2xl text-white md:text-4xl font-bold md:p-[24px] p-[5px]'>
          Hello, I’m
        </div>

        {/* Name */}
        <h2 className='text-white font-bold md:text-[80px] text-3xl md:p-[24px] p-[15px]'>
          Harsh Kumar
        </h2>

        {/* Typed Text */}
        <div className='text-[15px] md:text-[50px] bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent font-bold md:p-[24px] p-[15px]'>
          <ReactTyped
            className='pl-3'
            strings={[
              'Software Engineer | 2+ Years of Experience',
              'Building Web & Mobile Apps with React/Node.js'
            ]}
            typeSpeed={100}
            loop
          />
        </div>

        {/* Resume Button */}
        <button
          onClick={handleDownload}
          className='bg-white text-black font-semibold rounded-xl px-6 py-3 mt-4 hover:bg-gray-200 transition'
        >
          Download My Resume
        </button>

        {/* Social Icons */}
        <div className='flex justify-center items-center gap-6 mt-8'>
          <a href="https://github.com/HARSHKUMAR65" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-pink-500 text-3xl transition" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-kumar-1849b61b8/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-pink-500 text-3xl transition" />
          </a>
          <a href="https://stackoverflow.com/users/23514222/harsh-kumar" target="_blank" rel="noopener noreferrer">
            <FaStackOverflow className="text-white hover:text-pink-500 text-3xl transition" />
          </a>
          <a href="https://hashnode.com/@harsh182" target="_blank" rel="noopener noreferrer">
            <SiHashnode className="text-white hover:text-pink-500 text-3xl transition" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Banner;
