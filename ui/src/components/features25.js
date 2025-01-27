import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id={props.features25Id} className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text1">
                      Google Advanced Data Analytics
                    </span>
                  </Fragment>
                )}
              </h2>
              <a
                href="https://drive.google.com/file/d/1aUQiVXu49z-TY5j2NqPLntoGBP3MeTXz/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="features25-link1"
              >
                {props.text ?? (
                  <Fragment>
                    <span className="features25-text4">Link</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text2">Cisco VIP 2023 </span>
                  </Fragment>
                )}
              </h2>
              <a
                href="https://drive.google.com/file/d/1RNniycZBYkKREKJn-X2f7Vt7xwUO5sj4/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="features25-link2"
              >
                {props.text1 ?? (
                  <Fragment>
                    <span className="features25-text5">Link</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text3">
                      EY Advanced Power BI
                    </span>
                  </Fragment>
                )}
              </h2>
              <a
                href="https://drive.google.com/file/d/1Bz9wpUVrPYgp4oqxCrXJY_YYQCT4Ho3Q/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="features25-link3"
              >
                {props.text2 ?? (
                  <Fragment>
                    <span className="features25-text6">Link</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src="/da-1400w.png"
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src="/vip-1400w.png"
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src="/ey-1400w.png"
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1Title: undefined,
  features25Id: '',
  feature1ImgAlt: 'Portfolio Design Image',
  feature3ImgAlt: 'SEO Optimization Image',
  feature2ImgAlt: 'Responsive Layout Image',
  feature2Title: undefined,
  feature3Title: undefined,
  text: undefined,
  text1: undefined,
  text2: undefined,
}

Features25.propTypes = {
  feature1Title: PropTypes.element,
  features25Id: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3Title: PropTypes.element,
  text: PropTypes.element,
  text1: PropTypes.element,
  text2: PropTypes.element,
}

export default Features25
