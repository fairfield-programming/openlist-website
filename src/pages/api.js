import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import licenses from "../res/licenses.json"

const baseUrl = `https://fairfield-programming.github.io/openlist`;
const apiEndpoints = [
    {
        title: "Get All Licenses",
        url: "/licenses",
        description: "This route retrieves an array of all the licenses in our database, good for building dropdowns or license-selection areas. If you need more verbose information about all of the licenses at once, we suggest you use the download endpoint.",
        baseline: JSON.stringify(
            licenses.filter((n, i) => i < 5).map(({ id, name, since }) => {
                
                return {
                    id,
                    name,
                    url: `${baseUrl}/licenses/${id}`,
                    since
                }
            
            }), 
        null, 4),
        support: [
            "xml",
            "json",
            "yaml"
        ]
    },
    {
        title: "Get License Information",
        description: "When you need to retrieve information about a specific license in our database, use this endpoint. The response data will be all of the stored information that we have on the license, for computed data, please use the computed endpoint.",
        url: "/licenses/:id",
        parameters: [
            {
                name: "id",
                default: "mit"
            }
        ],
        baseline: JSON.stringify(licenses.filter((n, i) => n.id == "mit")[0], null, 4),
        support: [
            "xml",
            "json",
            "yaml"
        ]
    },
    {
        title: "Get Raw License Data",
        description: "This endpoint allows for the retrieval of the license body in a raw form. In this form, any optional parts will be included and parameters will be demarcated as the parameter name surrounded with less than (<) and greater than (>) signs.",
        url: "/licenses/:id/raw",
        baseline: licenses.filter((n, i) => n.id == "mit")[0].body,
        support: [
            "txt",
            "md",
            "html"
        ]
    },
    {
        title: "Get Matchbox Regex",
        description: "If you need to detect what license a project is using, we offer a labeled list of regex statements– allowing you to match a license to its text (even if it's modified).",
        url: "/regex",
        support: [
            "xml",
            "json",
            "yaml"
        ]
    }
];

const IndexPage = () => (
    <Layout>
      <section id="intro" className="max-w-3xl mt-16 p-4 mx-auto">
        <h1 className="text-5xl font-bold text-center m-8 leading-tight">
          Do you run a website, tool, or app, and need license info?
        </h1>
        <p className="text-lg font-light text-center leading-relaxed">
          For projects like yours, we built a high-availability, public API&mdash; enabling fast and easy access for any developer, team, or organization. 
        </p>
      </section>
      {
        apiEndpoints.map(({ title, support, description, url, baseline }) => 
        <section className="max-w-5xl mt-16 p-4 mx-auto">
          <h2 className="text-3xl font-black text-left">{ title }</h2>
          <div className="md:grid grid-cols-2 mt-2 gap-4">
            <div>
                <h3 className="text-xl font-bold mb-2">{ 
                    support.map(i => <Link target={"_blank"} className="hover:underline" to={`${baseUrl}${url}.${i}`}>{i}</Link>).reduce((accu, elem) => {
                        return accu === null ? [elem] : [...accu, " • ", elem]
                    }, null)
                }</h3>
                <p className="text-md font-light">{ description }</p>
            </div>
            <div className="bg-slate-50 rounded-lg overflow-hidden">
                <div className="p-2 bg-slate-100 font-mono">
                    { url }
                </div>
                <div className="max-h-80 overflow-scroll p-2">
                    <pre>
                        {
                            baseline
                        }
                    </pre>
                </div>
            </div>
          </div>
        </section>)
      }
    </Layout>
)

export const Head = () => <Seo title="Public API" />

export default IndexPage
