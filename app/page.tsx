import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="my-auto flex flex-col gap-2 items-center *:font-medium">
        <span className="text-9xl uppercase">🥕</span>
        <h1 className="text-4xl ">CARROT</h1>
        <h2 className="text-2xl">Welocome to Carrot Market!</h2>
      </div>
      <div>
        <Link href="/create-account">Start</Link>
        <div>
          <span>Have a Account?</span>
          <Link href="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}
