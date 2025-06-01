import { ReactTyped } from 'react-typed';

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
    <div className='w-full py-[110px]'>
      <div className='max-w-[1240px] mx-auto text-center'>

        <div className='text-2xl text-white md:text-4xl font-bold md:p-[24px] p-[5px]'>
          Hello, I’m
        </div>

        <h2 className='text-white font-bold md:text-[80px] text-3xl md:p-[24px] p-[15px]'>Harsh Kumar</h2>

        <div className='text-[15px] md:text-[50px] bg-gradient-to-r from-black to-white bg-clip-text text-transparent font-bold md:p-[24px] p-[15px]'>
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


        <button onClick={handleDownload} className='bg-white text-black rounded-xl p-3 m-2'>
          Download My Resume
        </button>

      </div>
    </div>
  );
}

export default Banner;
