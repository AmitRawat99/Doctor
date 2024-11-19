import React from 'react'
import logo from '../assets_frontend/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle, faBars, faGraduationCap, faUser, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../style/Appoinmnet.scss'



import Alert from '../style/Appoinment.js'


function Appoinments() {
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
                            <Link to='/Appoinments'><button onClick={Alert}>Appoinments ' s</button></Link>
                        </div>
                    </div>
                </div>

            </header >
            <section>
                <div className="appinments-info">

                    {/* <div className="add-to-card">
                        <div className="doctors-info">
                            <div className="doctor-image">
                                <img id='appoinmentProfile' src={service1} alt="" />
                            </div>
                        </div>
                        <div className="doctors-info">
                            <div className="doctor-image">
                                <h1>Dr Priya Choudary</h1>
                                <p>Working as a doctor is both challenging and rewarding, requiring empathy, skill,
                                    and dedication. Doctors diagnose, treat, and support patients, often working long
                                    hours under pressure. Despite the emotional and physical demands, the ability to make
                                    a difference in patients' lives offers deep fulfillment... A expriance 4 year In Sunrise Health Hospital .</p>
                            </div>
                            <div className="expriance">
                                <FontAwesomeIcon icon={faUser} />
                                <h5>6 Years Expriance With Hight Level Knowladage</h5>
                            </div>
                            <div className="expriance">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <h5> MBBS Degree</h5>
                            </div>
                            <div className="expriance">
                                <FontAwesomeIcon icon={faLanguage} />
                                <h5> Hindi , English</h5>
                            </div>
                        </div>
                    </div> */}

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

export default Appoinments
