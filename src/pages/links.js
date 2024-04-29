import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// import functions to work with dates and date formats:
import { format, parseISO } from "date-fns"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"




const linkPage = ({ data }) => {



// Inside your React component
const filteredAndSortedTree = data.allWpLinkelement.edges
  .map(({ node }) => node)
  .sort((a, b) => {
    const dateA = new Date(a.linktree.date);
    const dateB = new Date(b.linktree.date);
    // sort by date in ascending order:
    return dateB - dateA;
  });






  return(
  <Layout>
    <div className={styles.mainNormal}>



      <div className="linktreeWrapper">
        <div className="linkInner">
            {filteredAndSortedTree.map(node => (
      <a key={node.id} role="listitem" className="linkContainer" href={node.linktree.url} target="_blank"> 
          <div className="dateImage">
            
                  {/* Display the image using GatsbyImage */}
                  {/* but first check if there is an linktree.image */}
                  {node.linktree.image ? (
                    <GatsbyImage image={getImage(node.linktree.image.node.localFile)} alt={node.title} />
                  ) : (
                    <div>&nbsp;</div>
                  )}
                  

          </div>
          {/* get the image from the wordpress content and display it with StaticImage */}

          <div className="dateTitle">
            {node.title}
         </div>
          
      </a>
    ))}

      </div>

      </div>
    </div>
  </Layout>
  )
}

export const Head = () => <Seo title="Linktree | Olan!" />

export const query = graphql`
query {
  allWpLinkelement {
    edges {
      node {
        id
        title
        linktree {
          url
          date
          image {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 200, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export default linkPage
