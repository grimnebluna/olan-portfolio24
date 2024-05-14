import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

/* Popup component
import { useState, useEffect } from 'react';
const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);  // Used to mount/unmount the component
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [isHovering, setIsHovering] = useState(false);  // State to track mouse hover
  const [isClosing, setIsClosing] = useState(false); // State to manage

  useEffect(() => {
        if (document.cookie.split(';').some((item) => item.trim().startsWith('cookieAccepted='))) {
          return; // Don't show the popup if cookie is set
        }
        if(isClosing) return;  // Don't show the popup if it's closing
      // Simulate fetching cookie settings, etc.
      setTimeout(() => {
         setShowPopup(true);
          setIsVisible(true);
          setTimeout(() => setOpacity(1), 10); // small delay to ensure CSS is applied
      }, 1000); // simulate delay

      const timer = setTimeout(() => {
        if (!isHovering && isVisible && !isClosing) {
          handleClose(false);  // Not accepting, just closing
        }
      }, 6000);  // 1 second after it becomes fully visible (5 seconds waiting + 1 second initial delay)

      return () => clearTimeout(timer);  // Clear timer on component unmount or cleanup
  

  }, [isHovering, isVisible, isClosing]);

  const handleClose = (accept = false) => {
    setTimeout(() => setIsClosing(true), 10); // small delay to ensure CSS is applied
    if (accept) {
      document.cookie = "cookieAccepted=true; path=/; max-age=" + (60 * 60 * 24 * 365); // Set a cookie for 1 year
  }
      setOpacity(0); // Trigger fade-out   
      setTimeout(() => {
        setIsVisible(false);
        setShowPopup(false);  // Ensure it won't be triggered again
      }, 500);
  };


  if (!showPopup) {
    return null;
  }
  return (
      <div
          className="cookie-notice"
          onMouseEnter={() => setIsHovering(true)}  // Set hover state on mouse enter
          onMouseLeave={() => setIsHovering(false)}  // Reset hover state on mouse leave
          style={{
              opacity: opacity,
              transition: 'opacity 500ms ease-in-out',
              visibility: opacity === 0 && !isVisible ? 'hidden' : 'visible'
          }}
      >   
          <p>I use cookies to improve your experience :-* </p>
          <button onClick={() => handleClose(true)}>Close</button>
      </div>
  );
};

*/
const IndexPage = ({ data }) => (
  <Layout>
    <div className={styles.mainCenter}>
    <div className={styles.textCenter}>
      <h1 className={styles.mainTitle}>{data.wpPage.title}</h1>
      <h2 className={styles.subTitle}>{data.wpPage.index.subtitle}</h2>
      <h2 className={styles.subSubTitle}>{data.wpPage.index.subsubtitle}</h2>
      
    </div>
    
    </div>
    {/* <Popup /> */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home | Olan!" />

export const query = graphql`
query  {
  wpPage(slug: {eq: "index"}) {
    title
    index {
      subsubtitle
      subtitle
    }
  }
}
`

export default IndexPage
