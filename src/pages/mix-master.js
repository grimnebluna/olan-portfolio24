import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const mixmasterPage = ({ data }) => (
  <Layout>
    <div className={styles.mainNormal}>
      <h2 className={styles.h2heading}>Mixing and mastering services</h2>
      <div className="oz-wrapper-content">
        
        <div className="contentdiv">
               <div dangerouslySetInnerHTML={{ __html: data.wpPage.mixmaster.mixmastertext }} />
      </div>

      <div className="contentdiv">
               <div dangerouslySetInnerHTML={{ __html: data.wpPage.mixmaster.mixmastertextzwei }} />
        </div>
      
      <div className="contentdiv">

      <h2 className={styles.h2heading}>Mastering</h2>
        {data.allWpContentEmbed.edges.map(({node}) => (

          node.embedFelder.place == "master" && (
           
           <div key={node.id} role="listitem" className="embedElem">
               <div dangerouslySetInnerHTML={{ __html: node.embedFelder.embedcode }} />
          </div>

          )
          

      ))} 

        </div>
        <div className="contentdiv">
          <h2 className={styles.h2heading}>Mixing</h2>
          {data.allWpContentEmbed.edges.map(({node}) => (

            node.embedFelder.place == "mix" && (
            
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
    mixmaster {
      mixmastertext
      mixmastertextzwei
    }
  }
}
`

export default mixmasterPage
