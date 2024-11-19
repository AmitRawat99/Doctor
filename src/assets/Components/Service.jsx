import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLocationDot, faBars, faGraduationCap, faArrowRight, faUserDoctor, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets_frontend/logo.svg'
// import '../style/service.scss'
import '../../assets/style/Service.scss'
import appoinmnet from '../style/Appoinment.js'



// service 

import service1 from '../Service/Doctors-Service/2.png'
import service2 from '../Service/Doctors-Service/3.png'
import service3 from '../Service/Doctors-Service/4.png'
import service4 from '../Service/Doctors-Service/5.png'
import service5 from '../Service/Doctors-Service/6.png'
import service6 from '../Service/Doctors-Service/7.png'
import service7 from '../Service/Doctors-Service/8.png'
import service8 from '../Service/Doctors-Service/9.png'
import service9 from '../Service/Doctors-Service/10.png'
import service10 from '../Service/Doctors-Service/11.png'
import service11 from '../Service/Doctors-Service/12.png'
import service12 from '../Service/Doctors-Service/13.png'

// HeartSugger

import heart1 from '../Service/Doctors-Service/1.png'
import heart2 from '../Service/Doctors-Service/2.png'
import heart3 from '../Service/Doctors-Service/3.png'
import heart4 from '../Service/Doctors-Service/4.png'
import heart5 from '../Service/Doctors-Service/5.png'
import heart6 from '../Service/Doctors-Service/6.png'
import heart7 from '../Service/Doctors-Service/7.png'
import heart8 from '../Service/Doctors-Service/8.png'
import heart9 from '../Service/Doctors-Service/10.png'
import heart10 from '../Service/Doctors-Service/11.png'
import heart11 from '../Service/Doctors-Service/12.png'
import heart12 from '../Service/Doctors-Service/13.png'

// Neurosurgeon

import Neurosur1 from '../Service/Neurosurgeon/1.png'
import Neurosur2 from '../Service/Neurosurgeon/2.png'
import Neurosur3 from '../Service/Neurosurgeon/3.png'
import Neurosur4 from '../Service/Neurosurgeon/4.png'
import Neurosur5 from '../Service/Neurosurgeon/5.png'
import Neurosur6 from '../Service/Neurosurgeon/6.png'
import Neurosur7 from '../Service/Neurosurgeon/7.png'
import Neurosur8 from '../Service/Neurosurgeon/8.png'
import Neurosur9 from '../Service/Neurosurgeon/9.png'
import Neurosur10 from '../Service/Neurosurgeon/10.png'
import Neurosur11 from '../Service/Neurosurgeon/11.png'
import Neurosur12 from '../Service/Neurosurgeon/12.png'


let buttons = ['HeartSugger', 'Dermatologist', 'Neurosurgeon', 'SkinSpecialist', 'CancerSpecialist']




let card = {
    All: [
        {
            img: service2,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service1,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service3,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service4,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service5,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service6,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service7,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service8,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service9,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service10,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service11,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service12,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        }
    ],
    HeartSugger: [
        {
            img: heart1,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart2,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart3,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart4,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart5,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart6,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart7,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart8,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart9,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart10,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart11,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: heart12,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        }
    ],
    Neurosurgeon: [
        {
            img: Neurosur1,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur2,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur3,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur4,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur5,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur6,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur7,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur8,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur9,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur10,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur11,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: Neurosur12,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        }
    ],
    Dermatologist: [
        {
            img: service2,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service1,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service3,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service4,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service5,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service6,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service7,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service8,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service9,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service10,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service11,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service12,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        }
    ],
    SkinSpecialist: [
        {
            img: service2,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service1,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service3,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service4,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service5,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service6,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service7,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service8,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service9,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service10,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service11,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service12,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        }
    ],
    CancerSpecialist: [
        {
            img: service2,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service1,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service3,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service4,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service5,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service6,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service7,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service8,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service9,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service10,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service11,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        },
        {
            img: service12,
            Appoinment: 'Urgent Care Appointment with ',
            Name: 'Dr. Rohit Sharma',
            icon: faArrowRight,
            catogary: 'Care Physicians Doctors',
            doctorAbout: 'Your Health, Our Expertise: Explore Our Doctor Categories......',
            userDoctor: faUserDoctor,
            Expriance: ' 7 Year Expriance',
            graducationIcon: faGraduationCap,
            Degree: 'MBBS Graduation',
            languageIcon: faLanguage,
            Language: 'English , Hindi',
            button: 'Apponment'
        }
    ],
}

