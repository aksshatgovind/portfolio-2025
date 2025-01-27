import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-content1">
        <h2 className="features24-text1 thq-heading-2">
          {props.heading1 ?? (
            <Fragment>
              <span className="features24-text7">Articles</span>
            </Fragment>
          )}
        </h2>
      </div>
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <a
              href="https://medium.com/@aksshatgovind"
              target="_blank"
              rel="noreferrer noopener"
              className="features24-link1"
            >
              <img
                alt={props.feature1ImgAlt}
                src="/medium-1400w.png"
                className="features24-image1 thq-img-ratio-16-9"
              />
            </a>
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src="/rep%20large-1400w.jpeg"
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src="/utm%20large-1400w.jpeg"
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text5">Certifications</span>
                  </Fragment>
                )}
              </h2>
              <a href={props.textUrl} target="_blank" rel="noreferrer noopener">
                {props.text ?? (
                  <Fragment>
                    <span className="features24-text8">Link</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text4">Medium Articles</span>
                  </Fragment>
                )}
              </h2>
              <a
                href={props.textUrl1}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.text1 ?? (
                  <Fragment>
                    <span className="features24-text2">Link</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content4">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features24-text3">About Me</span>
                  </Fragment>
                )}
              </h2>
              <a
                href={props.textUrl2}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.text2 ?? (
                  <Fragment>
                    <span className="features24-text6">Link</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  text1: undefined,
  feature2ImgAlt: 'Medium Articles Section Image',
  feature3ImgAlt: 'Projects Section Image',
  feature3Title: undefined,
  feature2Title: undefined,
  feature1Title: undefined,
  textUrl1: 'https://example.com',
  text2: undefined,
  textUrl: 'https://example.com',
  textUrl2: 'https://example.com',
  feature1ImgAlt: 'About Me Section Image',
  heading1: undefined,
  text: undefined,
}

Features24.propTypes = {
  text1: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  textUrl1: PropTypes.string,
  text2: PropTypes.element,
  textUrl: PropTypes.string,
  textUrl2: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  heading1: PropTypes.element,
  text: PropTypes.element,
}

export default Features24
