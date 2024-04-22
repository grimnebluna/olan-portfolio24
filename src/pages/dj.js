import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// import functions to work with dates and date formats:
import { format, parseISO } from "date-fns"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const djPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">
          <h2 className={styles.h2heading}>Dates</h2>






          {/* create a map like above with the graphql query for datelist date and ort */}
          {data.allWpGig.edges.map(({node}) => (
            <div key={node.id} role="listitem" className="dateContainer">
              <div className="dateTitle">{node.title}</div>
              <div className="dates">
                {/* format the date with the date-fns library */}
                <div>{format(parseISO(node.konzertfelder.datum), "dd.MM.yyyy")}</div>
                <div>{node.konzertfelder.ort}</div>
                {/* only show konzertfelder.type if it exists */}
                {node.konzertfelder.type && <div>{node.konzertfelder.type}</div>}
                {node.konzertfelder.linkurl && (
                  <div>
                    <a href={node.konzertfelder.linkurl} target="_blank" rel="noreferrer">
                      More info
                    </a>
                  </div>
                )}
              </div>

            </div>
          ))} 



      </div>
      <div className="contentdiv">
          <h2 className={styles.h2heading}>DJ</h2>
        {data.allWpContentEmbed.edges.map(({node}) => (

          node.embedFelder.place == "dj" && (
           
           <div key={node.id} role="listitem" className="embedElem">
               <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
          </div>

          )
          

      ))} 

          <p style={{marginTop: "20px"}}><a href="https://soundcloud.com/olangalactica" target="_blank">more stuff on Soundcloud</a></p>

        </div>
      <div className="contentdiv">
          <h2 className={styles.h2heading}>Producer</h2>
          {data.allWpContentEmbed.edges.map(({node}) => (

            node.embedFelder.place == "producer" && (
            
            <div key={node.id} role="listitem" className="embedElem">
                <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
            </div>

            )


            ))} 

        <p style={{marginTop: "20px"}}><a href="https://olan1.bandcamp.com" target="_blank">more stuff on Bandcamp</a></p>
        </div>
        <div className="contentdiv">
          <h2 className={styles.h2heading}>Live Sets</h2>
          {data.allWpContentEmbed.edges.map(({node}) => (

            node.embedFelder.place == "livesets" && (
            
            <div key={node.id} role="listitem" className="embedElem">
                <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
            </div>

            )


            ))} 

        <p style={{marginTop: "20px"}}><a href="https://soundcloud.com/olangalactica" target="_blank">more stuff on Soundcloud</a></p>
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
}
`

export default djPage
