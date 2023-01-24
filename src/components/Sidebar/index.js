import { Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoTim from '../../assets/images/Tim_Muyrers.png'
import { faHome, faUser, faEnvelope, faHeadset, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoTim} alt="Tim" />
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        > 
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>



        <NavLink
          activeclassname="active"
          className="projects-link"
          to="/Projects"
        > 
          <FontAwesomeIcon icon={faPersonWalkingLuggage} color="#4d4d4e" />
        </NavLink>



        
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/tim-muyrers-3a6223113/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCGUa9dYXIxS8Iy_wX-tIlyw/featured"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
          // 
            href="https://teams.microsoft.com/l/chat/0/0?users=t.h.c.muyrers@student.tue.nl"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faHeadset} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
)

export default Sidebar