# json-store

## What's in this generated project
### The basics
* .eslintrc.js
* .gitignore
* .npmignore
* .npmrc - Setup to allow the package-lock.json and default packages to ~ semver scope.  If the package-lock.json is causing you issues, set it to false in this file.
* server.js - Your main server file.  This is where everything starts from.
* bin/www.js - Script to start the server.
* src/config - Unified configuration system utilizing the [@monsantoit/config](https://artifactory.bayer.com/ui/packages/npm:%2F%2F@monsantoit%2Fconfig) module.
* test/* - Mocha test files
* package.json - Includes dependencies and scripts:
    * ```npm run dev``` - Starts your server locally, picks up changes automatically.
    * ```npm run start``` - Starts your server in production mode. 
    * ```npm run lint``` - Runs the linter.
    * ```npm run lint:fix``` - Runs the linter which will automatically fix issues.
    * ```npm run test``` - Runs the linter, then the mocha tests.
    * ```npm run clean``` - Cleans up the public folder.





### REST
There has been a basic REST endpoint setup in *src/api/index.js*, plus a swagger configuration created.  When you start the server, the console output will state the url for the swagger doc.



## Next Steps


### Fargate

If you deploy to fargate, you will probably need to set up the project to deploy. There are a few helper libraries to get your application into fargate. Some of the more general use-case ones include:
* fg-deploy (https://github.com/bayer-int/pipeline-aws-automation#generate-fg-deploy-nextgen-config-file)
* street-deploy (https://lab-docs.velocity-np.ag/onboarding/ci-cd.html#)
* Spectrum (https://github.com/bayer-int/spectrum-cli)




## Documentation

Full documentation for the @monsantoit/config can be found at [https://config.phoenix-tools-np.io](https://config.phoenix-tools-np.io/).
