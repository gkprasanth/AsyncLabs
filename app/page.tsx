import Head from "next/head";
 

export default function Home() {
  return (
    <>
    <Head>
      <title>AsyncLabs | Coming Soon</title>
      <meta name="description" content="AsyncLabs - Enterprise Software Solutions Coming Soon" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="text-center px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">AsyncLabs</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          Enterprise software solutions, built for the future.
        </p>
        <p className="text-lg text-gray-300 mb-10">
          We're working hard to launch soon. Stay tuned!
        </p>
        <button className="px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold text-lg hover:bg-gray-100 transition">
          Coming Soon...
        </button>
      </div>
    </div>
  </>
  );
}
