# Field Notes — blog starter

A small, static research blog built with [Eleventy](https://www.11ty.dev/).
Write posts in markdown, get plain HTML out — no database, no CMS, nothing
"techy" showing on the front end.

Current look: a soft, pastel "spring" palette (sage green, blush pink,
lavender, butter yellow) on a warm cream background, meant to feel calm
and paper-like. It's intentionally plain so a real theme can be layered on
later — see [Theming](#theming) below.

## What's here

```
.
├── eleventy.config.js      Eleventy config (collections, filters, output dir)
├── scripts/new-post.js     Helper that scaffolds a new post file
└── src/
    ├── _data/
    │   ├── site.json        Site-wide settings (title, description, welcome message, author)
    │   └── currentYear.js    Feeds the footer's copyright year
    ├── _includes/
    │   ├── layouts/
    │   │   ├── base.njk      The HTML shell every page uses
    │   │   └── post.njk       Wraps base.njk, adds the post header/body
    │   └── partials/
    │       ├── header.njk
    │       └── footer.njk
    ├── css/
    │   ├── theme.css          Colors, fonts, spacing tokens — THE theme file
    │   └── style.css          Layout/structure, reads tokens from theme.css
    ├── js/
    │   └── viewed-posts.js    Grays out already-read posts on the homepage
    ├── posts/
    │   ├── posts.json         Shared front matter for every post (layout, URL pattern)
    │   └── *.md                Individual posts
    ├── index.njk               Homepage (lists all posts)
    └── about.njk                About page
```

## Getting started

Requires [Node.js](https://nodejs.org/) (v18+).

```bash
npm install       # one-time setup
npm start         # runs a local dev server with live reload
```

Then open the URL it prints (usually `http://localhost:8080`).

To produce the final static site (for deployment):

```bash
npm run build      # outputs to _site/
```

`_site/` is a plain folder of HTML/CSS you can host anywhere — Netlify,
Vercel, GitHub Pages, or a plain file server. Nothing server-side is
required.

## Writing a new post

Easiest way — run the helper script:

```bash
npm run new-post -- "Title Of My Post"
```

This creates `src/posts/title-of-my-post.md` pre-filled with front matter.
Fill in the `excerpt` and write the post body in markdown below the `---`.

Or create the file by hand in `src/posts/` with this shape:

```markdown
---
title: My Post Title
date: 2026-07-15
excerpt: One sentence describing the post, shown on the homepage.
tags: [post, optional-topic-tag]
---

Write the post here using regular markdown — headings, **bold**, links,
> blockquotes, lists, images, code blocks, all supported.
```

The post automatically appears on the homepage (newest first) at
`/posts/my-post-title/`. Nothing else needs to be updated — no index file
to edit, no build step to configure.

To delete a post, delete its markdown file.

## Theming

Every color, font, and shape decision lives in one file:
**`src/css/theme.css`**. It only defines CSS custom properties
(`--color-bg`, `--font-heading`, `--radius-md`, etc.) — no layout rules.

`src/css/style.css` holds all the actual layout/structure rules, and
reads its colors and fonts exclusively from those variables.

To apply a new theme later, you have two options:

1. **Edit the values in `theme.css`.** Fastest option — swap the pastel
   spring palette for a different palette or fonts, and the whole site
   updates.
2. **Replace `theme.css` entirely** with a new stylesheet that defines
   the same variable names. `style.css` doesn't need to change at all as
   long as the variables it references still exist.

If a future theme needs new structural patterns (e.g. a sidebar, a
different homepage grid), those changes belong in `style.css` and the
`.njk` templates — `theme.css` should stay limited to tokens.

## Site settings

Edit `src/_data/site.json` to change the site title, description, author
name, and URL — these are used in the header, page titles, and footer.

The homepage also shows a "Welcome to [title]" banner above the post
list. Its body text comes from the `welcomeMessage` field in the same
file — edit that to describe what the blog is about.

## Already-read posts are grayed out

`src/js/viewed-posts.js` runs on every page load:

- On a post page, it records that post's URL in the visitor's browser
  (`localStorage`, key `viewedPosts`).
- On the homepage, it checks that list and adds a `post-card--visited`
  class (dimmed + grayscale, with an "Already read" tag) to any post
  card that's already been opened.

This is per-browser and client-side only — there's no account system or
server tracking involved, so it resets if the visitor clears site data
or switches browsers/devices. The styling for it lives in
`src/css/style.css` under `.post-card--visited`.

## Notes

- Posts are matched via `src/posts/*.md`; the shared front matter in
  `src/posts/posts.json` (layout + URL pattern) applies to all of them
  automatically.
- The homepage shows an empty-state message if there are no posts yet —
  useful right after cloning, before any content is added.
- Headings use the "Lora" serif font (loaded from Google Fonts in
  `style.css`) with a system sans-serif for body text; both fall back to
  local system fonts if the Google Fonts request fails.
