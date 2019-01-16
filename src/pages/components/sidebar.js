import React from 'react';
import { style1 } from '../../styles.js';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    return(
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <br/>
                        <h3>Sidemenu</h3>
                        <p>Dummy Heading</p><br/>
                    </div>

                    <ul className="list-unstyled components">
                        
                        <li>
                            <Link to='/' /*a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"*/>Home</Link>
                            
                            {/*<ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <Link to='/'>Home 1</Link>
                                </li>
                                <li>
                                    <Link to='/'>Home 2</Link>
                                </li>
                                <li>
                                    <Link to='/'>Home 3</Link>
                                </li>
                            </ul>*/}
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/notes'>My Notes</Link>
                        </li>
                        <li>
                            <Link to='/news'>News Portal</Link>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
    )
}

export default Sidebar;