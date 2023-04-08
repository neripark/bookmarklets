const fs = require("fs");
const path = require("path");
const bookmarkletter = require("bookmarkletter").bookmarkletter;

const main = () => {
  const code = fs.readFileSync("src/test.js", 'utf-8');
  const result = bookmarkletter(code);

  fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
  fs.writeFileSync("dist/kintai.min.js", result, (err) => {
    if (err) throw err;
  });
  console.log('ファイルが正常に出力されました。');
}

main();
