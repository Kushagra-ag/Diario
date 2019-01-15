import React from 'react';


export const Header = (props) => {
    return(
            <nav className="navbar navbar-expand-md bg-theme navbar-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="btn btn-link btn-outline-light d-inline-block ml-auto" type="button" id="sidebarCollapse">
                <span className="navbar-toggler-icon btn-sm"></span>
                    <span></span>
                </button>
            </nav>
    );
}
