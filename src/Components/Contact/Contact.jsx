import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/next-icon.png'

const Contact = () => {

// web3forms

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c60308ea-8f69-40ef-a2b1-f514b8e03267");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  //end of web3 forms

  return (
    <div className='container'>
      <div className='contact'>
        <div className='col'>
            <h3>Send Us A Message  <img src={msg_icon}></img></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus optio quam sunt ipsam rem itaque 
                facere. Quo, molestiae?
                 Deleniti officia error ad mollitia reiciendis laborum veritatis! Magnam repellendus nesciunt debitis.</p>
<ul>
    <li>  <img src={mail_icon} alt=''/>  Contact@abcd.dev </li> 
    <li> <img src={phone_icon} /> +91 1122334455  </li>
    <li> <img src={loc_icon}/> 45 kumbalagodu ,bangalore <br></br> karnataka .India </li>
</ul>
        </div>

<div className='coll'>
  <form onSubmit={onSubmit}>
    <label>your name</label>
    <input name='name' type='text' placeholder='enter your name' required ></input>
    <label>Phone Number</label>
    <input type='tel' placeholder='enter phone Number'name='phone' required></input>
    <label> Write Your Message Here</label>
   <textarea placeholder='Enter Your message' type='text' rows='6' name='message' required></textarea>
   <button className='btn dark-btn button'>Submit now
    <img src={white_arrow}></img>
   </button>

  </form>
    {/* //result is from web3 forms */}
    <span>{result}</span>

</div>
      </div>
    </div>
  )
}

export default Contact
