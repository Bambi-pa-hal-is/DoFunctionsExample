// const ffmpeg = require('@ffmpeg-installer/ffmpeg');
// console.log(ffmpeg.path, ffmpeg.version);

function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
