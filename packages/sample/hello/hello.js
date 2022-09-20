const ffmpeg = require('@ffmpeg-installer/ffmpeg');

function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": ffmpeg.path}
  }

exports.main = main
