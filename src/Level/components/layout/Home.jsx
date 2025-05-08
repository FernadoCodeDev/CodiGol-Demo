import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Background from "../../assets/img/Background.webp";
import { ClerkProvider } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
 
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>


      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          Bienvenido a <span className="text-yellow-500">CódiGol</span>
        </h1>
        <p className="max-w-xl mb-8 text-lg md:text-xl">
          Aprende <span className="text-yellow-400">Tailwind CSS</span> jugando y dominando estilos como un pro.
        </p>

 
        <div className="flex flex-col w-full max-w-xs gap-4">
          <button className="px-6 py-3 font-bold text-black transition-all bg-yellow-500 hover:bg-yellow-600 rounded-xl">
            ¡Jugar Ahora!
          </button>
          <button className="px-6 py-2 font-semibold text-black bg-white hover:bg-gray-200 rounded-xl">
            Instrucciones
          </button>
          
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2 text-white transition bg-black border border-white rounded-xl hover:bg-white hover:text-black">
                Iniciar sesión
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        <p className="mt-10 text-sm opacity-70">
          Proyecto creado para la <span className="underline">Hackathon de MiduDev 2025</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
