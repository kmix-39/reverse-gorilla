module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-181959794-2","head":true,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-code-titles","options":{}},{"resolve":"gatsby-remark-shiki","options":{"theme":"min-light"}},{"resolve":"gatsby-remark-autolink-headers","options":{"offsetY":"30","className":"anchor-link","maintainCase":false,"removeAccents":true}},{"resolve":"gatsby-remark-external-links","options":{"target":"_blank","rel":"noopener noreferrer"}},{"resolve":"gatsby-remark-copy-linked-files","options":{"destinationDir":"static/assets","ignoreFileExtensions":["png","jpg","jpeg"]}},{"resolve":"gatsby-remark-check-links","options":{"ignore":[],"exceptions":[]}},{"resolve":"gatsby-remark-images","options":{"maxWidth":1280}},{"resolve":"gatsby-remark-responsive-iframe","options":{"wrapperStyle":"margin-bottom: 1.0725rem"}},"gatsby-remark-smartypants"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#333","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"逆引きゴリラ","short_name":"逆引きゴリラ","start_url":"/","background_color":"#fff","theme_color":"#333","display":"standalone","icon":"static/favicon.png","icon_options":{"purpose":"maskable"},"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"0e2fd2de7094ed12eb87a6608bf623bf"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-intl/gatsby-browser.js'),
      options: {"plugins":[],"path":"/Users/kmical-lights/Documents/GatsbyJS/gorilla_dev/src/intl","languages":[],"defaultLanguage":"ja","redirect":false},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
