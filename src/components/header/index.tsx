import { Link } from 'react-router-dom';
import logoImg from './../../assets/logo.svg';
import {FiUser, FiLogIn} from 'react-icons/fi'





export function Header(){

    const singed = true;
    const loadingAuth = false;

    return(
        <div className='flex w-full items-center justify-center h-16 bg-white drop-shadow mb-4'>
            <header className='flex w-full max-w-7xl items-center justify-between px-4 mx-auto'>
                <Link to='/'>
                    <img
                        src={logoImg}
                        alt='Logo do site'
                    />
                </Link>

                {!loadingAuth && singed && (
                    <Link to='/dashboard'>
                        <div className='border-2 rounded-full p-1 border-gray-900'>
                            <FiUser size={24} color='#000'/>
                        </div>
                    </Link>
                )}

                {!loadingAuth && !singed && (
                    <Link to='/login'>
                        <div className='border-2 rounded-full p-1 border-gray-900'>
                            <FiLogIn size={24} color='#000'/>
                        </div>
                    </Link>
                )}
            </header>
        </div>
    )
}