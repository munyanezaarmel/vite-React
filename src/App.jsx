import './App.css'
import { FaLinkedin, FaInbox,FaFacebook, FaInstagram,FaGithub,FaTwitter } from 'react-icons/fa';
import photo from './photo.png';
function App(){
  return (
    <body>
         <div className="container-1">
         <div className="wrapper">
         <img src={photo} alt="profileimage" />
         <h2 className='title'>Laura Smith</h2>
      <p className='front'>Frontend Developer</p>
      <small className='small'>laurasmith.website</small>
      <div className="flex">
      <div className="email"><span><FaInbox className='icon-email' /></span><span><a href='www.google.com' className='a-email'>Email</a></span></div>   
   <div className='link' ><span><FaLinkedin  className='icon-link'/></span><span><a href='www.linkdlin.com' className='a-link'>Linkediln</a></span></div>
         </div>
         <h1 className='about-title'>About</h1>
        <p className='paragraph-about'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h1 className='interest-title'>interest</h1>
<p  className='paragraph-interest'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
<div className='footer'>
<FaTwitter  className='twitter'/>
<FaFacebook className='facebook' />
<FaInstagram className='instagram'/>
<FaGithub className='github' />
</div>
         </div>
         </div>
    </body>
  )
}
export default App