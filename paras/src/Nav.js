
import React from 'react'
import './Nav.css';
import PropTypes from 'prop-types'
 function Nav(probs)
{

      return (
            <div className="container">
                  <div> {probs.image}</div>
                  <div className='div1'>{probs.title}</div>
                        
                  <div className='div1'>{probs.about}</div>
                <div> <button type='submit' value="Enable dark Mode" className='btn'> Enable Dark Mode</button></div> 
            
                  
                        
                  
                  
                 
                 
            </div>
      )
      }
      export default Nav;


//    Nav.prototype={
//       title:PropTypes.string.isRequired,
//       about:PropTypes.string.isRequired
//    }
  

      