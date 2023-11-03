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
  badgeText = 'New update',
  alertText = 'A new system update is available today.',
  linkText = 'ahi va el link',
  linkHref = '#',
  Icon
}) => {
  return (
    <div className="absolute bottom-0 left-0 justify-center px-4 pb-4 w-full" sidebar-bottom-menu>
      <div id="alert-update" className="p-4 mb-3 bg-gray-50 rounded-lg" role="alert">
        <div className="flex justify-between items-center mb-3">
           <span className={`${bgColorMap[color]} ${textColorMap[color]} text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}>{badgeText}</span>
          <button
            type="button"
            className="inline-flex p-1 w-6 h-6 text-gray-500 bg-gray-50 rounded-lg focus:ring-2 focus:ring-gray-400 hover:bg-gray-200"
            data-dismiss-target="#alert-update"
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="mb-3 text-sm text-gray-700">{alertText}</div>
        <a href={linkHref} className={`inline-flex items-center text-sm font-medium ${textColorMap[color]} hover:underline`}>
          {linkText}
          {Icon && <Icon className="ml-1 w-5 h-5" />}
        </a>
      </div>
      <div id="alert-new-feature" className="p-4 bg-gray-50 rounded-lg" role="alert">
        {/* Contenido adicional aquí */}Tageta Simple
      </div>
    </div>
  )
}
export default Target