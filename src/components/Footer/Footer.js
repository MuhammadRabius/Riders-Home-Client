import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
      return (
            <div>
      <footer class="footer p-10 bg-neutral text-neutral-content">
      <div >
            <span class="footer-title">Services</span> 
            <Link to={'/'} class="link hover:text-white link-hover">Branding</Link>
            <Link to={'/'} class="link hover:text-white link-hover">Design</Link>
            <Link to={'/'} class="link hover:text-white link-hover">Marketing</Link>
            <Link to={'/'} class="link hover:text-white link-hover">Advertisement</Link>
            </div> 
            <div>
            <span class="footer-title">Company</span> 
            <Link to={'/'} class="link hover:text-white link-hover">About us</Link>
            <Link to={'/'} class="link hover:text-white link-hover">Contact</Link>
            <Link to={'/'} class="link hover:text-white link-hover">Jobs</Link>
            <Link to={'/'} class="link hover:text-white link-hover">Press kit</Link>
            </div> 
            <div>
            <span class="footer-title">Legal</span> 
            <Link to={'/'} class="link hover:text-white link-hover">Terms of use</Link>
            <Link to={'/'} class="link hover:text-white link-hover">Privacy policy</Link>
            <Link to={'/'} class="link hover:text-white link-hover">Cookie policy</Link>
       </div>
            </footer>
            </div>
      );
};

export default Footer;