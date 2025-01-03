import ZoolingoLogo from '../utils/components/logozoo/logozoolingo';
import Navbarcom from '../utils/components/navbar/navbar';
import NavbarIcons from '../utils/components/navBarIcons/icons';
import IconsCentral from '../utils/components/IconsCentral/icons';

export default function Page() {
    return (
        <div className="bg-[#FFE1B6] h-screen">
            <>
            <Navbarcom />
            <ZoolingoLogo/>
            <IconsCentral/>
            <NavbarIcons/>
            </>
           
        </div>
    );
}
