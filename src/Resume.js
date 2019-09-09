import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faBriefcase,faGraduationCap,faCircle,faStickyNote } from '@fortawesome/free-solid-svg-icons'

class Resume extends React.Component {
    render() {
        return (
        	<div className="resume-container">
    <div className="details-container">
        <div className="name">MAYUR KOLI</div>
        <div className="left-container">
            <div className="personal-info-container">
                <div className="personal-info-title">Personal Info</div>
                <div className="phone"><span className="phone-title">Mobile No:</span><br />9920176209</div>
                <div className="email"><span className="email-title">Email:</span><br />kolimayurs@gmail.com</div>
                <div className="address"><span className="address-title">Address:</span><br />1117, Muktai Niwas, Diwale Village, Sector-14, C.B.D-Belapur, Navi Mumbai, 400614 (IN)</div>
            </div>
            <div className="skill-info-container">
                <div className="personal-info-title">Skills</div>
                <div className="phone"><span className="phone-title">HTML & CSS</span><br />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="grey-circle" />
                </div>
                <div className="phone"><span className="phone-title">Javascript</span><br />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="grey-circle" />
                    <FontAwesomeIcon icon={faCircle} className="grey-circle" />
                </div>
                 <div className="phone"><span className="phone-title">React</span><br />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="green-circle" />
                    <FontAwesomeIcon icon={faCircle} className="grey-circle" />
                    <FontAwesomeIcon icon={faCircle} className="grey-circle" />
                    <FontAwesomeIcon icon={faCircle} className="grey-circle" />
                </div>
            </div>
        </div>
        <div className="right-container">
            <div className="objective-container">
                <div className="objective-icon">
                    <FontAwesomeIcon icon={faEdit} className="" />
                </div>
                <div className="objective">
                    <div className="objective-title">Objective</div>
                </div>
                <div className="objective-content">To work in a challenging and growth oriented environment that encourage me in a continuous learning, exposure to new ideas, stimulates personal and professional growth.
                </div>
            </div>
            <div className="employment-history-container">
                <div className="employment-history-icon">
                    <FontAwesomeIcon icon={faBriefcase} className="" />
                </div>
                <div className="employment-history">
                    <div className="employment-history-title">Employment history</div>
                </div>
                <div className="employment-history-content">HTML Developer, BigTree Entertainment Pvt. Ltd (BookMyShow). Mumbai, Maharashtra<br /><span className="employment-history-content-1">Aug. 2014 – Present
                    </span></div>
                <div className="employment-history-content">Intern, Digi-Cult. Mumbai, Maharashtra<br /><span className="employment-history-content-1">Jan. 2014 – Aug. 2014
                    </span></div>
            </div>
            <div className="employment-history-container">
                <div className="employment-history-icon">
                    <FontAwesomeIcon icon={faGraduationCap} className="" />
                </div>
                <div className="employment-history">
                    <div className="employment-history-title">Education</div>
                </div>
                <div className="employment-history-content">Sardar Patel Institute of Technology, Mumbai University., Mumbai, Maharashtra<br /><span className="employment-history-content-1">Master of Computer Application
                        , Aug. 2014</span></div>
                <div className="employment-history-content">Karmaveer Bhaurao Patil College,Vashi, Navi Mumbai, Maharashtra
                    <br />
                    <span className="employment-history-content-1">JBachelor of Science, Mathematics, Jun. 2011</span></div>
                <div className="employment-history-content">ICLES' Motilal Jhunjhunwala College, Navi Mumbai, Maharashtra<br /><span className="employment-history-content-1">HSC, Feb. 2008
                    </span></div>
                <div className="employment-history-content">Dyan Pushpa Vidya Niketan,C.B.D, Navi Mumbai, Maharashtra<br />
                    <span className="employment-history-content-1">SSC, Mar. 2006</span></div>
            </div>
            <div className="employment-history-container">
                <div className="employment-history-icon">
                    <FontAwesomeIcon icon={faStickyNote} className="" />
                </div>
                <div className="employment-history">
                    <div className="employment-history-title">Project</div>
                </div>
                <div className="employment-history-content">Macway Intl<br /><span className="employment-history-content-1">Aug. 2014 – Present
                    </span></div>
                <div className="employment-history-content">Intern, Digi-Cult. Mumbai, Maharashtra<br /><span className="employment-history-content-1">Jan. 2014 – Aug. 2014
                    </span></div>
            </div>
        </div>
        <div className="clear"></div>
    </div>
</div>
        	);
    }
}

export default Resume;