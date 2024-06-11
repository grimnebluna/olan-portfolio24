import * as React from "react"
import { graphql } from "gatsby"

// import functions to work with dates and date formats:
import { format, parseISO } from "date-fns"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"




const djPage = ({ data }) => {



// Inside your React component
const currentDate = new Date(); // Get current date
currentDate.setDate(currentDate.getDate() - 1); // Subtract 1 day to include today

const filteredAndSortedGigs = data.allWpGig.edges
  .map(({ node }) => node)
  .filter(({ konzertfelder }) => {
    const gigDate = parseISO(konzertfelder.datum);
    return gigDate > currentDate; // Filter out gigs that have passed
  })
  .sort((a, b) => {
    const dateA = new Date(a.konzertfelder.datum);
    const dateB = new Date(b.konzertfelder.datum);
    // sort by date in ascending order:
    return dateA - dateB;
  });






  return(
  <Layout>
    <div className={styles.mainNormal}>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">

          <h2 className={styles.h2heading}>{data.wpPage.historygigs.titelDates}</h2>






          {/* create a map like above with the graphql query for datelist date and ort */}
          {filteredAndSortedGigs.map(node => (
      <div key={node.id} role="listitem" className="dateContainer">
        <div className="dateTitle">
          {node.konzertfelder.linkurl ? (
            <a href={node.konzertfelder.linkurl} target="_blank" rel="noopener">{node.title}</a>
          ) : (
            <div>{node.title}</div>
          )}
        </div>
        <div className="dates">
          <div>{format(parseISO(node.konzertfelder.datum), "dd.MM.yyyy")}, {node.konzertfelder.ort}</div>
          {node.konzertfelder.type && <div>{node.konzertfelder.type}</div>}
        </div>
      </div>
    ))}
          {/* todo */}
<p style={{marginTop: "20px"}}><a href="https://enl.band" target="_blank" rel="noopener">ENL gigs are on enl.band</a></p>




      </div>
      <div className="contentdiv">
          <h2 className={styles.h2heading}>{data.wpPage.historygigs.titelDj}</h2>
        {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

          node.embedFelder.place.toString() === "dj" && (
           
           <div key={node.id} role="listitem" className="embedElem">
               <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
          </div>

          )
          

      ))} 

          {/* todo */}
          <p style={{marginTop: "20px"}}><a href="https://soundcloud.com/olangalactica" target="_blank" rel="noopener">more stuff on Soundcloud</a></p>

        </div>
      <div className="contentdiv">
          <h2 className={styles.h2heading}>{data.wpPage.historygigs.titelProducer}</h2>
          {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

            node.embedFelder.place.toString() === "producer" && (
            
            <div key={node.id} role="listitem" className="embedElem">
                <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
            </div>

            )


            ))} 

          {/* todo */}
        <p style={{marginTop: "20px"}}><a href="https://olan1.bandcamp.com" target="_blank" rel="noopener">more stuff on Bandcamp</a></p>
        </div>
        <div className="contentdiv">
          <h2 className={styles.h2heading}>{data.wpPage.historygigs.titelLiveSets}</h2>
          {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

            node.embedFelder.place.toString() === "livesets" && (
            
            <div key={node.id} role="listitem" className="embedElem">
                <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
            </div>

            )


            ))} 

          {/* todo */}
        <p style={{marginTop: "20px"}}><a href="https://soundcloud.com/olangalactica" target="_blank" rel="noopener">more stuff on Soundcloud</a></p>
        </div>

      </div>



      <div className="zweispaltigWrapper">
          <h2 className={styles.h2heading}>{data.wpPage.historygigs.titelGigHistory}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.historygigs.history }} />
      </div>


    </div>
  </Layout>
  )
}

export const Head = () => <Seo title="DJ + Live Act + Dates | Olan!" />

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
  wpPage(slug: {eq: "gighistory"}) {
    title
    historygigs {
      history
      titelDates
      titelDj
      titelLiveSets
      titelProducer
      titelGigHistory
    }
  }
}
`

export default djPage
