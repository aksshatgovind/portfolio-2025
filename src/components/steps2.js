import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div id={props.steps2Id} className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">Projects</h2>
            <p className="thq-body-large">
              <span>
                I chose to delve into machine learning because of its incredible
                potential to extract meaningful insights from data and make
                predictions or decisions based on patterns and statistical
                probabilities.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                The ability to teach machines to learn from data and improve
                over time is not only fascinating but also holds immense
                practical value across numerous industries.
              </span>
              <br></br>
              <br></br>
              <span>
                Check out some of my resourceful projects up till now.
              </span>
              <br></br>
            </p>
            <div className="steps2-actions">
              <button className="thq-button-filled thq-button-animated steps2-button">
                <a
                  href="https://github.com/aksshatgovind"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="steps2-link1"
                >
                  {props.text ?? (
                    <Fragment>
                      <span className="steps2-text40">Github</span>
                    </Fragment>
                  )}
                </a>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text36">Set Up Your Portfolio</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text21 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      Create a modern and visually appealing portfolio website
                      to showcase your skills and projects.
                    </span>
                  </Fragment>
                )}
              </span>
              <a
                href="https://github.com/aksshatgovind/hashtag"
                target="_blank"
                rel="noreferrer noopener"
                className="steps2-link2"
              >
                {props.text1 ?? (
                  <Fragment>
                    <span className="steps2-text41">Codebase Link</span>
                  </Fragment>
                )}
              </a>
              <a
                href="https://hashtag-hyw2.onrender.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="steps2-link3"
              >
                {props.text5 ?? (
                  <Fragment>
                    <span className="steps2-text45">Link</span>
                  </Fragment>
                )}
              </a>
              <label className="steps2-text22 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text38">Add About Me Section</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text24 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text34">
                      Introduce yourself with a brief bio and highlight your
                      skills in Python, PyQt, TensorFlow, and other relevant
                      technologies.
                    </span>
                  </Fragment>
                )}
              </span>
              <a
                href="https://github.com/aksshatgovind/aesthene"
                target="_blank"
                rel="noreferrer noopener"
                className="steps2-link4"
              >
                {props.text2 ?? (
                  <Fragment>
                    <span className="steps2-text42">Codebase Link</span>
                  </Fragment>
                )}
              </a>
              <label className="steps2-text25 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text37">
                      Display Certifications
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text27 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text39">
                      Showcase your Credly badges and certifications to
                      demonstrate your expertise in various areas.
                    </span>
                  </Fragment>
                )}
              </span>
              <a
                href="https://github.com/aksshatgovind/Awarn"
                target="_blank"
                rel="noreferrer noopener"
                className="steps2-link5"
              >
                {props.text3 ?? (
                  <Fragment>
                    <span className="steps2-text43">Codebase Link</span>
                  </Fragment>
                )}
              </a>
              <label className="steps2-text28 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text35">Feature Projects</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text30 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text33">
                      Display your live projects with GitHub links to provide
                      visitors with a hands-on view of your work.
                    </span>
                  </Fragment>
                )}
              </span>
              <a
                href="https://github.com/aksshatgovind/FluentFriend"
                target="_blank"
                rel="noreferrer noopener"
                className="steps2-link6"
              >
                {props.text4 ?? (
                  <Fragment>
                    <span className="steps2-text44">Codebase Link</span>
                  </Fragment>
                )}
              </a>
              <label className="steps2-text31 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description: undefined,
  step4Description: undefined,
  step2Description: undefined,
  steps2Id: '',
  step4Title: undefined,
  step1Title: undefined,
  step3Title: undefined,
  step2Title: undefined,
  step3Description: undefined,
  text: undefined,
  text1: undefined,
  text2: undefined,
  text3: undefined,
  text4: undefined,
  text5: undefined,
}

Steps2.propTypes = {
  step1Description: PropTypes.element,
  step4Description: PropTypes.element,
  step2Description: PropTypes.element,
  steps2Id: PropTypes.string,
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
  step3Description: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  text5: PropTypes.element,
}

export default Steps2
