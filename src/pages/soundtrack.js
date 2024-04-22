import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// import functions to work with dates and date formats:
import { format, parseISO } from "date-fns"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const soundtrackPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">
          <h2 className={styles.h2heading}>Soundtracks</h2>
            {/* embed disco again but with nl2br */}
            {data.wpPage.soundtrack.soundtracktext.split("\n").map((i,key) => {
              return <div key={key}>{i}<br/></div>
            })}




      </div>
      <div className="contentdiv">


        </div>
      <div className="contentdiv">

      <h2 className={styles.h2heading}>Theater</h2>
        {data.allWpContentEmbed.edges.map(({node}) => (

          node.embedFelder.place == "theater" && (
           
           <div key={node.id} role="listitem" className="embedElem">
               <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
          </div>

          )
          

      ))} 

        </div>
        <div className="contentdiv">
          <h2 className={styles.h2heading}>Film</h2>
          {data.allWpContentEmbed.edges.map(({node}) => (

            node.embedFelder.place == "film" && (
            
            <div key={node.id} role="listitem" className="embedElem">
                <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
            </div>

            )


            ))} 

        </div>
      </div>

    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export const query = graphql`
query  {
  allWpGig(limit: 100) {
    edges {
      node {
        id
        title
        konzertfelder {
          datum
          ort
          type
          linkurl
        }
      }
    }
  }
  allWpContentEmbed {
    edges {
      node {
        id
        embedFelder {
          datum
          embedcode
          place
        }
      }
    }
  }
  wpPage(slug: {eq: "soundtrack"}) {
    soundtrack {
      soundtracktext
    }
  }
}
`

export default soundtrackPage
