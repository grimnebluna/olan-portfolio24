import * as React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const soundtrackPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="zweispaltigWrapper">
          <h2 className={styles.h2heading}>Scores</h2>
            {/* embed disco again but with nl2br */}
                   <div dangerouslySetInnerHTML={{ __html: data.wpPage.soundtrack.soundtracktext }} />


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

export const Head = () => <Seo title="Theater + Film Music | Olan!" />

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
