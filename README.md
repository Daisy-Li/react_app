#script

``` json
"scripts": {
  "start:http": "dotenv -e .env.dev node scripts/start.js",
  "start:https": "dotenv -e .env.dev cross-env HTTPS=true node scripts/start.js",
  "build": "dotenv -e .env.prod node scripts/build.js",
  "build:prod": " dotenv -e .env.prod  node scripts/build.js",
  "build:yufa": " dotenv -e .env.yufa  node scripts/build.js",
  "commit": "git add . && git cz && git push",
  "check": "node scripts/check.js",
  "release:prod": "rm -rf node_modules/.cache && node scripts/check.js && node scripts/gh-pages.js",
  "release:yufa": "rm -rf node_modules/.cache && node scripts/gh-pages-yufa.js",
  "deploy-yufa": "yarn build:yufa && yarn release:yufa",
  "analyze": "yarn build && source-map-explorer 'build/static/js/*.js'",
  "generate": "node scripts/generateLogDataFile.js"
},
```