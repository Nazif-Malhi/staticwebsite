import React from 'react';
import image1 from '../Images/img1.jpg';
import image2 from '../Images/img2.jpg';
import image3 from '../Images/img3.jpg';


const Testimonial = () => {
  return ( <>
    <section className="testimonials">
            <div className="container">
              <div className="testimonial grid-3">
                <div className="card">
                  <div className="circle">
                    <img src={image1} alt='1'/>
                  </div>
                  <h3>Aston</h3>
                  <p>I have learnt web development using this platfrom and I am going to say this is the best platform for learning. Absolutely
                  worth the investment!</p>
                </div>
                <div className="card">
                  <div className="circle">
                  <img src={image2} alt='1'/>
                  </div>
                  <h3>Beth</h3>
                  <p>I have learnt copywriting using this platfrom and I am going to say this is the best platform for learning. Absolutely
                  worth the investment!</p>
                </div>
                <div className="card">
                  <div className="circle">
                  <img src={image3} alt='1'/>
                  </div>
                  <h3>Chris</h3>
                  <p>I have learnt affilitate marketing using this platfrom and I am going to say this is the best platform for learning. Absolutely
                  worth the investment!</p>
                </div>
              </div>
            </div>
          </section>
          </>
          )
}

export default Testimonial