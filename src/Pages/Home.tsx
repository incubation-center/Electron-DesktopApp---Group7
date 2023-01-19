const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      {/* <div className="max-w-sm h-80 mt-24 m-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-blue-300 "> */}
      <div className="max-w-m h-80 mt-10 m-auto">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h1 className="text-cyan-600 font-serif mb-2 text-4xl font-bold tracking-tight">
              Welcome to
            </h1>
            <h2 className="text-cyan-700 font-serif text-3xl font-bold">School Management System</h2>
            <div className="mt-6 flex justify-center">
              <img className="h-72" src="src\assets\hero-img.png" alt="" />
            </div>
          </a>
          <p className="mt-3 font-normal text-black-800">
            Sign up and Log in to discover our SMS system!
          </p>
          <div className="p-5 grid grid-cols-2 gap-2">
            {""}
            <a
              href="/login"
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              <button
              className="w-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-md py-3 text-gray-50-text-lg text-white button"
            >
              Login
            </button>
            </a>
            {""}
            <a
              href="/signup"
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              <button
              className="w-full bg-gradient-to-r from-indigo-400 to-blue-400 rounded-md py-3 text-gray-50-text-lg text-white button"
            >
              Sign up
            </button>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
