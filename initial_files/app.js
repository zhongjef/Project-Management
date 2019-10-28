const NPM_REQUIREMENT = "NPM_RUN_ENV" /*The variable mark that marks the npm run app*/
const NPM_RUN_REQUIREMENT_ERROR_CODE = 10 /*The error code to throw for the env running*/
const NPM_RUN_MSG = `
error code: ${NPM_RUN_REQUIREMENT_ERROR_CODE}, please run with npm script operations,
e.g: npm run app to launch this app
`
const process = require("process");
const _ = require("lodash");
/*checker of complexity 4
if func is a registration function, it'll forward
*/
const npm_checker = (is_npm, func, mounted) => !!func() | 
                                                (is_npm || mounted) ? 
                                                true : process.exit(NPM_RUN_REQUIREMENT_ERROR_CODE);
const app = {
    main: () => {
        /*where the logic lies, write code here*/
        console.log("starting the server...");
    }
}


/*please ignore this, balance checking code*/
{
    require.main == module && 

    new Proxy(app, {
        forward: _.curry(npm_checker),
        mounted: false, /*whether this app is mounted*/
        get (target, key) {
            this.forward(this.run_by_npm())
                    (()=>0 & process.on("exit", code => code == NPM_RUN_REQUIREMENT_ERROR_CODE? 
                                                                console.error(NPM_RUN_MSG)
                                                                : 1))
                    (this.mounted);
            this.mounted = true;
            return target[key];
        },
        run_by_npm: () => (process.argv.length > 3 &&
            process.argv.filter(v => v == NPM_REQUIREMENT).length > 0)
    }).main();
}
