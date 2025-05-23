import React, { useState, useEffect } from "react";
import MobileMenu from "../assets/img/MobileMenu.webp";
import CloseMenuIcon from "../assets/svg/Close";
import ModalInNavigation from "./ModalInNavigation";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Menu Status
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flex h-auto">
      {menuOpen && (
        <div
          className={`fixed text-white top-0 left-0 w-full md:max-w-96 h-full bg-black/70 backdrop-blur-[4px] transition-transform duration-700 ease-in-out transform z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close menu */}
          <CloseMenuIcon
            className="absolute right-0 w-20 h-auto cursor-pointer top-5"
            onClick={toggleMenu}
          />
          <nav className="p-4 ">
            <div className="flex flex-col justify-between gap-2 p-8">
              <h1 className="mb-4 text-5xl font-bold md:text-6xl">CódiGol</h1>

              <button
                onClick={toggleModal}
                className="w-full px-6 py-2 font-semibold text-black bg-white hover:bg-gray-200 rounded-xl"
              >
                Instrucciones
              </button>

              <a href="/">
                <button className="w-full px-6 py-2 font-semibold text-black bg-white hover:bg-gray-200 rounded-xl">
                  Regresar
                </button>
              </a>
            </div>
          </nav>
        </div>
      )}

      <ModalInNavigation isOpen={isModalOpen} toggleModal={toggleModal} />

      {!menuOpen && (
        <img
          src={MobileMenu}
          alt="Mobile Menu"
          className="absolute z-10 w-16 h-auto cursor-pointer top-5 left-5 invert"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navigation;
