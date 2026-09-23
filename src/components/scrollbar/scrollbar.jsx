import React from 'react';
import AnchorLinkComponent from 'react-anchor-link-smooth-scroll';
import './style.css'
const AnchorLink = AnchorLinkComponent.default || AnchorLinkComponent;

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><AnchorLink href='#scrool'><i className="ti-arrow-up"></i></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
