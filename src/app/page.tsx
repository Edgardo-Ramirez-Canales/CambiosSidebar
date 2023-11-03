import Image from 'next/image'
import ButtonSidevar from './components/ButtonSidevarIcon/ButonSidevar'
import { FaPlus,FaLink,FaHouseUser } from 'react-icons/fa';
import Target from './components/TargetComponent/Target';


export default function Home() {
  return (
    <main >
      
      <h1>Hello World</h1>
      
      
      <h1>Hello World</h1>

      <div>
      

      <aside
        id="sidebar-notification"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        >
          <ButtonSidevar color="default" label="Crear Link" link="#" Icon={FaPlus} size="medium" centered={true} />
          <ButtonSidevar color="noBorder" label="Inicio" link="#" Icon={FaHouseUser} size="medium" />
          <ButtonSidevar color="noBorder" label="Links" link="#" Icon={FaLink} size="medium" />
          <ButtonSidevar color="blueBorder" label="¿Necesitas ayuda?" link="#" size="medium" centered={true} />
      
        <Target 
          color="blue"
          badgeText="Desarrollo Exitoso"
          alertText="welcome do you live!"
          linkText='Gana Mas'
          linkHref="/updates"
          Icon={FaPlus}
        />
        
        
      </aside>
    </div>
    </main>
  )
}
