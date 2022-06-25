import React , {useState} from 'react';
import Button from '../Button';
import splashScreen from '../Images/Splash_Image.jpg';

const ShowCase = () => {
  const [email , setEmail] = useState('');
  function handleChange(event){
    setEmail(event.target.value);
  }
  function handleSubmit(){
    if(emailValidation()){
    alert('Email was send to this address: '+ email);
    setEmail('');
    }
    else{
        alert('Invalid Email Try Again')
      }
  }
  const emailValidation =()=>{
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regex.test(email)) {
      return true;
      } 
      else {
          return false;
      }
  }
  return (
    <>
     <section className="showcase">
        <div className="container">
            <div className="grid">
                <div className="grid-item-1">
                <div className="showcase-text">
                  <h1>Learn any digital skill of your choice today</h1>
                  <p className="supporting-text"> Over 30,000 students currently learn with us</p>
                </div>
                <div className="showcase-form">
                <input type="email" placeholder="Enter your email address" onChange={handleChange} value={email}/>
                    <Button value = {'Start Learning'} handleClick={handleSubmit}/>
                  <p className="little-info">Try out our free courses today. No risk, no credit card required</p>
                </div>
                </div>

                <div className="grid-item-2">
                <div className="image" >
                  <img src= {splashScreen} alt="" style={{borderRadius:'10px'}}/>
                </div>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default ShowCase