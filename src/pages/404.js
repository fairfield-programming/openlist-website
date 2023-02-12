import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <section className="w-full h-full my-auto">
      <h1 className="text-5xl font-bold text-center mt-48">Page Not Found</h1>
      <p className="text-xl font-light text-center mx-auto max-w-xl mt-4">We couldn't find the page that you were looking for. It may have been deleted, or we could have just lost it. 🤷</p>
      <p className="text-xl font-bold text-center mx-auto max-w-xl mt-16">
        <Link class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:cursor hover:underline" to="/">Go Back Home</Link>
      </p>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Not Found | OpenList" />

export default NotFoundPage
