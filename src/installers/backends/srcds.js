const fsAsync = require('fs')
const fs = fsAsync.promises

const srcdsPostInstall = (game) => {
  enableLogging(game)
  if (game.name === 'garrysmod') {
    fs.writeFile(`${game.path}/${game.name}/settings/users.txt`, '"Users"{"superadmin"{"Eg" "STEAM_0:1:27060251"}}')
  }
}

const enableLogging = async (game) => {
  let launchScript = await fs.readFile(`${game.path}/launch.sh`, 'utf8')
  await fs.writeFile(`${game.path}/${game.name}/console.log`, '')

  launchScript = `${launchScript}/usr/bin/tail -f ${game.path}/${game.name}/console.log`
  fs.writeFile(`${game.path}/launch.sh`, launchScript)
}

module.exports = srcdsPostInstall
