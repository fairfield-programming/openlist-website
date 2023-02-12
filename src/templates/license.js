import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = ({ pageContext }) => {

  const { name, since, creator, body } = pageContext

  return <Layout>
    <section className="max-w-5xl mt-16 p-4 mx-auto">
      <h2 className="text-4xl font-black">{ name }</h2>
      {
        [
          since ?? <p>Since {since}</p>,
          creator ?? <p>By {creator}</p>
        ]
      }
      <code className="">
        <pre className="break-words whitespace-pre-wrap">
          {body}
        </pre>
      </code>
    </section>
  </Layout>
}

export const Head = () => <Seo title="Using DSG" />

export default UsingDSG
