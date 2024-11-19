import React from 'react'
import '../style/AboutPage.scss'
import logo from '../assets_frontend/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Form, Link } from 'react-router-dom';




// doctors team

import Dr1 from '../assets_frontend/doc1.png'
import Dr2 from '../assets_frontend/doc2.png'
import Dr3 from '../assets_frontend/doc3.png'
import Dr4 from '../assets_frontend/doc4.png'
import Dr5 from '../assets_frontend/doc5.png'
import Dr6 from '../assets_frontend/doc6.png'
import Dr7 from '../assets_frontend/doc7.png'
import Dr8 from '../assets_frontend/doc8.png'

import AboutImage from '../AboutImagge/doctor.png'

// partners    

import Partners1 from '../AboutImagge/partner3.png'
import Partners2 from '../AboutImagge/partner4.png'
import Partners3 from '../AboutImagge/partners.png'
import Partners4 from '../AboutImagge/partners2.png'

let doctorsDetails = [
    {
        DrImg: Dr1,
        Icon: faCircle,
        DrName: 'Dr. Richard james',
        DrCatogary: 'General Physician',
        DrAvailable: 'Available'
    },
    {
        DrImg: Dr2,
        Icon: faCircle,
        DrName: 'Dr Emily Larson ',
        DrCatogary: 'General Physician',
        DrAvailable: 'Available'
    },
    {
        DrImg: Dr3,
        Icon: faCircle,
        DrName: 'Dr. Richard james',
        DrCatogary: 'Gynecologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: Dr4,
        Icon: faCircle,
        DrName: 'Dr. Sarah Patel ',
        DrCatogary: 'Dermatologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: Dr5,
        Icon: faCircle,
        DrName: 'Dr. Christopher Lee',
        DrCatogary: 'Pediatricians',
        DrAvailable: 'Available'
    },
    {
        DrImg: Dr6,
        Icon: faCircle,
        DrName: 'Dr. Jannifer Garcia',
        DrCatogary: 'Neurologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: Dr7,
        Icon: faCircle,
        DrName: 'Dr. Andrew Williams',
        DrCatogary: 'Gynecologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: Dr8,
        Icon: faCircle,
        DrName: 'Dr. Charistopher Davis',
        DrCatogary: 'General Physician',
        DrAvailable: 'Available'
    },
]

function AboutPage() {
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
                                <Link to='/About'> About</Link>
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
                <div className="AboutPage">
                    <div className="AboutContent">
                        <h1>The Lifesavers: How Doctors Transform Lives Every Day.....</h1>
                    </div>
                </div>
            </header>
            <section>
                <div className="SomeContent">
                    <div className="AboutText">
                        <h1>We look forward to exceeding your expectations...</h1>
                        <p>Welcome to our Hospital. Whether you are a patient or a visitor at our hospital, you can expect that over 80 dedicated employees, physicians and volunteers will be working tirelessly to ensure that you receive excellent care in a safe and comfortable environment.</p>
                        <p>As a leading healthcare provider in US, Our Hospital provides quality, compassionate and cost-effective services that continually meet and exceed our patient needs. I hope you will consider the many quality healthcare services available to you at our hospital and off-site facilities and providers. We offer high quality health care, the most advanced technologies and skilled physicians and nurses who are passionate about what they do.</p>
                    </div>
                    <div className="AboutTextImage">
                        <img src={AboutImage} alt="" />
                    </div>
                </div>
                <div className="doctorsTeam">
                    {
                        doctorsDetails.map((card, idx) => {
                            return (
                                <div className="doctorsAbout" key={idx}>
                                    <div className="top-doctors">
                                        <div className="doctorsDetails">
                                            <img src={card.DrImg} alt="" />
                                            <div className="details">
                                                <li> <FontAwesomeIcon id='curcle' icon={card.Icon} />
                                                    {card.DrAvailable}</li>
                                                <h1>{card.DrName}</h1>
                                                <h5>{card.DrCatogary} </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="partnerss">
                    <div className="teamCompnays">
                        <img src={Partners1} alt="" />
                        <img src={Partners2} alt="" />
                        <img src={Partners3} alt="" />
                        <img src={Partners4} alt="" />
                    </div>
                    <div className="teamCompnays">
                        <img src={Partners1} alt="" />
                        <img src={Partners2} alt="" />
                        <img src={Partners3} alt="" />
                        <img src={Partners4} alt="" />
                    </div>
                </div>
            </section>
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

export default AboutPage
