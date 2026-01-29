import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-spider-blue text-white p-4">
      <main className="flex flex-col items-center gap-8 text-center max-w-4xl">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-spider-red drop-shadow-lg">
          Spider Dashboard
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Welcome to your secure, high-tech command center. 
        </p>
        
        <div className="flex gap-4 mt-8">
           <a 
             href="/dashboard"
             className="px-8 py-3 bg-spider-red rounded-lg font-bold hover:bg-red-700 transition shadow-[0_0_20px_rgba(229,9,20,0.5)]"
           >
             Enter Dashboard
           </a>
        </div>
      </main>
    </div>
  );
}
