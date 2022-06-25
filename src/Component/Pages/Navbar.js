import React from 'react';
import styled from 'styled-components'


const Link = styled.li`

`;

const Navbar = () => {
  return (
    <section className="Navbar">
        <div className="navbar">
            <div className="container flex">
              <h1 className="logo">My Personal Blog</h1>
                <nav>
                  <ul>
                    <li className="nav"><a className="outline">Log in</a></li>
                    <li className="nav"><a className="outline">Check courses</a></li>
                  </ul>
                </nav>
            </div>
          </div>
    </section>
  )
}

export default Navbar