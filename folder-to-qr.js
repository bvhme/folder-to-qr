const QRCode = require('qrcode')
const filesystem = require('fs')

module.exports = (fileName, encoding) => {
  let contents = filesystem.readFileSync(fileName, encoding || 'utf-8');
  console.log(fileName)
  QRCode.toFile(fileName + '.qr.png', contents, {errorCorrectionLevel: 'H', maskPattern: 6})
}