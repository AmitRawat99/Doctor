import React from 'react'
import logo from '../assets_frontend/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import appoinmnet from '../style/Appoinment.js'

import '../style/Contact.scss'
import GorupImage from '../assets_frontend/group_profiles.png'
import HeaderImg from '../assets_frontend/header_img.png'


import socialIcon1 from '../social icon/facebook.png'
import socialIcon2 from '../social icon/twitter.png'
import socialIcon3 from '../social icon/whatsap.png'
import socialIcon4 from '../social icon/facebook.png'

let socialIcon = [socialIcon1, socialIcon2, socialIcon3, socialIcon4]

function Contact() {
    return (
        <>
            <header className='Header'>
                <div className="headerSection">
                    <div className="HeaderLogo">
                        <img src={logo} alt="" />
                    </div>
                    <input type="checkbox" id='checkbox' />
                    <label htmlFor="checkbox">
                        <FontAwesomeIcon id='checkBtn' icon={faBars} />
                    </label>
                    <div className="ulList">
                        <ul>
                            <li>
                                < Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/About'>About</Link>
                            </li>
                            <li>
                                <Link to='/Service'>Service</Link>
                            </li>
                            <li>
                                <Link to='/Blogs'>Blogs</Link>
                            </li>
                            <li>
                                <Link to='/Contact'>Contact</Link>
                            </li>
                        </ul>
                        <div className="createAcount">
                            <Link to='/Appoinments'><button>Appoinments ' s</button></Link>
                        </div>
                    </div>
                </div>
            </header >
            <section>
                <div className="forms">
                    <div className="froms-content">
                        <div className="hostpitals-contct-form">
                            <h1>Contact Information</h1>
                            <div className="contact-information">
                                <h4>Office Address:</h4>
                                <p>Suite 02, Level 12, Sahera Tropical Center 218 New Elephant Road, Dhaka - 1205</p>
                            </div>
                            <div className="contact-information">
                                <h4>Phone Number:</h4>
                                <p>+8801678170593, 01919-264687</p>
                                <p>02-9611936</p>
                            </div>
                            <div className="contact-information">
                                <h4>Email Address:</h4>
                                <p>Prescripto7899@gmail.com</p>
                            </div>
                            <div className="contact-information">
                                <h4>Website Address:</h4>
                                <p>http://LabArtisan</p>
                            </div>
                        </div>
                        <div className="inputssection">
                            <h1>Fill The Form For Appoinment's Doctors </h1>
                            <div className="contact-information">
                                <div className="inputs">
                                    <input  className='inputsValue' type="text" placeholder='Your Name' />
                                    <select className='inputsValue' name="" id="select" >
                                        <option value="Select Department">Select Department</option>
                                        <option value="Select Department">Dental</option>
                                        <option value="Select Department">U.C</option>
                                    </select>
                                    <input id='numberInput' type="number" placeholder='Phone Number'className='inputsValue' />
                                    <input type="date" className='inputsValue'/>
                                    <div className="button">
                                        <button id='btn' onClick={appoinmnet.from}>Submit</button>
                                    </div>
                                    <div className="icons">
                                        {
                                            socialIcon.map((img, idx) => {
                                                return (
                                                    <img key={idx} src={img} alt="" />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <div className="loaction">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86282.9875544003!2d76.96269250689966!3d28.57343597430489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a9c31eec4e1%3A0x39493976cba4c89a!2sDwarka%2C%20Delhi!5e1!3m2!1sen!2sin!4v1731833944153!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{border:0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            <footer>
                <div className="footer">
                    <div className="footerDetials">
                        <div className="footer-content">
                            <img src={logo} alt="" />
                            <p id='peragraph'>Doctors play a crucial role in society by providing medical care, diagnosing illnesses, treating patients, and promoting overall health and well-being. Their work involves a deep understanding of the human body, medical science, and patient care techniques.At the core of a doctor's job is the ability to assess symptoms, order tests, make diagnoses, and develop treatment plans. This requires both medical knowledge and critical thinking skills, as doctors...</p>
                        </div>
                    </div>
                    <div className="footerDetials">
                        <div className="footer-content" id='compnay'>
                            <h1>Quick Links</h1>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Wokrs</li>
                            <li>Doctors Team</li>
                            <li>Blogs</li>
                            <li>Contact</li>
                        </div>
                    </div>
                    <div className="footerDetials">
                        <div className="footer-content">
                            <h1>Health Solution</h1>
                            <li>Alzheimer's Disease</li>
                            <li>Diabetes Help Center</li>
                            <li>Learn About Triglycerides</li>
                            <li>Vaccine Questions?</li>
                            <li>ED Tablet</li>
                            <li>Rheumatoid Arthritis?</li>
                        </div>
                    </div>
                    <div className="footerDetials">
                        <div className="footer-content">
                            <h1>Contact...</h1>
                            <p>amitrawat789599@gmail.com</p>
                            <p>91+7895998305</p>
                            <p>No: 58 A, East Madison St Baltimore, MD, USA</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Contact