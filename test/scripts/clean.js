const fs = require('fs')
const path = require('path')

/**
 * See if anything lives in the dist directory. If yes, wipe folder of its contents
 *
 * @return {array} containing tsconfig.json of the target configuration
 */
 const cleanDistDirectory = async () => {
    await new Promise((resolve,reject) => {
        fs.readdir(path.join(__dirname, "../dist"),
        { withFileTypes: true },
          (err, files) => {
              if (err) {
                  console.log(err)
                  return resolve()
                }
              if (!files || files == undefined) return resolve()

              for (const file of files) {
                  if (file.isFile()) fs.unlink(path.join(__dirname, "../dist", file.name), err => {

                    if (err) console.log(err);
                });
                if (file.isDirectory()) fs.rm(path.join(__dirname, "../dist", file.name), { recursive: true }, err => {
                    if (err) console.log(err);
                });
            }

            resolve()
          }
    )})
}

cleanDistDirectory()