# Bloomberg at COP31 microsite: draft v3 (dummy content)

The style follows Bloomberg's event pages (for example, Bloomberg at New York Climate Week 2026): a black top bar, a dark hero, type set in Avenir Next P for BBG, joined theme cards, event cards with thumbnails, and a black footer. The accent colours come from the COP31 lanyard slide. No artwork is used.

## Pages
- `index.html`: the landing page, with sections for hero, themes, events, programme, speakers, venue and about.
  - The **Bloomberg Green at COP31** card links out to https://events.bloomberglive.com/event/green-cop-31/summary?RefId=web-tile, which has its own registration.
- `register-finance-summit.html`
- `register-receptions.html`: one form with a tick-box for each evening, 10–13 Nov.
- `register-roundtables.html`: an invitation request form.
- `assets/`: `styles.css`, `register.js` (form validation) and the logo PNGs.

## Before go-live
1. **Dummy content.** Replace the themes, card copy, Finance Summit times, roundtable topics, speakers (placeholder silhouettes), venue contact and about copy.
2. **Hero and card visuals** use a dot-grid and colour-glow placeholder (`.hero-media`, `.thumb`). Swap in approved photography.
3. **Font.** Same type stack as Bloomberg's event pages: `AvenirNextPForBBG` (Avenir Next P for BBG), falling back to Helvetica Neue. Add the licensed web font files to `assets/fonts/` as `AvenirNextPForBBG-Regular`, `-Medium`, `-Demi` and `-Bold` (`.woff2`/`.woff`). Until then, browsers use the font if it's installed locally and otherwise Helvetica Neue. Check that Bloomberg's licence covers web use before publishing the files on a public site.
4. **Forms.** Set each `<form action="#">` to its real endpoint. While it stays `#`, submitting the form only shows the confirmation message.
   - A hidden field `event` identifies which form was submitted.
   - Field names: `first_name`, `last_name`, `job_title`, `organisation`, `email`, `phone`, `country`, `sector`, `badge`, `dietary`, `accessibility`, `privacy_consent`, `marketing_opt_in`.
   - Fields specific to one form: `reception_nights`, `roundtable_interest`.
5. **Country field.** Replace the free-text input with a proper country list.

## Programme sources
- **Bloomberg Green times** come from the bloomberglive event page: Nov 11 14:00–18:00 and Nov 12 09:00–12:00 TRT.
- **All other times are dummy or TBC.**

## Palette
- Lanyard colours: yellow `#F5C932`, orange `#F59A53`, teal `#016D84`, green `#01B175`.
- Bloomberg neutrals: `#0B0B0C`, `#141416`, `#F5F5F3`, `#E4E4E0`.