function Service(props) {
    const naviGation = useNavigate()

    const [imageGallary, setImageGallary] = useState('All')

    function ChangeData(doctors, e) {
        e.preventDefault()
        setImageGallary(doctors)
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
                <div className="Service-Page">
                    <div className="Service-Content">
                        <h1>"Streamlining Healthcare: Innovative Services to Support Doctors"</h1>
                        <div className="searchBox">
                            <div className="searchInput">
                                <FontAwesomeIcon icon={faSearch} />
                                <input type="text" placeholder='Searchs Best Doctor For  Appoinment ' />
                            </div>
                            <div className="dropdown">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <select name="DropDown" id="DropDown">
                                    <option value="">Apolo Hostipal Delih</option>
                                    <option value="">Appolo Fertility Rohni</option>
                                    <option value=""> Apollo Clinic Rajouri Garden</option>
                                    <option value=""> Apollo Cradle Chirag Enclave</option>
                                    <option value=""> Apollo One Pusa Road</option>
                                    <option value="">  The Apollo Clinic East Of Kailash</option>
                                    <option value=""> Apollo Cradle Moti Nagar</option>
                                    <option value=""> Apollo Dental Spectra Nehru Place</option>
                                    <option value=""> Apollo Fertility Lajpat Nagar</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="appinment">
                    <h1>Appoinmnet Doctors 25/7 Available</h1>
                </div>
                <div className="catogary-btns">
                    {
                        buttons.map((item, idx) => {
                            return (
                                <button key={idx} onClick={(e) => ChangeData(item, e)}>{item}</button>
                            )
                        })
                    }
                </div>
                <div className="card7">
                    {
                        card[imageGallary] && card[imageGallary].map((cardDr, idx) => {
                            return (
                                <div className='margin4' key={idx}>
                                    <div className="card-container">
                                        <div className="card-face front-face">
                                            <img src={cardDr.img} alt="" />
                                            <div className="doctors-About">
                                                <h2>{cardDr.Appoinment} <span>{cardDr.Name}</span></h2>
                                            </div>
                                            <div className="arrow" onClick={appoinmnet.button} >
                                                <FontAwesomeIcon className='fron-icon' id='righticon' icon={cardDr.icon} />
                                            </div>
                                        </div>
                                        <div className="card-face back-face">
                                            <div className="container-about">
                                                <div className="top-arrow">
                                                    <FontAwesomeIcon className='fron-icon' id='righticon' icon={cardDr.icon} />
                                                </div>
                                                <div className="doctors-About">
                                                    <h3> <span>{cardDr.Name}</span></h3>
                                                </div>
                                                <h3>{cardDr.catogary}</h3>
                                                <p>{cardDr.doctorAbout}</p>
                                                <div className="expriance">
                                                    <FontAwesomeIcon icon={cardDr.userDoctor} />
                                                    <p> {cardDr.Expriance}</p>
                                                </div>
                                                <div className="expriance">
                                                    <FontAwesomeIcon icon={cardDr.graducationIcon} />
                                                    <p>{cardDr.Degree}</p>
                                                </div>
                                                <div className="expriance">
                                                    <FontAwesomeIcon icon={cardDr.languageIcon} />
                                                    <p>{cardDr.Language}</p>
                                                </div>
                                                <div className="expriance">
                                                    <Link to='/Appoinments'> <button id="btn" data-doctor={JSON.stringify(cardDr)} onClick={appoinmnet.AddToCard}>
                                                    {cardDr.button}</button></Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section >
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

export default Service


