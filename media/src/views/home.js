import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Admirable Elementary Jackal</title>
        <meta property="og:title" content="Admirable Elementary Jackal" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">Medium Posts</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Learn More</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">#certifications</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">About Me</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">#about</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Medium Articles</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Certifications</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">#medium</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">Bio and Skills</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Credly Badges &amp; Certifications
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">#projects</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Projects</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Live Projects with GitHub Links
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Read More</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Secondary action</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Main action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Showcase your skills, bio, and expertise in the About Me section.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">About Me</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Display your certifications and badges in the Certifications
              section.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Certifications</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Highlight your live projects with GitHub links in the Projects
              section.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Medium Articles</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Ready to showcase your skills?</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let&apos;s work together to create a stunning portfolio website
              that highlights your achievements and projects.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get in touch</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Optimized for search engines to improve visibility and reach.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Sleek and professional design to showcase your skills and
              projects.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Responsive Layout</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Modern Portfolio Design</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Mobile-friendly design that adapts to different screen sizes for a
              seamless user experience.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">SEO Optimization</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$10/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Get Premium</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign up for free</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Certifications display</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Medium articles integration</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">SEO optimization</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$50/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Upgrade to Pro</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Priority support</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Leetcode achievements section</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Custom domain setup</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">All features from Free plan</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Easy content updates</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$5/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$100/year</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Responsive design</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Projects portfolio</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$0/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Bio and skills showcase</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Advanced analytics</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184">$0</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186">
              Create a modern and visually appealing portfolio website to
              showcase your skills and projects.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187">
              Showcase your Credly badges and certifications to demonstrate your
              expertise in various areas.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188">Add About Me Section</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Introduce yourself with a brief bio and highlight your skills in
              Python, PyQt, TensorFlow, and other relevant technologies.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190">Set Up Your Portfolio</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191">Display Certifications</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192">
              Display your live projects with GitHub links to provide visitors
              with a hands-on view of your work.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193">Feature Projects</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194">Data Scientist</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195">Software Engineer</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198">
              [Your Name] is a talented developer with a passion for innovation.
              I highly recommend collaborating with them.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200">Web Developer</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Emily Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202">
              Read what others have to say about working with me.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203">Machine Learning Engineer</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204">
              Working with [Your Name] was a fantastic experience. Their
              attention to detail and problem-solving skills are truly
              commendable.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206">
              I had the pleasure of working with [Your Name] on a challenging
              project. Their expertise and dedication were instrumental in its
              success.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207">
              [Your Name] is a reliable team player who consistently delivers
              high-quality work. It was a pleasure working alongside them.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214">Link 5</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215">Link 3</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216">Link 1</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218">Link 2</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219">Link 4</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
