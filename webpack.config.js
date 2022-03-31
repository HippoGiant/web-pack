const path = require("path");

module.exports = {
    entry: './main_1.js',
    output: {
        filename: 'bundle_public.js',
        // __dirname 取得程式執行位置的實際路徑
        // C:\Users\iii\Desktop\Node.js\web-pack
        path:path.resolve(__dirname, 'public')
        // C:\Users\iii\Desktop\Node.js\web-pack\dist
    }
}