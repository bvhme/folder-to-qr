const listFiles = require('./list-files.js')
const fileToQR = require('./file-to-qr.js')

var files = listFiles('./import')

files.forEach((fileName) => fileToQR(fileName))