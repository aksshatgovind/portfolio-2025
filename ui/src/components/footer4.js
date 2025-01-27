import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      id={props.footer4Id}
      className="footer4-footer7 thq-section-padding"
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-links">
            <a
              href="https://in.linkedin.com/in/aksshat-govind-8b0688226"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text5">LinkedIn</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://medium.com/@aksshatgovind"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text4">Medium</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://leetcode.com/u/aksshat03/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer4-link3 thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text3">Leetcode</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://github.com/aksshatgovind"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text6">Github</span>
                </Fragment>
              )}
            </a>
            <a
              href="mailto:govindaksshat2003@gmail.com?subject="
              className="footer4-link5 thq-body-small"
            >
              {props.link41 ?? (
                <Fragment>
                  <span className="footer4-text8">Mail</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2025 Aksshat Govind</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text2 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text7">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link3: undefined,
  link2: undefined,
  footer4Id: '',
  link1: undefined,
  link4: undefined,
  privacyLink: undefined,
  link41: undefined,
}

Footer4.propTypes = {
  link3: PropTypes.element,
  link2: PropTypes.element,
  footer4Id: PropTypes.string,
  link1: PropTypes.element,
  link4: PropTypes.element,
  privacyLink: PropTypes.element,
  link41: PropTypes.element,
}

export default Footer4
