import React from 'react';
import {ImTwitter} from 'react-icons/im';
import {AiFillInstagram , AiFillFacebook, AiOutlineWhatsApp} from 'react-icons/ai'

const styleIcon = {
    fontSize:"2rem",
    marginRight:'5px',
    marginTop:'40px'
}
const Footer = () => {
  return (
    <footer>
            <div className="container grid-3">
              <div className="copyright">
                <h1>Nazif Malhi</h1>
                <p>Copyright &copy; 2021</p>
              </div>
              <nav className="links">
                <ul>
                  <li><a className="outline">Home</a></li>
                  <li><a className="outline">Tutors</a></li>
                  <li><a className="outline">Categories</a></li>
                </ul>
              </nav>
              <div className="profiles">
                <ImTwitter style={styleIcon}/>
                <AiFillFacebook style={styleIcon}/>
                <AiOutlineWhatsApp style={styleIcon}/>
                <AiFillInstagram style={styleIcon}/>
              </div>
            </div>
          </footer>
  )
}

export default Footer