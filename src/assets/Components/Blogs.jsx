import React, { useState , useEffect } from 'react'
import logo from '../assets_frontend/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../style/Blogs.scss'


import Blogs1 from '../Blogs/1.png'
import Blogs2 from '../Blogs/2.png'
import Blogs3 from '../Blogs/3.png'
import Blogs4 from '../Blogs/4.png'
import Blogs5 from '../Blogs/5.png'
import Blogs6 from '../Blogs/6.png'
import Blogs7 from '../Blogs/7.png'
import Blogs8 from '../Blogs/8.png'
import Blogs9 from '../Blogs/9.png'
import Blogs10 from '../Blogs/10.png'
import Blogs11 from '../Blogs/11.png'
import Blogs12 from '../Blogs/12.png'
import Blogs13 from '../Blogs/13.png'
import Blogs14 from '../Blogs/14.png'
import Blogs15 from '../Blogs/15.png'
import Blogs16 from '../Blogs/16.png'
import Blogs17 from '../Blogs/17.png'
import Blogs18 from '../Blogs/18.png'
import Blogs19 from '../Blogs/19.png'
import Blogs20 from '../Blogs/20.png'
import Blogs21 from '../Blogs/21.png'
import Blogs22 from '../Blogs/22.png'
import Blogs23 from '../Blogs/23.png'
import Blogs24 from '../Blogs/24.png'
import Blogs25 from '../Blogs/25.png'
import Blogs26 from '../Blogs/26.png'
import Blogs27 from '../Blogs/27.png'
import Blogs28 from '../Blogs/28.png'
import Blogs29 from '../Blogs/29.png'
import Blogs30 from '../Blogs/30.png'
import Blogs31 from '../Blogs/31.png'
import Blogs32 from '../Blogs/32.png'
import Blogs33 from '../Blogs/33.png'
import Blogs34 from '../Blogs/34.png'
import Blogs35 from '../Blogs/35.png'
import Blogs36 from '../Blogs/36.png'
import Blogs37 from '../Blogs/37.png'
import Blogs38 from '../Blogs/38.png'
import Blogs39 from '../Blogs/39.png'
import Blogs40 from '../Blogs/40.png'


let numberobj = [ 1, 2, 3]

