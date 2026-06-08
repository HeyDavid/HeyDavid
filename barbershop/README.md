# Coral Springs Barber Co. — website

A fast, single-page barbershop site built to do one job well: **turn a "barber
near me" search into a booked chair.** No frameworks, no build step, no
dependencies — just `index.html`, one stylesheet, one tiny script, and the SEO
plumbing that makes a local business show up on Google.

> Built as a show-off-ready starting point. Everything that needs to be *real*
> (name, phone, address, booking link) is a single find-and-replace away.

---

## Make it real in 5 minutes

The site ships with placeholder tokens. Replace each token **everywhere it
appears** across all files (`index.html`, `robots.txt`, `sitemap.xml`):

| Token            | Replace with                          | Example                                  |
| ---------------- | ------------------------------------- | ---------------------------------------- |
| `@@BUSINESS@@`   | Shop name (if not "Coral Springs Barber Co.") | `Vic's Barbershop`                |
| `@@PHONE@@`      | Display phone                         | `(954) 555-0142`                         |
| `@@PHONE_HREF@@` | Phone, digits only, +1               | `+19545550142`                           |
| `@@ADDRESS@@`    | Street address                        | `1234 N University Dr, Suite 5`          |
| `@@BOOKING_URL@@`| Booking link (Booksy / Square / Calendly) | `https://booksy.com/...`            |
| `@@DOMAIN@@`     | Live domain                           | `coralspringsbarber.co`                  |

Quick way (run from this folder):

```bash
grep -rl '@@' . | xargs sed -i \
  -e 's/@@PHONE@@/(954) 555-0142/g' \
  -e 's/@@PHONE_HREF@@/+19545550142/g' \
  -e 's|@@ADDRESS@@|1234 N University Dr|g' \
  -e 's|@@BOOKING_URL@@|https://your-booking-link|g' \
  -e 's/@@DOMAIN@@/coralspringsbarber.co/g'
```

Then drop in:
- **Real photos** — replace the `.gallery__tile` placeholders and the barber
  `.barber__placeholder` block with `<img>` tags. Real before/afters are the
  #1 thing that converts browsers into bookings.
- **Real hours, prices, and the barber's actual bio.**

---

## What's already optimized for online presence

This is the part that compounds — it's wired in, not bolted on:

- **LocalBusiness / BarberShop structured data** (JSON-LD in `<head>`) — feeds
  Google's local pack with hours, services, prices, geo and area served.
- **Local-search meta** — `geo.region`, `geo.position`, `ICBM`, city in the
  `<title>` and `<h1>` ("...in Coral Springs, FL").
- **Open Graph + Twitter cards** with a branded share image (`assets/og-image.svg`)
  so links look sharp when texted or posted.
- **`sitemap.xml` + `robots.txt`** ready for Google Search Console.
- **Fast & mobile-first** — no JS framework, lazy-loaded map, sticky tap-to-call
  / book bar on phones, `prefers-reduced-motion` respected. Speed is a ranking factor.
- **Accessible** — skip link, semantic landmarks, alt text, focus states.

### The 30-minute online-presence checklist (do these and you'll outrank most local shops)
1. **Claim the Google Business Profile** — same name/address/phone as this site,
   exactly. Add photos, hours, and the booking link. This is bigger than the website itself.
2. Point the booking link at **Booksy** or **Square Appointments** (free, and they
   handle reminders/no-shows).
3. Submit `sitemap.xml` in **Google Search Console**.
4. Ask every happy client for a **Google review** (link in the Reviews section).
5. Post the work to **Instagram** weekly; link it in the footer.

---

## Run it locally

It's static — just open `index.html`, or:

```bash
cd barbershop
python3 -m http.server 8080   # → http://localhost:8080
```

## Deploy (any of these, all free for a single static site)

- **Vercel:** drag-drop this folder, or `vercel` from the CLI. Set the domain.
- **Cloudflare Pages / GitHub Pages / Netlify:** point at this folder, no build command.

After deploying, set `@@DOMAIN@@` to the live domain and you're done.

---

*No templates, no page-builder bloat. Same kit used for client work.*
