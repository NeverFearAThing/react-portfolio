import { useEffect, useState } from 'react'
import {
  faFontAwesome,
  faReact,
} 
from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faChartColumn, faTriangleCircleSquare, faUserCheck } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
      return setLetterClass('text-animate-hover')
      }, 4000)
  }, [])


    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
            My name is Tim Muyrers. Four years ago I graduated from the Psychology & Technology bachelor. I concluded my study with a comprehensive study into external factors influencing the necessary motivation required to set a certain amount of steps. After graduating and receiving my bachelor's diploma, I took some time to reflect. I know that I loved to do research, but it always left me a bit unfulfilled that that was the moment I had to let go of the project. Therefore I took some time off in between my studies, to figure out what would be my best approach regarding my future development. 
            </p>
            <p >
            After some careful exploration into possible master programs, I found the industrial design master. Through several information sessions and talks with previous and current students, I decided that this was the study that could allow me to remain a research focussed engineer, while also allowing me to explore possible solutions to researched phenomena. 
            </p>
            <p>
            I joined the Industrial design department by first doing a pre-master. During this semester I was introduced to the different aspects of becoming a designer. My background provided an advantage in the User & Society and Math, data & Computing domains, as both theory, as well as quantitative and qualitative research, were the most prominent topics in my bachelor. I did however need to quickly build a foundation when it came to Creativity & aesthetics, Business & entrepreneurship, and Technology & realization. 
             
            </p>
            <p>
            During the pre-master, my courses and project group were created and chosen based on these deficiencies. With courses like creative electronics, Perspectives on Aesthetics, and Design with and for multiple stakeholders I was quickly able to learn several important basics. Perspectives on Aesthetics allowed me to learn to approach design through different, sometimes absurd angles. It generated an ability to think outside of your own bias and interpretations and generate unique and innovative ideas. It helped me to understand how to consciously take a perspective into consideration to design. The course design with and for multiple stakeholders introduced me to several techniques to approach design choices from the perspective of both users as well as businesses to make a real impact with your design. The course provided several real-world cases, which helped understanding the choices businesses make when it comes to innovation and design. Finally, the course creative electronics introduced me to programming prototypes, but also to make sure they are electronically robust and safe. This combined with a full design process at the Vitality squad prepared me sufficiently to start the Industrial Design master.
            </p>
            <p>
            During the master, I wanted to explore all different opportunities available, to learn who I am, what I liked, and how I wanted to approach my career after university. During the first semester of my master, I followed courses in different upcoming field. These areas included AI, medical technology like EMS (electrical muscle stimulation), and designing vulnerable user group in the form of people with dementia. During this semester I also got the opportunity to publish as a shared first author, which meant I had a big part in conducting the research, writing the report, and was also granted the opportunity to attend the conference. This taught me a lot, and I developed important skills in structure, way of writing, framing your research in the bigger picture of existing research, and more. I am really grateful for this opportunity and all the amazing support I received during this semester. Due to the active Covid situation during that time, I did work mostly individually and only collaborated during intermittent status update moments. This is something I learned to dislike, and in the future I prefer working in closer proximity, to be able to learn from both individual work, as well as collaboration. 
            </p>
            <p>
            During the second master semester my development could be grouped into three separate activities. This semester I enrolled in two electives: User experience and practice and Complex and adaptive systems. User experience and practice was a course that heavily focussed on understanding different research fields, and how working with a client requires research that stays within the boundaries of their requests. Feedback throughout the course showed me that understanding and critically analyzing is a really strong point for me, but being able to make new unexplored connections is something I need to keep working on. The Complex and adaptive systems course taught me a higher-level understanding of how simulations can assist in better understanding complex social behavior. Models can predict and test changes in a social system and can quickly reveal results, that in real life would possibly take weeks if not years to achieve. It has taught me the strength of theoretical models when real research is not within monetary or time capabilities.
             
            </p>
            <p>
            Alongside my regular master courses and project, I undertook some additional study load in the form of publishing. Throughout the semester I worked on writing, publishing, and presenting a 2-page paper at the PETRA conference. Collaborating in this field has taught me the strength of teamwork. It has taught me how to both provide, and process (written) feedback, collaborate extensively on a high level regarding poster and video presentation, and deal with the entire process of actually publishing. It has taught me the strength of emerging in the scientific community, and how researchers, who do not directly relate to the field you are working in can still provide inspiration, motivation, and new insights into your research. However, I also learned publishing is a very time-intensive activity, especially when doing it for the first time. 


            </p>
            <p>
            It was also the first time I approached a design project individually. Doing everything alone in this project learned me to value teamwork even more. Teamwork is not only able to use the strengths of each team member but also enhances the existing skills through discussion and collaboration. This is something I still value highly. However during this semester, not having a team to discuss and work with also taught me valuable skills in all stages of design research and reporting, including poster design, video, analysis, prototyping, writing, presenting, and more.
            </p>
            <p>
            Starting the second year of the master program, I knew I had explored the scientific approach to design, and instead wanted to learn more about company collaboration. Throughout this semester I for the first time experienced the complexity covid had on the mental state of students (me in this case). I started to struggle with motivation, did not finish my work on time and had moments of unhealthy stress. Eventhough I could not explain them initially, I decided to approach my problems through the methods I had learned previously in my studies. I managed to identify several problems, like irregular work times, insufficient exercise, lack of regular breaks, and having my workplace located in my bedroom. Sticking to regular work times, scheduling regular breaks and exercise moments and moving my workplace helped me to regain my motivation and energy, and still allowed me to complete a successful design semester.
            </p>
            <p >
            Furthermore, I managed to follow several courses, including courses outside the ID department and participated in an international project as a research assistant. This research assistant opportunity has furthered my development significantly, as it has helped me to learn more about the incorporation of multiple partners, collaborating with different colleagues who are specialized in techniques domains, and designing and researching within the domain of feasibility and budget. It helped me to gain real-world experience, which further enhanced my development.
            </p>
            <p>
            Before starting my graduation project there was one more opportunity I wanted to explore, and this was teaching. I looked for opportunities to be hired as a student assistant within a course, to learn more about sharing knowledge, providing practical support, and potentially even grading oral exam/reports.
             
            </p>
            <p>
            I found this opportunity in a course I followed during the pre-master and completed with an 8.7. I was able to become a tutor and grading teaching asssitant within the course, and had the opportunity to share my knowledge during weekly practicum sessions. I learned how to guide students without simply revealing the answer, and learned how I could give valuable feedback on written reports. This skill will be beneficial in any future situation, where my knowledge can benefit my colleagues, but can also help me to ask the right questions when it is me who needs to learn/understand something.
            </p>
            <p >
            Having explored publishing, teaching, international collaboration, and more, I felt that it was time to start my final master project. During this period I again got the opportunity to continue working within the international Celeste project, where my attention switched to ISA systems which are capable of reading/detecting speed limits and based on this knowledge automatically limiting the pedal of an individual's car. In this project I had several tasks, including communication with partners, visiting an international consortium, setting up the research plan, and visiting participants to conduct interview sessions. Learning about industrial design research in a non-education environment.
            </p>
            <p>
            Simultaneously I started my FMP. During this final semester, I wanted to once more prove my ability to guide my design process by relevant theory. Throughout the master program, I learned where my strengths, but also my weaknesses reside. While it is always good practise to work on your weaknesses, I also strongly believe that one person cannot be excellent in all categories. With this project, I wanted to show to myself and others what my role would be in future collaborations. 
             
            </p>
            <p>
            Throughout my master I have worked together interdisciplinary, and have worked with experts, upcoming engineers, and individuals employed in the technical section to further my individual and our collective objectives. I have done this by developing skills in building prototypes (Arduino, Hardware, Matlab, Excel, Solidworks, Laser cutting & more). During this FMP I have shown myself that I can self-regulate my learning process, and develop skills with new components and programs without the need for additional teaching. I believe this is a very important development, as knowing how to teach yourself something new quickly and efficiently in a dynamic fast-moving environment like technical design is imperative. When efficiency requires, I am able to explain my thoughts using object-oriented schematics. 
            </p>
            <p align="LEFT">
            Besides my technical development, I also achieved a new level of applying and using research and research methodology within my design process. I initially chose the industrial design master because of my wish to develop, test, and deploy solutions to relevant problems identified in literature. I think my FMP provides the perfect example of how I was able to achieve this. My design process starts with identifying a relevant societal issue. Research can provide relevant knowledge, but whenever the research perspective is not directly applicable to design, I can quickly switch and gather experts in the field to learn more about the application of their knowledge on design decisions. The next step in my exploration is to gather relevant and applicable behavior, attention, psychological, and sociological literature describing human behavior. Enhancing well-being consciously and unconsciously. Finally, conducting prototype evaluations based on both usability as well as the effectiveness of solving an issue is essential to prove the correct implementations of the theories and solidify the design direction.
            </p>
            <p>
            So how would I describe myself in short?
             
            </p>
            <p>
            I am a designer with a research backpack. I have experience in many different domains, but ultimately with one clear objective and approach. Understanding the design problem, the person that is going to use the design, and unconsciously but always supportively helping them reach their goals and improving their lives. I will do this by seeking collaborations when necessary while being able to self-regulate my learning and development when it comes to performing research or building physical/digital prototypes. The key to success in any project is to support and research all choices, without limiting the progression of the design process. Creating a product or service that is intuitive, easy to use, and truly beneficial to the user.
            </p>
            <p>
            ----------------------------------------------------------------------------------------------------------
            </p>
            

          </div>
          <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={faUserCheck} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faChartColumn} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faTriangleCircleSquare} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faFontAwesome} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#EC4D28" />
            </div>
          </div>
        </div>
      


        </div>

      </>
    )
  }
  
  export default About
