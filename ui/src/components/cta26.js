import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text4">
                        Ready to showcase your skills?
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text3">
                        Let&apos;s work together to create a stunning portfolio
                        website that highlights your achievements and projects.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <a
                    href={props.textUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {props.text ?? (
                      <Fragment>
                        <span className="cta26-text5">Badges</span>
                      </Fragment>
                    )}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  content1: undefined,
  heading1: undefined,
  text: undefined,
  textUrl: 'https://example.com',
}

CTA26.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  text: PropTypes.element,
  textUrl: PropTypes.string,
}

export default CTA26
