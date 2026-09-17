/*
 * @Author: pikapikapikaori pikapikapi_kaori@icloud.com
 * @Date: 2026-09-17 19:27:42
 * @LastEditors: pikapikapikaori
 * @LastEditTime: 2026-09-17 19:27:45
 */
const fs = require('fs');
const path = require('path');
const terser = require('terser');
const CleanCSS = require('clean-css');

// 用法：node minify.js <源文件夹> [输出文件夹]
// 不传输出文件夹时，默认原地生成 .min.js / .min.css
const srcDir = process.argv[2] || './src';
const outDir = process.argv[3] || srcDir;

async function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await walk(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name);
            if (ext === '.js' && !entry.name.endsWith('.min.js')) {
                await minifyJS(fullPath);
            } else if (ext === '.css' && !entry.name.endsWith('.min.css')) {
                minifyCSS(fullPath);
            }
        }
    }
}

async function minifyJS(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = await terser.minify(code);
    if (result.error) {
        console.error(`JS 压缩失败: ${filePath}`, result.error);
        return;
    }
    const rel = path.relative(srcDir, filePath).replace(/\.js$/, '.min.js');
    const outPath = path.join(outDir, rel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, result.code);
    console.log(`压缩 JS: ${filePath} -> ${outPath}`);
}

function minifyCSS(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    const result = new CleanCSS().minify(code);
    if (result.errors.length) {
        console.error(`CSS 压缩失败: ${filePath}`, result.errors);
        return;
    }
    const rel = path.relative(srcDir, filePath).replace(/\.css$/, '.min.css');
    const outPath = path.join(outDir, rel);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, result.styles);
    console.log(`压缩 CSS: ${filePath} -> ${outPath}`);
}

walk(srcDir).catch(console.error);