let blogsData = {
    OneData: [
        {
            BlogsImg: Blogs1,
            catogary: 'Neurology',
            title: 'Traumatic Brain Injury',
            profile: Blogs1,
            profileName: 'Dr. Shivakumar S Kupanur',
        },
        {
            BlogsImg: Blogs2,
            catogary: 'Cosmetology',
            title: 'Skincare for Newborns: Baby soft skin needs nurturing too!',
            profile: Blogs1,
            profileName: 'Dr. Pratiksha Jain',
        },
        {
            BlogsImg: Blogs3,
            catogary: 'Cardiac Sciences',
            title: 'What Is the Difference Between Angioplasty and Angiography?',
            profile: Blogs1,
            profileName: 'Dr. Satish L',
        },
        {
            BlogsImg: Blogs4,
            catogary: 'Nephrology',
            title: 'Understanding Diabetic Kidney Disease: Stages, Symptoms, and Management',
            profile: Blogs1,
            profileName: 'Dr. Sunil R',
        },
        {
            BlogsImg: Blogs5,
            catogary: 'Oncology',
            title: 'What is Prostate Cancer: Symptoms, Causes & Types',
            profile: Blogs1,
            profileName: 'Dr. Prashanth Ganesh',
        },
        {
            BlogsImg: Blogs6,
            catogary: 'Gastroenterology',
            title: 'Abnormal Uterine Bleeding: Understanding Causes, Symptoms, and Treatment Options',
            profile: Blogs1,
            profileName: 'Dr. Padmalatha V V',
        },
        {
            BlogsImg: Blogs7,
            catogary: 'Bone Marrow Transplant',
            title: 'CAR T-Cell Therapy: What It Is & How It Works',
            profile: Blogs1,
            profileName: 'Dr. Mahesh Rajashekaraiah',
        },
        {
            BlogsImg: Blogs8,
            catogary: 'Bone Marrow Transplant',
            title: 'Neutrophils: Description, Count and Functions',
            profile: Blogs1,
            profileName: 'Dr. Anand Kumar K',
        },
        {
            BlogsImg: Blogs9,
            catogary: 'Cardiac Sciences',
            title: 'Understanding Vascular Surgery: What It Is and When Its Required',
            profile: Blogs1,
            profileName: 'Dr. Akshay Kumar Singh',
        },
        {
            BlogsImg: Blogs10,
            catogary: 'Cardiac Sciences',
            title: 'What Does a Cardiothoracic Surgeon Do? An Overview',
            profile: Blogs1,
            profileName: 'Dr. Akshay Kumar Singh',
        },
        {
            BlogsImg: Blogs11,
            catogary: 'Nephrology',
            title: 'Male Infertility: Causes, Symptoms, Tests & Treatment Options',
            profile: Blogs1,
            profileName: 'Dr. Mahesh Babu',
        },
        {
            BlogsImg: Blogs12,
            catogary: 'Neurology',
            title: 'Traumatic Brain Injury',
            profile: Blogs1,
            profileName: 'Dr. Shivakumar S Kupanur',
        },
    ],
    TwoData: [
        {
            BlogsImg: Blogs13,
            catogary: 'Neurology',
            title: 'Traumatic Brain Injury',
            profile: Blogs1,
            profileName: 'Dr. Shivakumar S Kupanur',
        },
        {
            BlogsImg: Blogs14,
            catogary: 'Cosmetology',
            title: 'Skincare for Newborns: Baby soft skin needs nurturing too!',
            profile: Blogs1,
            profileName: 'Dr. Pratiksha Jain',
        },
        {
            BlogsImg: Blogs15,
            catogary: 'Cardiac Sciences',
            title: 'What Is the Difference Between Angioplasty and Angiography?',
            profile: Blogs1,
            profileName: 'Dr. Satish L',
        },
        {
            BlogsImg: Blogs16,
            catogary: 'Nephrology',
            title: 'Understanding Diabetic Kidney Disease: Stages, Symptoms, and Management',
            profile: Blogs1,
            profileName: 'Dr. Sunil R',
        },
        {
            BlogsImg: Blogs17,
            catogary: 'Oncology',
            title: 'What is Prostate Cancer: Symptoms, Causes & Types',
            profile: Blogs1,
            profileName: 'Dr. Prashanth Ganesh',
        },
        {
            BlogsImg: Blogs18,
            catogary: 'Gastroenterology',
            title: 'Abnormal Uterine Bleeding: Understanding Causes, Symptoms, and Treatment Options',
            profile: Blogs1,
            profileName: 'Dr. Padmalatha V V',
        },
        {
            BlogsImg: Blogs19,
            catogary: 'Bone Marrow Transplant',
            title: 'CAR T-Cell Therapy: What It Is & How It Works',
            profile: Blogs1,
            profileName: 'Dr. Mahesh Rajashekaraiah',
        },
        {
            BlogsImg: Blogs20,
            catogary: 'Bone Marrow Transplant',
            title: 'Neutrophils: Description, Count and Functions',
            profile: Blogs1,
            profileName: 'Dr. Anand Kumar K',
        },
        {
            BlogsImg: Blogs21,
            catogary: 'Cardiac Sciences',
            title: 'Understanding Vascular Surgery: What It Is and When Its Required',
            profile: Blogs1,
            profileName: 'Dr. Akshay Kumar Singh',
        },
        {
            BlogsImg: Blogs22,
            catogary: 'Cardiac Sciences',
            title: 'What Does a Cardiothoracic Surgeon Do? An Overview',
            profile: Blogs1,
            profileName: 'Dr. Akshay Kumar Singh',
        },
        {
            BlogsImg: Blogs23,
            catogary: 'Nephrology',
            title: 'Male Infertility: Causes, Symptoms, Tests & Treatment Options',
            profile: Blogs1,
            profileName: 'Dr. Mahesh Babu',
        },
        {
            BlogsImg: Blogs24,
            catogary: 'Neurology',
            title: 'Traumatic Brain Injury',
            profile: Blogs1,
            profileName: 'Dr. Shivakumar S Kupanur',
        },
    ],
    ThirData: [
        {
            BlogsImg: Blogs25,
            catogary: 'Neurology',
            title: 'Traumatic Brain Injury',
            profile: Blogs1,
            profileName: 'Dr. Shivakumar S Kupanur',
        },
        {
            BlogsImg: Blogs26,
            catogary: 'Cosmetology',
            title: 'Skincare for Newborns: Baby soft skin needs nurturing too!',
            profile: Blogs1,
            profileName: 'Dr. Pratiksha Jain',
        },
        {
            BlogsImg: Blogs27,
            catogary: 'Cardiac Sciences',
            title: 'What Is the Difference Between Angioplasty and Angiography?',
            profile: Blogs1,
            profileName: 'Dr. Satish L',
        },
        {
            BlogsImg: Blogs28,
            catogary: 'Nephrology',
            title: 'Understanding Diabetic Kidney Disease: Stages, Symptoms, and Management',
            profile: Blogs1,
            profileName: 'Dr. Sunil R',
        },
        {
            BlogsImg: Blogs29,
            catogary: 'Oncology',
            title: 'What is Prostate Cancer: Symptoms, Causes & Types',
            profile: Blogs1,
            profileName: 'Dr. Prashanth Ganesh',
        },
        {
            BlogsImg: Blogs30,
            catogary: 'Gastroenterology',
            title: 'Abnormal Uterine Bleeding: Understanding Causes, Symptoms, and Treatment Options',
            profile: Blogs1,
            profileName: 'Dr. Padmalatha V V',
        },
        {
            BlogsImg: Blogs31,
            catogary: 'Bone Marrow Transplant',
            title: 'CAR T-Cell Therapy: What It Is & How It Works',
            profile: Blogs1,
            profileName: 'Dr. Mahesh Rajashekaraiah',
        },
        {
            BlogsImg: Blogs32,
            catogary: 'Bone Marrow Transplant',
            title: 'Neutrophils: Description, Count and Functions',
            profile: Blogs1,
            profileName: 'Dr. Anand Kumar K',
        },
        {
            BlogsImg: Blogs33,
            catogary: 'Cardiac Sciences',
            title: 'Understanding Vascular Surgery: What It Is and When Its Required',
            profile: Blogs1,
            profileName: 'Dr. Akshay Kumar Singh',
        },
        {
            BlogsImg: Blogs34,
            catogary: 'Cardiac Sciences',
            title: 'What Does a Cardiothoracic Surgeon Do? An Overview',
            profile: Blogs1,
            profileName: 'Dr. Akshay Kumar Singh',
        },
        {
            BlogsImg: Blogs35,
            catogary: 'Nephrology',
            title: 'Male Infertility: Causes, Symptoms, Tests & Treatment Options',
            profile: Blogs1,
            profileName: 'Dr. Mahesh Babu',
        },
        {
            BlogsImg: Blogs36,
            catogary: 'Neurology',
            title: 'Traumatic Brain Injury',
            profile: Blogs1,
            profileName: 'Dr. Shivakumar S Kupanur',
        },
    ],
}


