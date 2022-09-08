import React from 'react';
import '../styles/Ingredient.css'

const Ingredient = () => {
    return (
        <div className='ingredient__container'>
            <div className='ingredient__wrapper'>
            <div className='card__2'></div>
                <div className='title__card'>
                    <span>Baked with natural</span>
                    <br/>
                    <span>ingredient</span>
                </div>
                <div className='ingredient__content'>
                    <div className='ingredient__details'>
                        <span className='ingredient__num'>1</span>
                        <span className='ing__1'>Fresh</span>
                        <span className='ing__2'>Bread</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat deleniti dolor porro, magnam facilis?</p>
                    </div>
                    <div className='ingredient__details'>
                        <span className='ingredient__num'>2</span>
                        <span className='ing__1'>Glow</span>
                        <span className='ing__2'>Cheese</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat deleniti dolor porro, magnam facilis?</p>
                    </div>
                    <div className='ingredient__details'>
                        <span className='ingredient__num'>3</span>
                        <span className='ing__1'>Lettuce</span>
                        <span className='ing__2'>Leaf</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat deleniti dolor porro, magnam facilis?</p>
                    </div>
                    <div className='ingredient__details'>
                        <span className='ingredient__num'>4</span>
                        <span className='ing__1'>Sleek</span>
                        <span className='ing__2'>Onion</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat deleniti dolor porro, magnam facilis?</p>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Ingredient;