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
        <div className="grid md:grid-cols-3 md:grid-rows-1 md:gap-0 grid-rows-3 gap-4 mt-8">
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">It's Part of an Existing Community.</h3>
            <p className="text-md font-light">Each community has its own licenses preferences. We are compiling these preferences but since it isn't ready, we recommend looking at similar projects.</p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">It's Simple and Straightforward.</h3>
            <p className="text-md font-light">In terms of simple and permissive licenses, there are three favorites: <a className="text-primary hover:underline" href='/licenses/unlicense' target="_blank">the Unlicense</a>, the <a className="text-primary hover:underline" href='/licenses/0bsd' target="_blank">BSD-style licenses</a>, and <a className="text-primary hover:underline" href='/licenses/mit' target="_blank">MIT license</a>.</p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">It's a Mixup of Different Developers.</h3>
            <p className="text-md font-light">For projects that want constant additions, the <a className="text-primary hover:underline" href='/licenses/agpl-3.0' target="_blank">GNU General Public License</a> or <a className="text-primary hover:underline" href='/licenses/mpl-2.0' target="_blank">Mozilla Public License</a> are probably for you.</p>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mt-16 p-4 mx-auto">
        <h2 className="text-3xl font-black text-center">Can't find what you're looking for?</h2>
        <div className="grid md:grid-cols-3 md:grid-rows-1 md:gap-0 grid-rows-3 gap-4 mt-8">
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">I have a license and want to submit it..</h3>
            <p className="text-md font-light">If you have written a license and want to submit it to the OpenList, please submit it through our <a className="text-primary hover:underline" href="https://github.com/fairfield-programming/openlist/issues/new?template=submit-a-license.md" target="_blank">Github Issues page</a>.</p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">My project isn't software, text, or code.</h3>
            <p className="text-md font-light">There are a number of licenses that are for art, music, or other creative assets. The most popular are the <a className="text-primary hover:underline" href="/licenses/cc-by-3.0-igo" target="_blank">Creative Commons licenses.</a></p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold mb-2">My project needs a completely custom license.</h3>
            <p className="text-md font-light">We are currently working on creating a license generator for OpenList, giving you full control of your project.</p>
          </div>
        </div>
      </section>
    </Layout>
)

export const Head = () => <Seo title="FPA OpenList" />

export default IndexPage
