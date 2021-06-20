import React from 'react';
import {NavBar} from './styled';

export default function Nav() {
  return (

    <NavBar>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="www.youtube.com">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="www.youtube.com">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="www.youtube.com">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="www.youtube.com" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>


    </NavBar>
    
  );
}