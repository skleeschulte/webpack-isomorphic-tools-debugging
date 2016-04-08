# webpack-isomorphic-tools-debugging
Demonstration of Error: Cannot find module './Abc.css'

    npm install
    npm run transpile
    npm run webpack
    npm run server

Output:

    [server] setting up webpack-isomorphic-tools
    [webpack-isomorphic-tools] [debug] instantiated webpack-isomorphic-tools v2.2.44
     with options {
      "debug": true,
      "webpack_assets_file_path": "C:\\dev\\project_root\\transpiled\\webpack\\webpa
    ck-assets.json",
      "webpack_stats_file_path": "C:\\dev\\project_root\\transpiled\\webpack\\webpac
    k-stats.json",
      "assets": {
        "images": {
          "extensions": [
            "png",
            "jpg",
            "gif",
            "ico",
            "svg"
          ]
        },
        "styles": {
          "extensions": [
            "css"
          ]
        }
      }
    }
    [webpack-isomorphic-tools] [debug] entering production mode
    [webpack-isomorphic-tools] [debug] registering require() hooks for assets
    [webpack-isomorphic-tools] [debug]  registering a require() hook for *.png
    [require-hook] [debug] Hooking into *.png files loading
    [webpack-isomorphic-tools] [debug]  registering a require() hook for *.jpg
    [require-hook] [debug] Hooking into *.jpg files loading
    [webpack-isomorphic-tools] [debug]  registering a require() hook for *.gif
    [require-hook] [debug] Hooking into *.gif files loading
    [webpack-isomorphic-tools] [debug]  registering a require() hook for *.ico
    [require-hook] [debug] Hooking into *.ico files loading
    [webpack-isomorphic-tools] [debug]  registering a require() hook for *.svg
    [require-hook] [debug] Hooking into *.svg files loading
    [webpack-isomorphic-tools] [debug]  registering a require() hook for *.css
    [require-hook] [debug] Hooking into *.css files loading
    [server] webpack-isomorphic-tools setup finished, starting server
    module.js:341
        throw err;
        ^
    
    Error: Cannot find module './Abc.css'
        at Function.Module._resolveFilename (module.js:339:15)
        at Function._module3.default._resolveFilename (C:\dev\project_root\node_modu
    les\require-hacker\babel-transpiled-modules\require hacker.js:403:34)
        at Function.Module._load (module.js:290:25)
        at Module.require (module.js:367:17)
        at require (internal/module.js:16:19)
        at Object.<anonymous> (C:\dev\project_root\transpiled\components\Abc.js:3:1)
    
        at Module._compile (module.js:413:34)
        at Object.Module._extensions..js (module.js:422:10)
        at Module.load (module.js:357:32)
        at Function.Module._load (module.js:314:12)
