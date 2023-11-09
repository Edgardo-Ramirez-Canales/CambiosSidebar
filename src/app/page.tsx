import Image from 'next/image'
import ButtonSidevar from './components/ButtonSidevarIcon/ButonSidevar'
import { FaPlus, FaLink, FaHouseUser, FaMagic } from 'react-icons/fa';
import Target from './components/TargetComponent/Target';
import Dropdown from './components/Dropdown/Dropdown';


export default function Home() {
  return (
    <main >

      <div>


        <aside
          id="sidebar-notification"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >

          <div className="mt-10"></div>
          <ButtonSidevar color="default" label="Crear Link" link="#" Icon={FaPlus} size="medium" centered={true} />

          <div className="mt-5 mb-2 mr-4 ml-4  text-gray-500 border-t border-gray-200"></div>
          <ButtonSidevar color="noBorder" label="Inicio" link="#" Icon={FaHouseUser} size="medium" />
          <ButtonSidevar color="noBorder" label="Links" link="#" Icon={FaLink} size="medium" />
          <Dropdown />
          <div className="mt-5 mb-2  text-gray-500 border-t border-gray-200"></div>
          <ButtonSidevar color="blueBorder" label="¿Necesitas ayuda?" link="#" size="medium" centered={true} />

          <Target
            color="blue"
            alertText="¡Obten beneficios recomendando Yip!"
            linkText='Conocer mas'
            linkHref="/updates"
            Icon={FaMagic}
          />


        </aside>
      </div>
    </main>
  )
}
