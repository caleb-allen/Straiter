# Straiter

I must configure my obsidian strait. I must configure straiter than emacs which is trying to kill me.

## Feature Goals
- [x] Every new file is given a property called `date` which is set to the current date. The intent is to easily see a day's work as backlinks from daily notes.
- [ ] Hides http/https from bare URLs. `https://github.com` -> github.com
- [ ] Ctrl-Enter starts a new header at the same level as the last one
- [ ] Zoom in to a header and ignore all other content

## Installation

- Clone your repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/` folder.
- Install NodeJS, then run `npm i` in the command line under your repo folder.

# Dev workflow
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.
