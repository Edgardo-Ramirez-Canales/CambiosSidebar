import React from 'react'

type ColorOptions = 'red' | 'blue' | 'green' | 'purple' | 'yellow';
const bgColorMap: Record<ColorOptions, string> = {
  red: 'bg-red-100',
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  purple: 'bg-purple-100',
  yellow: 'bg-yellow-100',
};

const textColorMap: Record<ColorOptions, string> = {
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
  purple: 'text-purple-600',
  yellow: 'text-yellow-600',
};
interface TargetProps {
  color: ColorOptions; // Color general para el fondo y texto
  badgeText?: string;
  alertText?: string;
  linkText?: string;
  linkHref?: string;
  Icon?: React.ComponentType<{ className?: string }>;
}


const Target: React.FC<TargetProps> = ({
  color,
  alertText = 'A new system update is available today.',
  linkText = 'ahi va el link',
  linkHref = '#',
  Icon
}) => {
  return (
    <div className=" mt-4 left-0 mr-2 ml-2 justify-center  pb-4 w-full " sidebar-bottom-menu>
      <div id="alert-update" className="p-4 mb-3 rounded-lg bg-blue-100 w-full" role="alert">
        {Icon && <Icon className="mr-2 text-blue-400" />}
        <div className="flex justify-between items-center mb-3">
        </div>
        <div className="mb-3 text-sm text-blue-700">{alertText}</div>
        <a href={linkHref} className={`inline-flex items-center text-sm font-medium ${textColorMap[color]} underline`}>
          {linkText}
        </a>
      </div>

    </div>
  )
}
export default Target