# Ha Giang Loop – Nov 2026

## Trip basics
- 2 people (me + a friend), based in Singapore.
- Land in Hanoi Thu 26 Nov 2026, evening.
- Mon 30 Nov 2026: work remotely from a Hanoi hotel, late check-out, fly back to Singapore late afternoon.
- Self-ride (no easy rider), self-organised, no package:
  1. Bikes from one rental shop
  2. Hanoi <-> Ha Giang buses from another provider
  3. Homestays/meals booked ourselves (Booking.com / Agoda)

## Saved places (Google Maps)
- Đồng Văn: https://maps.app.goo.gl/HXNP1BiPCLHgdj5f9 (name not yet identified)
- Mèo Vạc: https://maps.app.goo.gl/Yqc2HqGveYrHaXkx5 = Voi Hostel Mèo Vạc
- Du Già: https://maps.app.goo.gl/96WHjxjz1SQRj4q99 = Local homestay Du Già
- Only 2 nights on the loop: sleep Đồng Văn + Du Già. Mèo Vạc (Voi Hostel) = lunch/coffee stop.

## Draft itinerary
- **Thu 26:** Land Hanoi → night sleeper/cabin bus (~21:00–22:00) to Ha Giang (6–7 h). Bằng Phấn can pick up at Nội Bài airport.
- **Fri 27:** Arrive HG ~04:00–05:00, rest/breakfast, pick up bikes → Quản Bạ Heaven Gate & Fairy/Twin Mountains → Yên Minh (lunch) → Thẩm Mã Pass → Vương Palace → sleep Đồng Văn.
- **Sat 28:** (Optional Lũng Cú flagpole early) → Mã Pí Lèng Pass (early) → Nho Quế river boat (Tu Sản canyon) → Mèo Vạc lunch at Voi Hostel → sleep Du Già (arrive before dark, rough road).
- **Sun 29:** Du Già waterfall early → ride back to HG (~3 h), return bikes ~12:30 → Bằng Phấn limousine ~13:00–14:00 → Hanoi ~20:00 → check in to work-friendly hotel.
- **Mon 30:** Work remotely from the hotel (SG is +1h, so 9:00 SGT = 8:00 Hanoi). Late check-out → airport → late-afternoon flight HAN → SIN.

## Sunday-night hotel (to book)
- Only my friend works on Monday.
- Needs: one desk + good chair, fast reliable Wi-Fi, late check-out.
- Location: near Nội Bài airport.
- Budget: US$50–100 per night.
- Room: one room, two beds (twin).
- Late check-out needed until ~17:00 (Scoot ~19:50 flight).
- Shortlist (reviews checked Oct 2026 – no slow Wi-Fi complaints found at any of the 3):
  - **Noi Bai Boutique Hotel – top pick.** 4★, ~7 min to airport. Booking.com 8.6, Wi-Fi score 9.5. Desk in rooms, advertises soundproofing. Note: may now be listed as "S79 Noi Bai Airport Hotel" on Expedia.
  - Blue Sky Noi Bai Hotel & Pool – Booking.com 8.8, one review says "good wifi". Downside: several reviews say thin walls/noise (bad for calls).
  - Paragon Noi Bai Hotel & Pool – Booking.com 8.0, Wi-Fi score 8.8. Older rooms; one Oct 2026 review complains about cleanliness.
- Decision: Noi Bai Boutique Hotel. No pre-booking message – assume twin room, desk, Wi-Fi and late check-out are fine.

## Rooms (all bookings)
- Always one room with two beds (twin).

## Flight (to book)
- Late-afternoon or evening HAN → SIN on Mon 30 Nov. No latest landing time. Specific flight TBD.
- Options found (times to confirm for 30 Nov):
  - Scoot ~15:20.
  - Singapore Airlines SQ193 ~18:25 → lands ~23:05 SGT.
  - Scoot ~19:50–20:00 → lands after midnight. **Chosen (cheaper).**
- Flight is ~3h20, SG is +1h.

## Bike rental (Ha Giang city)
- **QT Motorbikes** (qtmotorbikesandtours.com.vn), per day: Honda Blade/Sirius 110cc semi-auto 180k VND; Honda Future 125cc 250k; Honda XR150 550k. Includes helmets, bungees, dry bags, 24h support. Damage insurance +80–250k. Passport as deposit. They say licence + IDP required – ask if they'll rent on a French licence only.
- Alternatives: Bong Hostel, Style Motorbikes.
- Plan: stick to ≤125cc.

