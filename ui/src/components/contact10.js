import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text17">Locations</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src="/ibc-1400w.jpeg"
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text11 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Project Lead: IBC Media
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text20">
                    Managed project timelines, ensuring timely delivery of
                    milestones and results for IBC Media&apos;s Continuous
                    Education Programme(CEP)
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <span className="thq-body-small thq-button-flat">Oct 2023</span>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src="/dai-1400w.jpeg"
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text21">
                    Data Analyst Intern: VDT Solutions
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text18">
                    Collected, cleaned, and analyzed data from multiple data
                    warehouses to generate insights for anomaly detection.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <span className="thq-body-small thq-button-flat">Dec 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2ImageAlt: 'image2Alt',
  heading1: undefined,
  location2Description: undefined,
  location1: undefined,
  location1Description: undefined,
  location1ImageAlt: 'image1Alt',
  location2: undefined,
}

Contact10.propTypes = {
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2: PropTypes.element,
}

export default Contact10
