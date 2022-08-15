import React from "react";
import logo from '../../assets/images/Mc Logo.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import '../../styles/Footer.css'

const Footer = () => {
  return (
    <footer class="footer p-10 bg-base-200 text-base-content justify-items-center">
      <div>
        <div className="logo">
          <img src={logo} alt="" srcset="" />
          <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing <br></br>  elit. Asperiores cum aspernatur magni?</p>
          <hr />
          <p className="mt-4">&copy; 2022 - All right reserved by Md Naimur Rahaman</p>
        </div>
      </div>
      <div className="footer__menu">
        <span class="footer__title">Follow Us</span>
        <span className="flex list-none items-center gap-1">
            <li><FaFacebookSquare/></li>
            <a class="link link-hover">Facebook</a>
        </span>
        <span className="flex list-none items-center gap-1">
            <li><ImInstagram/></li>
            <a class="link link-hover">Instagram</a>
        </span>
        <span className="flex list-none items-center gap-1">
            <li><FaLinkedin/></li>
            <a class="link link-hover">Linkedin</a>
        </span>
        <span className="flex list-none items-center gap-1">
            <li><FaTwitterSquare/></li>
            <a class="link link-hover">Twitter</a>
        </span>
      </div>
      <div className="footer__menu">
        <span class="footer__title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div className="footer__menu">
        <span class="footer__title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div className="footer__menu">
        <span class="footer__title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
