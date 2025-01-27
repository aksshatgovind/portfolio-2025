import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div
      id={props.hero17Id}
      className={`hero17-header78 ${props.rootClassName} `}
    >
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1 className="hero17-text10 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text13">
                  <span>Hello, I&apos;m Aksshat Govind</span>
                  <br></br>
                  <span className="hero17-text16">
                    A Passionate Developer and AI Enthusiast
                  </span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text11 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <a
              href="https://www.linkedin.com/in/aksshat-govind-8b0688226?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=ios_app"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.text ?? (
                <Fragment>
                  <span className="hero17-text18">Let&apos;s Connect</span>
                </Fragment>
              )}
            </a>
          </button>
          <button className="thq-button-outline hero17-button2">
            <a
              href="https://github.com/aksshatgovind"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.text1 ?? (
                <Fragment>
                  <span className="hero17-text19">View Projects</span>
                </Fragment>
              )}
            </a>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="hero17-strip1 thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src="/baby_blue_large-1500w.jpeg"
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src="https://miro.medium.com/v2/resize:fit:1400/0*ZsoyEvWw8tyeeoa7.gif"
              loading="eager"
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-4-3"
            />
            <img
              alt={props.image3Alt}
              src="https://miro.medium.com/v2/resize:fit:1400/1*UVknALd0-3LUbR6wV99lOQ.gif"
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src="/hashtag_large-1500w.jpeg"
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src="https://i.pinimg.com/736x/da/04/9a/da049af64af54adf8c09e8c6242fb2e8.jpg"
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*F6gs2e-cgtqnJExRnIZrKA.png"
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src="/dai-1500w.jpeg"
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src="/ey-1500w.png"
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src="/medium-1500w.png"
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src="https://media3.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif?cid=6c09b952wdm6nk0zhyejpplffsk3x0krz0qwd33q0ka9i52k&amp;ep=v1_gifs_search&amp;rid=giphy.gif&amp;ct=g"
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src="/medium-1500w.png"
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="/training-1500w.jpeg"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src="/blender-1500w.jpeg"
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src="/training-1500w.jpeg"
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*CNX7JMHF26fTTewE"
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src="https://media.licdn.com/dms/image/v2/D5622AQHVRn9pkUqRjw/feedshare-shrink_800/feedshare-shrink_800/0/1723992883479?e=2147483647&amp;v=beta&amp;t=ai68dY2eZpUhdooIjbQnAkiaOihq8xyuWjlAx9mjad0"
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src="/hackathon-1500w.jpeg"
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Yx7gCaQYkNz5zrE16TSvtw.png"
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src="/ibc-1500w.jpeg"
              className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src="/rep%20large-1500w.jpeg"
              className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src="/utm%20large-1500w.jpeg"
              className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src="/vip-1500w.png"
              className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*CNX7JMHF26fTTewE"
              className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://media.licdn.com/dms/image/v2/D5622AQHVRn9pkUqRjw/feedshare-shrink_800/feedshare-shrink_800/0/1723992883479?e=2147483647&amp;v=beta&amp;t=ai68dY2eZpUhdooIjbQnAkiaOihq8xyuWjlAx9mjad0"
              className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image2Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  content1: undefined,
  image4Alt: 'Hero Image',
  heading1: undefined,
  image12Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  hero17Id: '',
  image10Alt: 'Hero Image',
  rootClassName: '',
  image11Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image1Alt: 'Hero Image',
  text: undefined,
  text1: undefined,
}

Hero17.propTypes = {
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.element,
  image4Alt: PropTypes.string,
  heading1: PropTypes.element,
  image12Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  hero17Id: PropTypes.string,
  image10Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image11Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  text: PropTypes.element,
  text1: PropTypes.element,
}

export default Hero17
