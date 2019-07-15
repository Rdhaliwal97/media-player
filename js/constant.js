const { remote } = require("electron");
const editJsonFile = require("edit-json-file");
const path = require('path');
const rootPath = remote.app.getPath('userData');
const dbPath = path.resolve(rootPath, 'db');
const installRootPath = process.cwd();
const mm = require('music-metadata');
const util = require('util')
const fs = require('fs')