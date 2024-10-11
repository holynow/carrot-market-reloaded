import Link from 'next/link';
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium text-center">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl ">CARROT</h1>
        <h2 className="text-xl">Welocome to Carrot Market!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn py-2.5 text-lg">
          Start
        </Link>
        <div className="flex gap-2">
          <span>Have a Account?</span>
          <Link href="/login" className="hover:underline underline-offset-4">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;