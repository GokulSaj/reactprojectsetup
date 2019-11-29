import React from 'react';

import Header from './Header/header';
import Footer from './Footer/footer';


const Layout = (props) => {
        return (
            <div>
                <Header authStatus={props.authStatus}/>
                {props.children}
                <Footer />
            </div>
        );
}



export default Layout;