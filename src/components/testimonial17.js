import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container1">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text18">Testimonials</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <span className="testimonial17-text11 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text16">
                        Working with [Your Name] was a fantastic experience.
                        Their attention to detail and problem-solving skills are
                        truly commendable.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonial17-accent2-bg2 thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <span className="testimonial17-text12 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text15">
                        [Your Name] is a talented developer with a passion for
                        innovation. I highly recommend collaborating with them.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonial17-accent2-bg3 thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <span className="testimonial17-text13 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text19">
                        I had the pleasure of working with [Your Name] on a
                        challenging project. Their expertise and dedication were
                        instrumental in its success.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonial17-accent2-bg4 thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <span className="testimonial17-text14 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text17">
                        [Your Name] is a reliable team player who consistently
                        delivers high-quality work. It was a pleasure working
                        alongside them.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review2: undefined,
  review1: undefined,
  review4: undefined,
  heading1: undefined,
  review3: undefined,
}

Testimonial17.propTypes = {
  review2: PropTypes.element,
  review1: PropTypes.element,
  review4: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
}

export default Testimonial17