## Buses
- **Bằng Phấn** (xebangphan.vn): 12+ departures/day each way. Cabin sleeper ~470k VND, sleeper ~320k, limousine seats for daytime.
- Stops: 156 Trần Quang Khải (Old Quarter), Mỹ Đình, Nội Bài airport. HG office: 100 Trần Phú.
- Book via Baolau.com (international cards) or Vexere.

## Licence
- Vietnam only accepts 1968 Vienna Convention IDPs with motorbike category A. 1949 IDPs (US, Canada, Australia, possibly Singapore) are NOT valid.
- Friend: has an IDP – check it's 1968-convention with "A".
- Me: French licence only. France issues 1968 IDPs – can get one if my licence has category A. Apply ASAP.
- Riding without one: fine ~2–4M VND (≤125cc) or 6–8M VND + possible impound (>125cc). Travel insurance likely won't cover accidents.

## Weather / packing (late Nov)
- Dry season, clear views, cold mornings at altitude (often <10°C).
- Bring warm layers, gloves, rain shell.
- Possible tail end of buckwheat flower season.

## Website (trip plan for friend's feedback)
- Purpose: send to friend for a yes before booking anything. Deploy via GitHub + Vercel.
- GitHub: https://github.com/FA31000/Ha-Giang-2026 (branch `main`). Vercel: not set up yet.
- Files: `index.html`, `style.css`, `script.js`, `routes.js` (map lines), `images/` (photos). Plain HTML, no build step. Tab layout based on the Japan 2026 site (https://japan-2026-beige-eight.vercel.app/).
- Design: Vietnamese style – lacquer red, gold, jade, indigo, rice-paper background; woven H'mong-style stripe under the header, on day cards and footer. Fonts: Be Vietnam Pro + Playfair Display (Google Fonts). Every tab opens with a photo banner of the region.
- Language: English. Budget in SGD, per person, everything included (estimates, 20,000 VND = 1 SGD). Total is calculated in `script.js` from the budget list (~SGD 580).
- Tabs (switch via `#overview`, `#days`, `#sleep`, `#budget`, `#book`, `#licences`):
  - Overview – hero photo (Nho Quế river), key numbers, **route map**, list of legs with km + hours.
  - Day by day – Thu 26 to Mon 30 Nov. Photos of the sights each day, and every bus/bike/boat/taxi leg with km and time (bus/bike/boat pills). Daily riding total.
  - Where you sleep – bus, Đồng Văn, Du Già, Noi Bai Boutique, + Voi Hostel lunch stop, with photos.
  - Budget – table by group with total.
  - Book – booking order (nothing booked yet).
  - Licences – IDP rules, fines.
  - (Before you go tab removed.)
- Overnight stops on the maps: gold square bed marker + always-visible label ("Fri night · Đồng Văn", "Sat night · Du Già"). Legend under the overview map.
- Day-by-day maps: only the 3 bike days (Fri, Sat, Sun) have a small map, showing only that day's ride and stops. Day 1 and Day 5 have no map. On the right of the text on wide screens, under it below 900px. Maps are built when the tab is first opened.
- All maps show the bike loop only: no buses, no Hanoi. Zoomed on the- Map: Leaflet + OpenTopoMap terrain tiles. Lines follow the real roads (fetched once from OSRM and saved in `routes.js`; a Mậu Duệ waypoint forces the right Mèo Vạc → Du Già road). Bike days in red (Fri), purple (Sat), jade (Sun). 9 numbered stops with popups; Lũng Cú (6) shown as optional (white). No buses or flights shown. shown.
- Ride times used: Fri 145 km ~4.5 h; Sat 93 km ~4 h (+1.5 h Lũng Cú, + ~2 h boat); Sun 68 km ~3 h. Buses: 6–7 h up, ~6 h down.
- Photos: Wikimedia Commons, saved in `images/`, credits in the footer.
- Local preview: `.claude/launch.json` runs `python -m http.server 8123`.

## To-do
- [x] Decide return flight approach → work Mon from Hanoi hotel, fly late afternoon.
- [ ] Pick and book late-afternoon Mon flight HAN → SIN.
- [ ] Identify Đồng Văn place; book Đồng Văn + Du Già homestays (pre-order dinners).
- [ ] Book Bằng Phấn buses: Thu night HAN→HG, Sun afternoon HG→Nội Bài.
- [ ] Reserve bikes (≤125cc); confirm licence rules with shop.
- [ ] Book work-friendly Hanoi hotel for Sun night (desk, Wi-Fi) + request late check-out.
- [ ] Apply for French 1968 IDP (category A); check friend's IDP.