function Blogs() {

    const [ShowData , setShowData] = useState('OneData')
    

    const [inputValue, setInputvalue] = useState('')
    const [search, setSearch] = useState([])

    function SearchCards(e) {
        const inputValue = e.target.value;
        setInputvalue(inputValue)
    }

    useEffect(() => {
        if (blogsData[ShowData]) {
            setSearch(blogsData[ShowData]);
        }
    }, [ShowData]);



    function ShowSearchData() {
        const filterCards = blogsData['OneData'].filter((card) =>
            card.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setSearch(filterCards);
    }

    const [numberData , setNumberData] = useState('blogsData')

    function ChageNumberData(change , e){

    }


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
                <div className="blogsPage">
                    <div className="Blogs-Content">
                        <h1>Understanding Your Health: Tips from a Doctor..</h1>
                    </div>
                </div>
                <div className="searchBoxs">
                    <div className="searchInput">
                        <FontAwesomeIcon icon={faSearch} />
                        <input type="text" placeholder='Search Here' onChange={(e) => SearchCards(e)} />
                        <div className="searchBtn">
                            <button onClick={ShowSearchData}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="blogsCatogar">
                    {search.map((card, idx) => (
                        <div className="blogsimg" key={idx}>
                            <div className="blogs-content">
                                <img src={card.BlogsImg} alt="" />
                                <div className="catogary-title">
                                    <span>{card.catogary}</span>
                                    <p>{card.title}</p>
                                </div>
                                <div className="catogary-Conetnt">
                                    <img src={card.profile} alt="" />
                                    <a>{card.profileName}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="numbers">
                    {
                        numberobj.map((item, idx) => {
                            return (
                                <p onClick={(e)=> ChageNumberData(item ,e )} key={idx}>{item}</p>
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

export default Blogs
