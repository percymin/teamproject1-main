import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Landing.css';
import { Link } from 'react-router-dom';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Landing() {
    return (
        <>
            <Header />
            <div className="container-box">
                <div className="left-section">
                    <h2 id="landingtext">일정을 생성하고</h2>
                    <h2 id="landingtext2">친구를 초대하세요</h2>
                    <Link to="/CreateRoom">
                        <button className="btn btn-success submit-btn btn-lg">방만들기</button>
                    </Link>
                </div>

                <div className="right-section">
                    <div className="image01">
                        <img className="calanderimg" alt="none" src="calendar.png"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Landing;