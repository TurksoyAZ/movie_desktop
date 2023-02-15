import React from 'react'
import './Footer.scss'

import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';


function Footer() {
  return (
    <section className='footerContainer'>

      <article style={{paddingTop: '25px'}}>
        <h2>The Movies of the World</h2>
      </article>

      <article>
        <h3>Help</h3>
        <p>Help Center</p>
        <p>Support</p>
        <p>Author refunds</p>
        <p>Customer refunds</p>
      </article>

      <article>
        <h3>Join or Community</h3>
        <p>Community</p>
        <p>Blog</p>
        <p>Forums</p>
        <p>Meetups</p>
      </article>

      <article>
        <h3>Social</h3>
        <div className='iconsDivFooter'>
          <AiOutlineInstagram/>
          <AiOutlineTwitter/>
          <AiFillFacebook/>
          <BsWhatsapp/>
        
        </div>

      </article>


    </section>
  )
}

export default Footer