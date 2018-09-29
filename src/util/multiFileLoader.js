const _fetchFile = (path, name) => require(path + name);

/**
 * Loads Multiple files from the same folder and returns it as an object
 */
function multiFileLoader(path, files) {
    const filesToExport = {};

    for(const file of files) {
        let buffer = _fetchFile(path, file);
        filesToExport[file] = buffer;
    }

    return filesToExport;
}

module.exports = multiFileLoader;
