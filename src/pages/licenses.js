import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LicenseListItem from "../components/licenseListItem"

const IndexPage = () => {

    const licenses = require('../res/licenses.json')
    const [ search, setSearch ] = React.useState("");
    
    return <Layout>
      <main>
        <section className="max-w-5xl mt-16 p-4 mx-auto">
          <h2 className="text-5xl font-black text-center">Find Any License in Minutes.</h2>
          <div className="w-full h-24 relative mt-4">
            <input value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Search Here..." className="absolute pl-12 top-0 w-full shadow outline-0 p-4 rounded-2xl font-bold border-2 border-slate-50" />
            <svg className="absolute w-5 top-5 left-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
        </section>
        <section className="max-w-6xl mt-16 p-4 mx-auto">
            {
              // If no search query, just show the first 40 results
              search == "" ? 
                licenses.filter((n, i) => i < 40).map(i => LicenseListItem(i)) : 
                licenses.filter((n, i) => n.name.toUpperCase().includes(search.toUpperCase())).map(i => LicenseListItem(i))
            }
        </section>
      </main>
    </Layout>
}

export const Head = () => <Seo title="Licenses" />

export default IndexPage
