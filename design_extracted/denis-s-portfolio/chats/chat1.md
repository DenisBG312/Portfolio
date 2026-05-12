# Developer Portfolio

_Started 2026-05-12 17:21 UTC_

---

## User

Hey! I need a portfolio website to demonstrate my work. I have currently 1 year professional experience as a junior c# developer and 2 projects of mine. FashionShop and Joblyze. FashionShop is a ecommerce website and Joblyze is a web app that helps users with finding the perfect job using AI analyzes. I want the website to look unique and polished. Cool colors, fonts and responsiveness.

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- vibe: Technical/terminal (developer-coded aesthetic, mono fonts)
- color_direction: Warm earth tones (cream, terracotta, ochre)
- typography: Monospace-led (developer feel)
- project_depth: Interactive demos / live previews
- sections: Hero / intro, About me, Projects (FashionShop, Joblyze), Skills / tech stack, Experience (1 year as C# dev), Contact / get in touch, Resume download
- motion: Medium (scroll-triggered reveals, hover delight)
- hero_idea: Terminal / code editor metaphor
- personal_info: My name is Denis Tsranski, I am from Ruse / Bulgaria. 
Github: https://github.com/DenisBG312
Linkedin: https://www.linkedin.com/in/denis-tsranski/
Email: denis.tsranski@gmail.com
Phonenumber: +359 88 538 4191
- tech_stack: C#, ASP.NET Core, SQL, React, JavaScript, MSSQL, HTML / CSS, Tailwind CSS, Supabase
- joblyze_details: Built with React, Supabase and integrated Gemini, Joblyze is an AI-powered job search and career assistant platform designed to help users streamline the hiring process. The website combines tools such as resume optimization, AI-generated cover letters, interview preparation, and smart job matching to improve a candidate’s chances of landing a job faster.
- fashionshop_details: Built with ASP.NET Core MVC, FashionShop is an e-commerce web application focused on online fashion and product shopping. The platform allows users to browse products, view detailed information, and simulate a modern online shopping experience with a clean storefront design integrated with Stripe.
- variations: One polished direction
- tweaks: Dark/light mode, Typography pairing, Color theme / accent

## Assistant

_[tool: update_todos]_

_[tool: copy_starter_component]_

_[tool: set_project_title]_

_[tool: write_file]_

I'll build a terminal-inspired portfolio with warm earth tones. Plan:

**Design system:**
- Mono primary: JetBrains Mono. Pairings: with Instrument Serif (editorial) or all-mono
- Palette: cream `#f3ebdd`, ink `#1a1411`, terracotta `#c8553d`, ochre `#d4a04a`, muted clay `#8a6f5c`
- Dark variant: roasted brown `#1c1612` bg, cream text
- Hero = booting terminal that resolves into a real prompt the user can interact with
- Projects = mini interactive demos (FashionShop browser, Joblyze AI résumé feedback live calling Claude)

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: write_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: write_file]_

I need to fix the accent tweak — `TweakColor` expects hex strings or arrays, not `{value, color}` objects.

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Your portfolio is ready at `index.html`.

**What's in it:**
- **Hero** — booting terminal that lands on a real interactive prompt (try `help`, `joke`, `projects`, `theme`)
- **About** — manifesto + quick-facts JSON sidebar
- **FashionShop demo** — working mini-browser: add items → checkout → "Stripe" pay → confirmation
- **Joblyze demo** — three live tabs: smart match list, AI résumé coach (calls Claude for real), AI cover-letter opener (also real)
- **Skills** — animated bars across backend / frontend / tooling
- **Experience** — timeline with sticky git-log sidebar
- **Contact** — your real email/phone/links with copy buttons, plus decorative form
- **Tweaks panel** — bottom right: Light/Dark, 4 accent swatches, 4 type pairings

**Caveats:**
- Resume download is a placeholder alert — drop a real PDF into the project and I'll wire it up
- Contact form is decorative; emails should go to your real address directly
- All copy is editable in the source — let me know if you want me to tweak tone, add a "writing" section, or add a third project slot

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Updated your title throughout — terminal boot line, hero subtitle, about quick-facts, current-role timeline entry, git-log sidebar, and page title — all now reflect **Junior Full-stack C# Developer · React**.

## User

is it possible to add this img anywhere as it is good to people to visit me. if you want zoom more into my face

## Assistant

_[tool: image_metadata]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: str_replace_edit]_

_[tool: done]_

Added your photo to the **About** section — it sits in a bordered card above the quick-facts, styled like a viewfinder with `REC` and exposure tags in the corners, plus a `~/me/portrait.jpg` filename caption underneath to match the terminal aesthetic.

Used the tighter face/upper-body crop (`assets/denis-face.jpg`) — feels warmer and more "say hi" than the full-bench shot. The wider one is saved as `assets/denis-portrait.jpg` if you'd rather swap it.

## User

Apply comment

## Assistant

_[tool: run_script]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: image_metadata]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: view_image]_

_[tool: copy_files]_

_[tool: str_replace_edit]_

Now the crop is right — hair has breathing room and the river/sky shows above. Let me wire it in.

Lifted the crop — your hair now has proper headroom with sky and river showing above, and you're framed from about mid-chest up. Added a `?v=2` cache-buster so it shows immediately without a hard refresh.

