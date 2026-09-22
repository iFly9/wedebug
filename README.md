# WeDebug — React + Vite website

## 1. Install
```bash
npm install
```

## 2. Run locally
```bash
npm run dev
```

## 3. Build
```bash
npm run build
```

## 4. Before going live
Edit `src/App.jsx`:
- Replace the demo WhatsApp number in `whatsapp`
- Replace `hello@wedebug.in` if you want another inbox
- Replace sample portfolio cards with your real projects
- Update service text/pricing as your business grows

## 5. Deploy to Netlify
Build command: `npm run build`
Publish directory: `dist`

`netlify.toml` is already included.

## 6. Connect wedebug.in
In Netlify:
Site → Domain management → Add a domain → Add a domain you already own.

Then follow the DNS instructions Netlify shows for your registrar.

## Suggested next improvements
- Add real portfolio screenshots
- Add a real enquiry form using Netlify Forms or EmailJS
- Add Google Analytics / Search Console
- Add a privacy policy and terms page
- Add favicon and final brand logo
