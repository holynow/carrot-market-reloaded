
export default function Home() {
  return (
    <main className="bg-gray-100 h-screen sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 flex items-center justify-center p-5">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-100">
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full rounded-full h-12 bg-gray-200 pl-5 ring ring-transparent focus:ring-purple-400 focus:ring-offset-1 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium md:px-10 ">
          Log In
        </button>
      </div>
    </main>
  );
}
