// Lossy delivery copies only; original generated PNGs are never modified.
// Usage: node scripts/build-cg-previews.mjs [absolute path to sharp package]
import {createRequire} from 'node:module';
import {readdir,mkdir,stat} from 'node:fs/promises';
import {dirname,resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const require=createRequire(import.meta.url);
const sharp=require(process.argv[2]||'sharp');
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=join(root,'public/assets/romance-cg'),out=join(source,'preview');
await mkdir(out,{recursive:true});
const names=(await readdir(source)).filter(name=>name.endsWith('.png')).sort();
let original=0,preview=0;
for(let start=0;start<names.length;start+=4){
 await Promise.all(names.slice(start,start+4).map(async name=>{
  const src=join(source,name),dest=join(out,name.replace(/\.png$/,'.webp'));
  await sharp(src).resize({width:1440,withoutEnlargement:true}).webp({quality:86,effort:5}).toFile(dest);
  original+=(await stat(src)).size;preview+=(await stat(dest)).size;
 }));
}
console.log(JSON.stringify({count:names.length,originalMB:+(original/1048576).toFixed(2),previewMB:+(preview/1048576).toFixed(2),savedPercent:+((1-preview/original)*100).toFixed(1)}));
