self.importScripts('ffmpeg.js')

onmessage = function (e) {
  const files = e.data
  ffmpeg_run({
    outputDir: '/output',
    inputDir: '/input',
    arguments: [
      '-i', '/input/' + files[0].name,
      '-ss', '00:00:05',
      '-vframes', '1',
      '-q:v',
      '2',
      '/output/01.jpg'
    ],
    files,
  }, (res) => {
    self.postMessage(res[0].data)
  })
}