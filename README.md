# Crofton Books — online shelf

Independent bookshop site for **Crofton Books in Brockley** (315 Brockley Road, London SE4 2QZ).

Inspired by the quiet product-grid layout of [Tenderbooks](https://tenderbooks.co.uk/), adapted for:

- Online **display** of books
- **Email reserve** requests (no cart checkout, no accounts)
- Antique open-book page background

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure

Edit `src/data/store.ts`:

- `reserveEmail` — inbox that receives reserve requests
- hours, phone, social links

Edit `src/data/books.ts` to replace the sample shelf with live stock.

## Background textures

Bundled under `public/textures/`:

| File | Source |
|------|--------|
| `antique-pages.jpg` | Wikimedia Commons — vintage open book pages (CC BY 2.0, D Sharon Pruitt) |
| `old-paper.jpg` | Unsplash parchment texture |
| `open-book.jpg` / `parchment.jpg` | Unsplash alternatives |

### Similar free resources

- [Wikimedia: Dark Damaged Old Vintage Book Paper Pages](https://commons.wikimedia.org/wiki/File:Dark_Damaged_Old_Vintage_Book_Paper_Pages_Free_High_Resolution_Wallpaper_Texture_Creative_Commons_(8077075546).jpg)
- [EveryTexture — old book page](https://everytexture.com/everytexture-com-stock-paper-texture-00081/)
- [Unsplash — old paper textures](https://unsplash.com/s/photos/old-paper-texture)
- [Hippopx parchment (public domain)](https://www.hippopx.com/en/seamless-texture-tileable-book-hard-cover-seamless-texture-cover-25240)

## Build

```bash
npm run build
npm start
```
