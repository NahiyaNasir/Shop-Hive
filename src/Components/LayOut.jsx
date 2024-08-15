
import NavBar from './Shared/NavBar';
import { Outlet } from 'react-router-dom';

const LayOut = () => {
    return (
        <div className=' '>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LayOut;