import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = ({ pageContext }) => {

  const { name, since, creator, description, body } = pageContext

  return <Layout>
    <section className="max-w-5xl mt-16 p-4 mx-auto">
      <h2 className="text-4xl font-black">{ name }</h2>
      {
        [
          since ?? <p>Since {since}</p>,
          creator ?? <p>By {creator}</p>
        ]
      }
    </section>
    <section className="max-w-5xl p-4 mx-auto">
      <p>{ description }</p>
    </section>
    <section className="max-w-5xl p-4 mx-auto">
      <div className="bg-slate-50 rounded-lg my-8 overflow-hidden">
        <div className="w-ful bg-slate-100 p-1 flex justify-end items-end gap-1">
          <Link className="hover:bg-slate-200 hover:cursor-pointer p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
              <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
            </svg>
          </Link>
          <Link className="hover:bg-slate-200 hover:cursor-pointer p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
          </Link>
        </div>
        <pre className="break-words whitespace-pre-wrap p-4">
          {body}
        </pre>
      </div>
    </section>
  </Layout>
}

export const Head = ({ pageContext }) => {

  const { name, since, creator, description, body } = pageContext
  
  return <Seo title={`${name} | OpenList`} description={description || body} />

}

export default UsingDSG
