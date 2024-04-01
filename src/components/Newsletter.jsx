const Newsletter = () => {
  return (
    <div className=" py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:backdrop-blur-lg shadow-lg rounded-lg p-8 transform hover:scale-105 transition duration-300 ">
          <h2 className="text-white text-2xl font-bold text-center mb-6">Language</h2>
          <div className="flex flex-wrap justify-center">
            <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">HTML</span>
            <span className="inline-block bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">CSS</span>
            <span className="inline-block bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">JavaScript</span>
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-4 py-2 text-sm font-semibold text-white mb-4">Python</span>
          </div>
        </div>
        <div className="md:backdrop-blur-lg shadow-lg rounded-lg p-8 transform hover:scale-105 transition duration-300 ">
          <h2 className="text-white text-2xl font-bold text-center mb-6">Library / Framework</h2>
          <div className="flex flex-wrap justify-center">
            <span className="inline-block bg-gradient-to-r from-pink-400 to-rose-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Bootstrap</span>
            <span className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Tailwind</span>
            <span className="inline-block bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">React</span>
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Flask</span>
            <span className="inline-block bg-gradient-to-r from-green-400 to-lime-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Node Js</span>
            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Selenium</span>
            <span className="inline-block bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full px-4 py-2 text-sm font-semibold text-white mb-4">Puppeteer</span>
          </div>
        </div>
        <div className="md:backdrop-blur-lg shadow-lg rounded-lg p-8 transform hover:scale-105 transition duration-300 ">
          <h2 className="text-white text-2xl font-bold text-center mb-6">Tools</h2>
          <div className="flex flex-wrap justify-center">
            <span className="inline-block bg-gradient-to-r from-pink-400 to-red-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Debugging Tools</span>
            <span className="inline-block bg-gradient-to-r from-gray-400 to-gray-600 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Github</span>
            <span className="inline-block bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Database (SQL , MongoDB)</span>
            <span className="inline-block bg-gradient-to-r from-green-400 to-lime-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">ES5 & ES6</span>
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Web API</span>
            <span className="inline-block bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Package Manager</span>
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-4 py-2 text-sm font-semibold text-white mr-4 mb-4">Bundlers(webpack and vite.js)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
