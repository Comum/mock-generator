const fs = require("fs");
const path = require("path");

const fetchDirectories = (mainSource) => {
    const isDirectory = (source) => fs.lstatSync(source).isDirectory();
    const getDirectories = (source) =>
        fs
            .readdirSync(source)
            .map((name) => path.join(source, name))
            .filter(isDirectory);

    return getDirectories(mainSource);
};

const getLastFolder = (directories) => {
    const lastFolder = [];

    directories.forEach((dir) => {
        const folders = dir.split("/");
        const foldersLength = folders.length;

        lastFolder.push(folders[foldersLength - 1]);
    });

    return lastFolder;
};

const getFilesInFolder = (folder) => {
    return new Promise((resolve, reject) => {
        fs.readdir(folder, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
};

const getAllSchemasInFolders = (folders) => {
    const structure = {
        folders: []
    };
    const folderLength = folders.length;

    return new Promise((resolve, reject) => {
        folders.forEach((folder, index) => {
            let files = [];
            
            getFilesInFolder("./responses/" + folder + "/schemas")
                .then((response) => {
                    response.forEach((file) => {
                        files.push(file.split('.json')[0]);
                    });
    
                    structure.folders.push({
                        folder,
                        files
                    });

                    if ((index + 1) === folderLength) {
                        resolve(structure);
                    }
                })
                .catch((err) => {
                    reject();
                });
        });
    });
}

module.exports = {
    fetchDirectories,
    getLastFolder,
    getFilesInFolder,
    getAllSchemasInFolders
};
