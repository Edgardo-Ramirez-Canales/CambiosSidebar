import React, { FC, ReactElement } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  color: 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple' | 'noBorder' | 'blueBorder';
  label: string;
  link: string;
  Icon?: IconType;
  size?: 'small' | 'medium' | 'large';
  centered?: boolean; 
}

const ButtonSidevar: FC<ButtonProps> = ({ color, label, link, Icon, size = 'medium', centered = false }) => {
  const baseClasses = `flex items-center focus:outline-none font-medium rounded-lg mb-2 mr-2 ml-2  ${centered ? "justify-center ml-1 mr-1" : ""}`;
    const colorClasses = {
        default: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500",
        alternative: "py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
        //... Añade las demás clases de colores aquí
        dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
        light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
        green: "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
        red: "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
        yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
        purple: "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
        noBorder: "py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700",
        blueBorder: "py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-blue-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-blue-500 dark:hover:text-white dark:hover:bg-gray-700",

    };
    const sizeClasses = {
        small: "text-xs px-3 py-1.5",
        medium: "text-sm px-5 py-2.5",
        large: "text-lg px-6 py-3"
    };

    return (
        <a href={link} className={`${baseClasses} ${colorClasses[color] || colorClasses.default} ${sizeClasses[size]}`}>
            {Icon && <Icon className="mr-2" />}
            {label}
        </a>
    );
};

export default ButtonSidevar;
