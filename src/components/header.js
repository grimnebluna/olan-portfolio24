import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HamburgerMenu from "./HamburgerMenu"; // Ensure the path is correct

const Header = ({ siteTitle }) => (
  <header className="mainHeader">


<div className="social-links-wrapper">
  {/*
  <a href="/" className="social-link w-inline-block">
      <StaticImage
          src="../images/home.svg"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
        />
      </a>
*/}
    <a href="https://olan1.bandcamp.com/" target="_blank" className="social-link w-inline-block">
    <StaticImage
        src="../images/bandcamp.svg"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
    </a>
    <a href="https://soundcloud.com/olangalactica" target="_blank" className="social-link w-inline-block">
    <StaticImage
        src="../images/soundcloud.svg"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />        
    </a>
     <a href="https://instagram.com/olangalactica" target="_blank" className="social-link w-inline-block">
     <StaticImage
        src="../images/instagram.svg"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
     </a>
     <a href="https://www.youtube.com/olangalactica" target="_blank" className="social-link w-inline-block">
     <StaticImage
        src="../images/youtube.svg"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
     </a>
     <a href="https://facebook.com/olangalactica" target="_blank" className="social-link w-inline-block">
     <StaticImage
        src="../images/facebook.svg"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
     </a>
     </div>
    <HamburgerMenu />

  </header>
)

export default Header
