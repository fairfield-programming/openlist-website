import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
    <Layout>
      <section id="intro" className="max-w-3xl mt-16 p-4 mx-auto">
        <h1 className="text-5xl font-bold text-center m-8 leading-tight">
          Picking an Open-Source or Source-Available License?
        </h1>
        <p className="text-lg font-light text-center leading-relaxed">
          If an open-source project is popular, respected, or well-supported, it most definitely has a license&mdash; telling developers what they can and cannot do with the code.
        </p>
      </section>
      <section className="max-w-5xl mt-16 p-4 mx-auto">
        <h2 className="text-3xl font-black text-center">How would you describe your project?</h2>
        <div className="grid grid-cols-3 mt-8">
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">It's Part of an Existing Community.</h3>
            <p className="text-md font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">It's Simple and Straightforward.</h3>
            <p className="text-md font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">It's a Mixup of Different Developers.</h3>
            <p className="text-md font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mt-16 p-4 mx-auto">
        <h2 className="text-3xl font-black text-center">Can't find what you're looking for?</h2>
        <div className="grid grid-cols-3 mt-8">
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">My project isn't open-source or source-available.</h3>
            <p className="text-md font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">My project isn't software, text, or code.</h3>
            <p className="text-md font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">My project needs a completely custom license.</h3>
            <p className="text-md font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mt-16 p-4 mx-auto">
        <h2 className="text-3xl font-black text-center">Looking for a specific license?</h2>
        <div className="w-full h-24 relative mt-4">
          <input placeholder="Search Here..." className="absolute pl-12 top-0 w-full shadow outline-0 p-4 rounded-2xl font-bold border-2 border-slate-50" />
          <svg className="absolute w-5 top-5 left-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
      </section>
    </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
