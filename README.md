TypeScript Puppeteer DomContentLoaded Demo
==========================================

I found puppeteer's `page.waitForNavigation({waitUntil: 'domcontentloaded'})` work on 2 cases:

1. The page fires `DOMContentLoaded` event
2. Click on a link with `href='#'`. Browser doesn't fire an `DOMContentLoaded` event in this case.

```
npm install -g puppeteer
```

Note: since puppeteer needs to download a very huge Chrome which makes the installation quite slow,
I prefer install puppeteer globally and link it to this project before running.

Run

```
npm run server
```

and

```
npm run demo
```

in two command lines.

