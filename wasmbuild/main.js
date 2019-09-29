const worker = new Worker('worker.js')
const $input = document.querySelector('input')
const $link = document.getElementById('link')

function arrayBufferToBase64 (buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary)
}

$input.onchange = e => {
  const { files } = $input
  worker.postMessage(files)
  worker.addEventListener('message', e => {
    const blob = new Blob([new DataView(e.data)], { type: 'video/mp4' })
    const url = URL.createObjectURL(blob)
    $link.href = url
    $link.hidden = false
  })
}
