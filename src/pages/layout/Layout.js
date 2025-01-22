import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='background'>
            <div className='wrapper'>
                <header>
                    
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>

                </footer>
            </div>
        </div>
    );
};

export default Layout;