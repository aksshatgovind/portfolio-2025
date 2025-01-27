import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import AppComponent from '../components/component'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio</title>
        <meta property="og:title" content="Portfolio" />
      </Helmet>
      <Navbar8
        text={
          <Fragment>
            <span className="home-text10">AKSSHAT GOVIND</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text11">About</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text12">Certifications</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text13">Projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text14">Links</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text15">About Me</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text16">Certifications</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text17">Projects</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text18">Medium Articles</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text19">Links</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text20">Resume</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text21">Read More</span>
          </Fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1737730511213-f558d973b0b5?ixid=M3w5MTMyMXwwfDF8YWxsfDIwfHx8fHx8fHwxNzM3ODgyMzA0fA&amp;ixlib=rb-4.0.3&amp;w=1500"
        textUrl="#Footer4"
        link1Url="#Hero17"
        link2Url="#Features25"
        link3Url="#Steps2"
        page1Description={
          <Fragment>
            <span className="home-text22">Bio and Skills</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text23">
              Credly Badges &amp; Certifications
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text24">Live Projects with GitHub Links</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text25">Medium Posts</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        content1={
          <Fragment>
            <span className="home-text26">
              <span>
                I’m a problem solver who loves transforming ideas into reality
                through code. Whether it’s AI, data science, or web development,
                I’m always excited to learn, build, and innovate.
              </span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text30">
              <span>Hello, I&apos;m Aksshat Govind</span>
              <br></br>
              <span className="home-text33">
                A Passionate Developer and AI Enthusiast
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        hero17Id="Hero17"
        rootClassName="hero17root-class-name"
        text={
          <Fragment>
            <span className="home-text36">Let&apos;s Connect</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text37">View Projects</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        text={
          <Fragment>
            <span className="home-text38">Link</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text39">Link</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text40">Link</span>
          </Fragment>
        }
        textUrl="https://medium.com/@aksshatgovind/scheduling-algorithm-of-linux-6-2-9-cf785524b0a7"
        heading1={
          <Fragment>
            <span className="home-text41">Articles</span>
          </Fragment>
        }
        textUrl1="https://medium.com/@aksshatgovind/learning-to-speak-our-language-with-representation-32e758072997"
        textUrl2="https://medium.com/@aksshatgovind/installing-fedora-38-on-macos-using-utm-part-1-aa9c0078bfe3"
        feature1Title={
          <Fragment>
            <span className="home-text42">
              <span>Blog: </span>
              <span className="home-text44">Scheduling algorithm of Linux</span>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text45">
              <span>Blog: </span>
              <span className="home-text47">
                Learning to Speak Our Language with Representation
              </span>
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text48">
              <span>Blog: </span>
              <span className="home-text50">
                Installing Fedora-38 on MacOS using UTM
              </span>
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        content1={
          <Fragment>
            <span className="home-text51">
              <span>
                From machine learning to cybersecurity, these badges aren’t just
                for show—they&apos;re the real deal. Check out the digital
                “trophies” that prove I’m more than just a coding ninja.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text54">Badges and Certifications</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="home-text55">Certificates</span>
          </Fragment>
        }
        textUrl="#Features25"
      ></CTA26>
      <AppComponent
        rootClassName="app-componentroot-class-name"
        componentId="Component"
      ></AppComponent>
      <Features25
        features25Id="Features25"
        feature1Title={
          <Fragment>
            <span className="home-text56">Google Advanced Data Analytics</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text57">Cisco VIP 2023 </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text58">EY Advanced Power BI</span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="home-text59">Link</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text60">Link</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text61">Link</span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        steps2Id="Steps2"
        step1Title={
          <Fragment>
            <span className="home-text62">hashtag</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text63">aesthene</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text64">AWARN</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text65">FluentFriend</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text66">
              A Python project which can detect gender and age using OpenCV of
              the person (face) in a picture or through webcam.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text67">
              &apos;aesthene&apos; is an AI-powered art gallery website that
              showcases a diverse collection of artworks generated by various AI
              algorithms.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text68">
              The goal for this system is to develop robust methodologies for
              utilising historical data to enhance disaster preparedness using
              threshold based alerts.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text69">
              FF(Fluent Friend) will use enthusiastic and passionate approaches
              to assist you in mastering language skills, as though you were
              speaking with a friend.
            </span>
          </Fragment>
        }
        text={
          <Fragment>
            <span className="home-text70">Github</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text71">Codebase Link</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text72">Codebase Link</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text73">Codebase Link</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text74">Codebase Link</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text75">Live Site</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text76">
              Python, C, C++, Rust, Javascript, R
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text77">
              Oracle, MySQL, MongoDB, Packet Tracer, Power BI, Tableau, Qt
              Designer, Blender
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text78">
              Machine Learning, Data Science, Computer Vision, Neural Networks,
              Data Handling
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text79">
              TensorFlow, PyTorch, scikit-learn, OpenCV, Flask, Django
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text80">Technical Skills</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        heading1={
          <Fragment>
            <span className="home-text81">Contributions</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text82">Project Lead: IBC Media</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text83">
              Data Analyst Intern: VDT Solutions
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text84">
              Managed project timelines and delivery of milestones for IBC
              Media&apos;s Continuous Education Programme(CEP).
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text85">
              Collected, cleaned, and analyzed data from multiple data
              warehouses to generate insights for anomaly detection.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text86">LinkedIn</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text87">Medium</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text88">Leetcode</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text89">Github</span>
          </Fragment>
        }
        footer4Id="Footer4"
        privacyLink={
          <Fragment>
            <span className="home-text90">Privacy Policy</span>
          </Fragment>
        }
        link41={
          <Fragment>
            <span className="home-text91">Mail</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
