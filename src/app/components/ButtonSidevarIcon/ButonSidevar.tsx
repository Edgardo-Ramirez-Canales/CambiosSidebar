import React, { FC, ReactElement } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    color: 'default' | 'alternative' | 'light' | 'noBorder' | 'blueBorder' | undefined;
    label: string;
    link: string;
    Icon?: IconType;
    size?: 'small' | 'medium' | 'large';
    centered?: boolean;
}

const ButtonSidevar: FC<ButtonProps> = ({ color, label, link, Icon, size = 'medium', centered = false }) => {
    const baseClasses = `flex items-center focus:outline-none font-base rounded-lg mb-2 mr-2 ml-2  ${centered ? "justify-center ml-1 mr-1" : ""}`;
    const colorClasses = {
        default: "text-white bg-blue-700 hover:bg-blue-800",
        alternative: "py-2.5 px-5  font-base text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  ",
        noBorder: "py-2.5 px-5  font-base text-gray-900 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  ",
        blueBorder: "py-2.5 px-5  font-base text-gray-900 bg-white rounded-lg border border-blue-500 hover:bg-gray-100 hover:text-blue-700 focus:z-10  ",
    };
    const sizeClasses = {
        small: "px-3 py-1.5",
        medium: "px-5 py-2.5",
        large: "px-6 py-3"
    };

    return (
        <a href={link} className={`${baseClasses} ${colorClasses[color] || colorClasses.default} ${sizeClasses[size]}`}>
            {Icon && <Icon className="mr-2" />}
            {label}
        </a>
    );
};

export default ButtonSidevar;
