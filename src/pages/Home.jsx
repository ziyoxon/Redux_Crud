const Home = () => {
  return (
    <div className="text-center mt-10 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My App
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Manage your users easily and effectively with our intuitive platform.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="/users"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          View Users
        </a>
        <a
          href="/create-user"
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Add New User
        </a>
      </div>
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
