#!/usr/bin/env node
// Scaffolds a new markdown post in src/posts/.
// Usage: npm run new-post -- "My Post Title"

const fs = require("fs");
const path = require("path");

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Please provide a title, e.g. npm run new-post -- "My Post Title"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const date = new Date().toISOString().slice(0, 10);
const filePath = path.join(__dirname, "..", "src", "posts", `${slug}.md`);

if (fs.existsSync(filePath)) {
  console.error(`A post already exists at ${filePath}`);
  process.exit(1);
}

const frontMatter = `---
title: ${title}
date: ${date}
excerpt: ""
tags: [post]
---

Start writing here.
`;

fs.writeFileSync(filePath, frontMatter);
console.log(`Created ${filePath}`);
