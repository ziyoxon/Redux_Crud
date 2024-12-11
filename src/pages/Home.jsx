const Home = () => {
  return (
    <div className="text-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My App
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Manage your users easily and effectively with our intuitive platform.
      </p>
      <div className="mt-10">
        <img
          src="https://www.pngarts.com/files/8/Greenery-Landscape-PNG-Transparent-Image.png"
          alt="Dashboard Preview"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;
