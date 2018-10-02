/**
 * Loads Multiple files from the same folder and returns it as an object
 */
const multiFileLoader = (path, files) => {
    const filesToExport = {};

    for(const file of files) {
        let buffer = require(path + file);
        filesToExport[file] = buffer;
    }

    return filesToExport;
}

module.exports = multiFileLoader;
