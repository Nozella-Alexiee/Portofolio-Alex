import fs from 'node:fs'

const css = fs.readFileSync(new URL('../public/fonts/original.css', import.meta.url), 'utf8')
const blocks = css.split('@font-face').slice(1)
const chosen = []
const seen = new Set()

for (const block of blocks) {
  const family = block.match(/font-family: '([^']+)'/)?.[1]
  const style = block.match(/font-style: (\w+)/)?.[1]
  const url = block.match(/src: url\((https:[^)]+\.woff2)\)/)?.[1]
  const isLatin = block.includes('U+0000-00FF')
  if (!family || !style || !url || !isLatin) continue
  const name = `${family.toLowerCase().replaceAll(' ', '-')}-${style}.woff2`
  if (seen.has(name)) continue
  seen.add(name)
  chosen.push({ family, style, url, name })
}

for (const font of chosen) {
  const res = await fetch(font.url)
  if (!res.ok) throw new Error(`Failed ${font.url}: ${res.status}`)
  const buffer = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(new URL(`../public/fonts/${font.name}`, import.meta.url), buffer)
  console.log(font.name, buffer.length)
}

const faces = chosen
  .map((font) => {
    const weights = font.family === 'Instrument Serif' ? '400' : font.family === 'Instrument Sans' ? '400 700' : '400 700'
    return `@font-face {
  font-family: '${font.family}';
  font-style: ${font.style};
  font-weight: ${weights};
  font-display: swap;
  src: url('/fonts/${font.name}') format('woff2');
}`
  })
  .join('\n\n')

fs.writeFileSync(new URL('../public/fonts/fonts.css', import.meta.url), faces + '\n')
console.log('Wrote fonts.css')
