import Button from "@/Components/Button";

const Riseissue = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="bg-white rounded-xl shadow-lg text-gray-600 p-8">
        <form action="" className="flex flex-col space-y-4">
          <div>
            <label htmlFor="" className="text-lg font-bold">
              Your email
              {/* ml-48 */}
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2 mb-2"
            />
          </div>
          <div>
            <label htmlFor="" className="text-lg font-bold">
              Your comment
            </label>
            <textarea
              rows={4}
              placeholder="Enter your comment"
              className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300 mt-2"
            />
          </div>
          <Button className="inline-block self-start bg-blue-400 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-blue-500">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Riseissue;
