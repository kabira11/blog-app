import React from 'react'
import { Link , NavLink } from 'react-router-dom'

const Footer = () => {
    return (
<footer class="page-footer">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                <ul>
                    <li><Link  to="/" class="white-text">Home</Link></li>
                    <li><NavLink  to="/About" class="white-text">About</NavLink></li>
                    <li><NavLink  to="/Contact" class="white-text">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
        
            @ 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="/ss">More Links</a>
        </div>
    </div>
</footer>
    )
}

export default Footer;





