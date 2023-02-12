/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const fetch = require("node-fetch-commonjs");
const fs = require('fs');
const path = require('path');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const responseData = await fetch('https://fairfield-programming.github.io/openlist/licenses/download')
  const responseJson = await responseData.json()

  const storagePath = path.join(process.cwd(), 'src/res/licenses.json')
  fs.writeFileSync(storagePath, JSON.stringify(responseJson));

  responseJson.forEach(element => {
    
    createPage({
      path: `/licenses/${element.id}`,
      component: require.resolve("./src/templates/license.js"),
      context: element,
      defer: true,
    })

  });

}
