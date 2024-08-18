
import Footer from './Shared/Footer';
import NavBar from './Shared/NavBar';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div className=' '>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;