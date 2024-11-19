import React, { useState } from 'react'
import logo from '../assets_frontend/logo.svg'
import '../style/mainPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

// header Img

import GorupImage from '../assets_frontend/group_profiles.png'
import HeaderImg from '../assets_frontend/header_img.png'


// banner  

import Banner from '../assets_frontend/appointment_img.png'

// doctorsSkill

import skill1 from '../assets_frontend/General_physician.svg'
import skill2 from '../assets_frontend/Gynecologist.svg'
import skill3 from '../assets_frontend/Dermatologist.svg'
import skill4 from '../assets_frontend/Pediatricians.svg'
import skill5 from '../assets_frontend/Neurologist.svg'
import skill6 from '../assets_frontend/Gastroenterologist.svg'


// doctors images

import doctors1 from '../assets_frontend/doc1.png'
import doctors2 from '../assets_frontend/doc2.png'
import doctors3 from '../assets_frontend/doc3.png'
import doctors4 from '../assets_frontend/doc4.png'
import doctors5 from '../assets_frontend/doc5.png'
import doctors6 from '../assets_frontend/doc6.png'
import doctors7 from '../assets_frontend/doc7.png'
import doctors8 from '../assets_frontend/doc8.png'
import doctors9 from '../assets_frontend/doc9.png'
import doctors10 from '../assets_frontend/doc10.png'

// service Image

import serviceImg1 from '../Service/DoctorsTeam/1.png'
import serviceImg2 from '../Service/DoctorsTeam/2.png'
import serviceImg3 from '../Service/DoctorsTeam/3.png'
import serviceImg4 from '../Service/DoctorsTeam/4.png'
import serviceImg5 from '../Service/DoctorsTeam/5.png'
import serviceImg6 from '../Service/DoctorsTeam/6.png'
import serviceImg7 from '../Service/DoctorsTeam/7.png'
import serviceImg8 from '../Service/DoctorsTeam/8.png'
import serviceImg9 from '../Service/DoctorsTeam/9.png'


// useGSAP(()=>{

// })



let CatogaryObj = [
    {
        img: skill1,
        title: 'General_physician',
    },
    {
        img: skill2,
        title: 'Gynecologist',
    },
    {
        img: skill3,
        title: 'Dermatologist',
    },
    {
        img: skill4,
        title: 'Pediatricians',
    },
    {
        img: skill5,
        title: 'Neurologist',
    },
    {
        img: skill6,
        title: 'Gastroenterologist',
    },
]

let doctorsDetails = [
    {
        DrImg: doctors1,
        Icon: faCircle,
        DrName: 'Dr. Richard james',
        DrCatogary: 'General Physician',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors2,
        Icon: faCircle,
        DrName: 'Dr Emily Larson ',
        DrCatogary: 'General Physician',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors3,
        Icon: faCircle,
        DrName: 'Dr. Richard james',
        DrCatogary: 'Gynecologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors4,
        Icon: faCircle,
        DrName: 'Dr. Sarah Patel ',
        DrCatogary: 'Dermatologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors5,
        Icon: faCircle,
        DrName: 'Dr. Christopher Lee',
        DrCatogary: 'Pediatricians',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors6,
        Icon: faCircle,
        DrName: 'Dr. Jannifer Garcia',
        DrCatogary: 'Neurologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors7,
        Icon: faCircle,
        DrName: 'Dr. Andrew Williams',
        DrCatogary: 'Gynecologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors8,
        Icon: faCircle,
        DrName: 'Dr. Charistopher Davis',
        DrCatogary: 'General Physician',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors9,
        Icon: faCircle,
        DrName: 'Dr. Timothy White',
        DrCatogary: 'Gynecologist',
        DrAvailable: 'Available'
    },
    {
        DrImg: doctors10,
        Icon: faCircle,
        DrName: 'Dr. Ava Mitchel',
        DrCatogary: 'Dermatologist',
        DrAvailable: 'Available'
    },
    // {
    //     DrImg: doctors10,
    //     Icon: faCircle,
    //     DrName: 'Dr. Jeffrey King',
    //     DrCatogary: 'Pediatricians',
    //     DrAvailable: 'Available'
    // },
]

let DoctorList = ['Show All', 'Denthal', 'GastroEntorology', 'Surgeries', 'Cardiology', 'Patology']

let filterDoctorCategoary = [
    { title: 'Denthal', img: serviceImg1, },
    { title: 'GastroEntorology', img: serviceImg2, },
    { title: 'Surgeries', img: serviceImg3, },
    { title: 'Cardiology', img: serviceImg4, },
    { title: 'Surgeries', img: serviceImg5, },
    { title: 'GastroEntorology', img: serviceImg6, },
    { title: 'Patology', img: serviceImg7, },
    { title: 'Surgeries', img: serviceImg8, },
    { title: 'Cardiology', img: serviceImg9, },
]

function MainPage() {
    const [image, setImages] = useState('Show All');

    const DoctorCatogaryFilter = image === 'Show All' ? filterDoctorCategoary
        : filterDoctorCategoary.filter((img) => img.title === image);

    const handleCategory = (doctor, e) => {
        e.preventDefault();
        setImages(doctor);
    };

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
                <div className="landingPage">
                    <div className="Content">
                        <div className="groups">
                            <div className="title">
                                <h1>Book Appointment With Trusted Doctors..</h1>
                            </div>
                            <div className="groupProfile">
                                <img src={GorupImage} alt="" />
                                <p>Simply browser throught our extensive list of trusted Doctors schedule your Appointment hassle-free...</p>
                            </div>
                            <div className="book">
                                <button>Book Appoitnment
                                    <FontAwesomeIcon id='arrow' icon={faArrowRight} />
                                </button>
                            </div>
                        </div>
                        <div className="img">
                            <img src={HeaderImg} alt="" />
                        </div>

                    </div>
                </div>
            </header >
            <section id='section'>
                <div className="skils">
                    <div className="doctorsSkills">
                        <h1>Find By Specility </h1>
                        <p>Simply browser throught our extensive list of trusted Doctors schedule your Appointment hassle-free....</p>
                    </div>
                </div>
                <div className="catogary">
                    {
                        CatogaryObj.map((card, idx) => {
                            return (
                                <div className="diffrent-Catogary" key={idx}>
                                    <img src={card.img} alt="" />
                                    <span>{card.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="doctor-title">
                    <h1>Top Doctors To Book</h1>
                    <p>Simply Browser Throught Our Extensive list Off Trusted Doctors</p>
                </div>
                <div className="doctors">
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
                <div className="Banner">
                    <div className="Banner-Content">
                        <div className="contentForBanner">
                            <h1>Book Appointment With 100+ Trusted Doctors</h1>
                            <button>Explore</button>
                        </div>
                        <div className="contentForBanner">
                            <img src={Banner} alt="" />
                        </div>
                    </div>
                </div>
                <div className="OurGallary">
                    <h1>Our Gallary's</h1>
                    <div className="ServiceCatagoray">
                        {DoctorList.map((item, idx) => (
                            <li key={idx}>
                                <a href="#" onClick={(e) => handleCategory(item, e)}>{item}</a>
                            </li>
                        ))
                        }
                    </div>
                </div>
                <div className="GallaryImg">
                    {
                        DoctorCatogaryFilter.map((item, idx) => {
                            return (
                                <div className="serviceImage" key={idx}>
                                    <img src={item.img} alt="" />
                                </div>
                            )
                        })
                    }
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

export default MainPage
