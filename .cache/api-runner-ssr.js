var plugins = [{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-181959794-2","head":true,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-google-adsense/gatsby-ssr'),
      options: {"plugins":[],"publisherId":"ca-pub-3374742895270655"},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-code-titles","options":{}},{"resolve":"gatsby-remark-shiki","options":{"theme":"min-light"}},{"resolve":"gatsby-remark-autolink-headers","options":{"offsetY":"30","className":"anchor-link","maintainCase":false,"removeAccents":true}},{"resolve":"gatsby-remark-external-links","options":{"target":"_blank","rel":"noopener noreferrer"}},{"resolve":"gatsby-remark-copy-linked-files","options":{"destinationDir":"static/assets","ignoreFileExtensions":["png","jpg","jpeg"]}},{"resolve":"gatsby-remark-check-links","options":{"ignore":[],"exceptions":[]}},{"resolve":"gatsby-remark-images","options":{"maxWidth":1280}},{"resolve":"gatsby-remark-responsive-iframe","options":{"wrapperStyle":"margin-bottom: 1.0725rem"}},"gatsby-remark-smartypants"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"]},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n\t\t\t\t\t{\n\t\t\t\t\t\tsite {\n\t\t\t\t\t\t\tsiteMetadata {\n\t\t\t\t\t\t\t\tsiteUrl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t","feeds":[{"query":"\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tallPosts: allMdx(\n\t\t\t\t\t\t\t\t\tsort: { fields: [frontmatter___modifiedTime], order: DESC }\n\t\t\t\t\t\t\t\t\tfilter: {\n\t\t\t\t\t\t\t\t\t\tfrontmatter: { draft: { ne: true } }\n\t\t\t\t\t\t\t\t\t\tfields: { type: { eq: \"post\" } }\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t) {\n\t\t\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\t\t\thtml\n\t\t\t\t\t\t\t\t\t\t\tfrontmatter {\n\t\t\t\t\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\t\t\t\t\t\tmodifiedTime\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\tfields {\n\t\t\t\t\t\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t","output":"rss.xml","title":"逆引きゴリラ's RSS Feed"}]},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"逆引きゴリラ","short_name":"逆引きゴリラ","start_url":"/","background_color":"#fff","theme_color":"#333","display":"standalone","icon":"static/favicon.png","icon_options":{"purpose":"maskable"},"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0e2fd2de7094ed12eb87a6608bf623bf"},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"sitemap.xml","createLinkInHead":true,"exclude":[],"query":"\n\t\t\t\t\t{\n\t\t\t\t\t\tsite {\n\t\t\t\t\t\t\tsiteMetadata {\n\t\t\t\t\t\t\t\tsiteUrl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tallSitePage {\n\t\t\t\t\t\t\tnodes {\n\t\t\t\t\t\t\t\tpath\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-intl/gatsby-ssr'),
      options: {"plugins":[],"path":"/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/src/intl","languages":[],"defaultLanguage":"ja","redirect":false},
    },{
      plugin: require('/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/node_modules/gatsby-plugin-dark-mode/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
