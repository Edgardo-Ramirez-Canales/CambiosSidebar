'use client'
import React, { useState } from 'react';
import { FiSettings } from 'react-icons/Fi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='m-2'>
      <button
        type="button"
        className={`flex items-center w-full p-2 font-base mb-2 mr-2 ml-2 text-gray-900 transition duration-75 rounded-lg group ${isOpen ? 'hover:bg-gray-100' : ''
          } `}
        onClick={toggleDropdown}
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
      >
        <FiSettings />
        <span className="flex-1 ml-3 text-left font-base whitespace-nowrap">Ajustes</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <ul id="dropdown-example" className="py-2 space-y-2">
          <li>
            <a
              href="#"
              className={`flex items-center text-base p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ${isOpen ? 'hover:bg-gray-100' : ''
                }`}
            >
              Mi perfil
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center w-full text-base p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ${isOpen ? 'hover:bg-gray-100' : ''
                }`}
            >
              Organización
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center w-full text-base p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group ${isOpen ? 'hover:bg-gray-100' : ''
                }`}
            >
              Planes y Precios
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
