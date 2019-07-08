const fs = require('fs');
const CommonJsRequireDependency = require("webpack/lib/dependencies/CommonJsRequireDependency");

const getSiblingStylePath = (target, filename) => {
    return target + '/' + filename;
}

class Plugin {
    constructor(props) {
        Object.assign(this, props);
    }

    apply(compiler) {
        let fileName = this.fileName;
        let sets = new Set();

        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('buildModule', (module) => {
                let filepath = module.context;
                if (!sets.has(filepath)) {
                    sets.add(filepath);
                    let absPath = getSiblingStylePath(filepath, fileName)
                    if (fs.existsSync(absPath)) {
                        module.dependencies.push(
                            new CommonJsRequireDependency(absPath)
                        )
                    }
                }
            })
        })

        compiler.plugin('done', () => {
            sets = new Set();
        })
    }
}
module.exports = Plugin;