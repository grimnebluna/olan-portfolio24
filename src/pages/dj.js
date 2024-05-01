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
          <h2 className={styles.h2heading}>Dates</h2>






          {/* create a map like above with the graphql query for datelist date and ort */}
          {filteredAndSortedGigs.map(node => (
      <div key={node.id} role="listitem" className="dateContainer">
        <div className="dateTitle">
          {node.konzertfelder.linkurl ? (
            <a href={node.konzertfelder.linkurl} target="_blank">{node.title}</a>
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



      </div>
      <div className="contentdiv">
          <h2 className={styles.h2heading}>DJ</h2>
        {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

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
          {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

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
          {data.allWpContentEmbed.edges.sort((a, b) => {
                // Assuming datum is in a format that can be compared directly, like YYYY-MM-DD
                // Convert to date objects if needed, or handle your specific format
                return new Date(b.node.embedFelder.datum) - new Date(a.node.embedFelder.datum);
              }).map(({node}) => (

            node.embedFelder.place == "livesets" && (
            
            <div key={node.id} role="listitem" className="embedElem">
                <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
            </div>

            )


            ))} 

        <p style={{marginTop: "20px"}}><a href="https://soundcloud.com/olangalactica" target="_blank">more stuff on Soundcloud</a></p>
        </div>

      </div>



      <div className="zweispaltigWrapper">
          <h2 className={styles.h2heading}>Gig History</h2>
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
    historygigs {
      history

    }
  }
}
`

export default djPage
