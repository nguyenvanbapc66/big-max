const fs = require('fs')
const glob = require('glob')
const { resolve } = require('path')

async function copy(path1, path2) {
  const allPaths = glob.sync('**', { cwd: path1 })
  console.log(allPaths)
  let totalBytes = 0, allFilesPath = [], allDirectoriesPath = []
  allPaths.forEach(path => {
    const status = fs.statSync(resolve(path1, path))
    if (status.isFile()) {
      allFilesPath.push(path)
      totalBytes += status.size
    } else {
      allDirectoriesPath.push(path)
    }
  })
  console.log('All Directories:', allDirectoriesPath)
  console.log('All Files:', allFilesPath)
  console.log('Total Bytes:', totalBytes)
  console.log('Copying...')
  let copiedBytes = 0, highWaterMark = 1024 * 100, processCompleted = 0
  allDirectoriesPath.forEach(path => {
    fs.mkdirSync(resolve(path2, path))
  })
  try {
    for (const path of allFilesPath) {
      console.log('Copying file: ', resolve(path1, path));
      const writeStream = fs.createWriteStream(resolve(path2, path), { highWaterMark })
      await new Promise((rs, rj) => {
        fs.createReadStream(resolve(path1, path), { highWaterMark }).on('data', (data => {
          writeStream.write(data)
          copiedBytes += data.byteLength
          const p = Math.floor(copiedBytes / totalBytes * 100)
          if (p > processCompleted) {
            console.log(p, '%')
            processCompleted = p
          }
        })).once('end', rs).once('error', rj)
      })
      writeStream.end()
    }
    console.log('Done!!!');
  } catch (error) {
    console.error('Error:', error)
  }
}

copy(resolve(process.cwd(), 'btvn/path1'), resolve(process.cwd(), 'btvn/path2'))