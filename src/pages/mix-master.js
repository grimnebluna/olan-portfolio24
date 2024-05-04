import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const mixmasterPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>

            {/* Mixing And Mastering */}
      <h2 className={styles.h2heading}>{data.wpPage.title}</h2>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">
               <div dangerouslySetInnerHTML={{ __html: data.wpPage.mixmaster.mixmastertext }} />
      </div>

      <div className="contentdiv">
               <div dangerouslySetInnerHTML={{ __html: data.wpPage.mixmaster.mixmastertextzwei }} />
        </div>
      
      <div className="contentdiv"> 

            {/* Mastering */}
      <h2 className={styles.h2heading}>{data.wpPage.mixmaster.masteringtitle}</h2>
        {data.allWpContentEmbed.edges.map(({node}) => (

          /* find out the data type of node.embedFelder.place */



          node.embedFelder.place.toString() === "master" && (
           
           <div key={node.id} role="listitem" className="embedElem">
               <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
          </div>

          )
          

      ))} 

        </div>
        <div className="contentdiv">

            {/* Mixing g */}
          <h2 className={styles.h2heading}>{data.wpPage.mixmaster.mixingtitle}</h2>
          {data.allWpContentEmbed.edges.map(({node}) => (

            node.embedFelder.place.toString() === "mix" && (
            
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

export const Head = () => <Seo title="Mixing + Mastering | Olan!" />

export const query = graphql`
query  {
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
  wpPage(slug: {eq: "mixingmastering"}) {
    title
    mixmaster {
      mixingtitle
      masteringtitle
      mixmastertext
      mixmastertextzwei
    }
  }
}
`

export default mixmasterPage
