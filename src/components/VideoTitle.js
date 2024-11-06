const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg w-full line-clamp-5">{overview}</p>
      <div className="py-6">
        <button className="bg-white text-black p-4 px-12  text-xl rounded-lg hover:bg-opacity-80">
        ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12  text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80">
        ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
