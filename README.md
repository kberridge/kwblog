# KWBlog
This is my blog, now in Next.js.  My first Static Site Generated (SSG) blog used Wyam, which is deprecated and "rebranded and rebooted as Statiq".  It was never very popular, plus at this point I'm more familiar with React than I am with Razor/cshtml.

## Next.js notes to the future
- _app.js is where fonts are setup and global stylesheets are imported.
- next.config.js sets "output: export" which tells it this is a static site and makes it write the site output to "out".
- run watch mode: `npm run dev`

## Using the Dev Container
### First Time Setup
- Install Docker Desktop on Windows
- Install VS Code Dev Containers extension
- In VS Code command palette run Dev Containers: Rebuild Container (?)

### Once connected
- In VSCode Terminal window, open new pwsh terminal.  This is powershell running in the linux container!
- BUT, watch isn't working, and googling hasn't found why yet... :(

## Deploying
It is hosted in [Google Firebase](https://firebase.google.com).

- `npx firebase logout; npx firebase login;` might be needed if it's been a long time, even if firebase says it is already logged in.
- to test with firebase before deploy: `npx firebase serve --only hosting`
- to build the static site: `.\build`
- to deploy: `.\build deploy`
