import React from 'react'
import {AiFillFolderOpen, AiFillCreditCard} from 'react-icons/ai';
import {FcGraduationCap} from 'react-icons/fc';

const styleOfIcon = {
    fontSize:'4rem',
    color:'#0096FF',
}
const Description = () => {
  return (
    <div className="lower-container container">
        <section className="stats">
          <div className="flex">
            <div className="stat">
                <AiFillFolderOpen style={styleOfIcon}/>
              <h3 className="title">Over 300 available courses</h3>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="stat">
                <FcGraduationCap style={styleOfIcon}/>
              <h3 className="title">Free certificate offered on all courses</h3>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="stat" style={{marginTop:'67px'}}>
              <h3 className="title">Book 1 on 1 session for as low as RS 500</h3>
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>
        </div>
  )
}

export default Description