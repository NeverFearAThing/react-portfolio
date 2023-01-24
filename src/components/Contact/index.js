import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const{REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_ID}= process.env;


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
    return setLetterClass('text-animate-hover')
    }, 4000)
}, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
 
     .sendForm(
        `${REACT_APP_SERVICE_ID}`,
        `${REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${REACT_APP_PUBLIC_ID}`
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am currently a master student, but soon open to explore new and exciting opportunities within an exciting new environment. Please do reach out to me if you believe we can benefit from eachothers skills, experiences and facilities!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Tim Muyrers,
          <br />
          The Netherlands,
          <br />
          Noord-Brabant <br />
          Eindhoven <br />
          <br />
          <span>t.h.c.muyrers@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[51.448416, 5.485997]} zoom={13.5}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[51.448416, 5.485997]}>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
