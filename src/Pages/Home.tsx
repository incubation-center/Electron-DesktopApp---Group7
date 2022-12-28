const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="max-w-sm h-80 mt-24 m-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-blue-300 ">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-600">
              Welcome To School Management System
            </h1>
          </a>
          <p className="mt-3 font-normal text-black-800">
            Please Sign up{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              login
            </a>{" "}
            that we have we already provide you and the roadmap as well.
            <a
              href="/signup"
              className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
