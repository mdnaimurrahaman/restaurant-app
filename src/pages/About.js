import React from 'react';
import burger from '../assets/images/Burger-1.png'
import Burgers from '../assets/images/About me burger.jpg'
import { BsArrowRight } from 'react-icons/bs';
import '../styles/About.css'

const About = () => {
    return (
        <div className='about__container'>
            <div className='about__wrapper'>
                <div className='first__content'>
                    <div>
                        <h1>We make the <br/> best burgers <br/> in town.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Qui, modi! Odit sapiente rerum quas nobis, cum <br/> a placeat tenetur quam.</p>
                        <button className='primary__button'>READ MORE</button>
                    </div>
                    <div>
                        <img src={burger} alt="" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='food__img'>
                        <img src={Burgers} alt="" />
                    </div>
                    <div className='about__bg'>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, saepe quia! Odio quam, quibusdam officia aliquam illum voluptates perspiciatis nostrum ab exercitationem est obcaecati eum, tenetur possimus ipsum consequuntur voluptatum delectus sint eaque inventore quaerat facere quia animi labore? Ea beatae provident praesentium temporibus accusantium, cupiditate ullam quibusdam mollitia porro?</p>
                        <span className='read__btn'><small><a href="">READ OUR STORY</a></small><BsArrowRight/></span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;