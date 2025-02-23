---
title: Return To Vim?
published: 2/23/2025
---
Many moons ago I was a big vim guy.  This was at a time with Visual Studio was super slow, VSCode didn't exist yet, and I was being heavily influenced by folks in the ruby community.  However overtime I used vim less and less until basically not at all.  Now lately I've been hearing a lot about Zed, but it isn't supported on Windows yet, and that got me thinking about neovim which got me thinking about trying it all out again.  So I did.  And I'm really not sure what I think.
<!-- excerpt -->
Before I begin let me state my credentials so you don't think I'm just some complaining noob.  I really did get way into vim back in the day and I have the receipts, in the form of blog posts I wrote about switching from Visual Studio to vim.  It was 2008 and there is a whole series of posts on my old blog: [The first post in the series](http://kevin-berridge.blogspot.com/2008/09/visual-studio-development.html).  I had the compiler integrated, I had my test running integrated, eventually I had powershell hooked up.  Plus all the usual vim plugins for doing fuzzy finding and navigating a directory tree, etc, etc.

I stopped using a lot of this because a number of things happened:

- Visual Studio got better, at least a little.
- I started writing TypeScript.
- VSCode's TypeScript support was unbeatable.
- I was spending more time working with other devs on their machines, so my very custom setup was becoming a bit of a liability.

Because of that last point I even stopped using vim emulation for awhile to see if I could really learn VS and help my co-workers learn it too.  I wrote about that as well: [Embracing the Beast](http://kevin-berridge.blogspot.com/2013/10/embracing-beast.html).  I went back to vim emulation pretty quickly though.

But in recent years, a number of things have been happening again:

- Language Servers make a lot of the fancy features available in any editor.
- Treesitter looks like it it could be really cool.
- Neovim looks like it's revitalizing the vim community.
- New editors, like Zed, are making me wonder if VSCode is slow and I'm just used to it.

So I wonder, is it time to return to vim?

## Tooling

Turns out, A LOT has changed since I was in this space.  After copious googling, I decided to try out the following tools:

- [neovim](https://neovim.io/): it's vim, but new again!
- [neovide](https://neovide.dev/): a neovim gui, but with almost no added UI, but seems fast and has fun cursor animations and renders text really well.
- [lazyvim](http://www.lazyvim.org/): plugin manager.  I saw lots of recommendations for it, but there are lots of competitors too, and I don't really get it yet.
- [neotree](https://github.com/nvim-neo-tree/neo-tree.nvim): file tree (etc) browser.  Again, SO MANY alternatives, picked this one with little to go on.
- [nvim-telescope](https://github.com/nvim-telescope/telescope.nvim): fuzzy finder.  You have to have a fuzzy finder, lots of people recommended this one, but again, there are SO MANY.
- etc...

Don't use this as a list of recommendations.  I do not know if these are the "best" and I could not describe how they are different from alternatives.  This is just what I decided to try to start with.

If you want to follow along with my setup, it's on github: [my nvimrc](https://github.com/kberridge/nvimrc).

## Setup Experience

So far, the experience has been...  not great.  For the first 4 hours I was having fun.  After that I really began questioning why it was a good idea to spend so much time effectively building my own editor from parts.  I didn't really track it, but I might be 8 or more hours into screwing with this, and I'm no where near done.

I have (some of) my vim settings, a folder tree view, a fuzzy finder, a color scheme, a font, a plugin manager (but I still don't understand it or really understand how to use it), some git integration (but I don't know the commands yet or really understand it).

I still don't have (unless some of this is in neovim by default?): syntax highlighting (does seem to be on by default somehow), language tools (refactoring, formatting, etc), build integration, test runner integration.  And more I'm sure I'm forgetting.

So, the need to figure all of this out, decide what tool to use for each piece, and configure it all is obviously a major pain point up front.  There's a silver lining, which is that by the time it's setup, hopefully I would **really** understand it all and how to use it to the best effect.  And since everything in vim is keyboard oriented, and by and large you setup your own keyboard shortcuts, you can really get very fast and proficient if you put in the effort.  In VSCode for example it's easy to not know about available features at all.

Sadly, I've been pretty disappointed in the documentation through out.  Most of the plugins do not do a good job of explaining what they are for, why they are good, how they are different, or even giving examples of how to best use them.  The Lazy plugin manager in particular has me very confused.

## Neovim Experience

I think it's great that Neovim uses Lua as an alternative to vimscript.  I did *some* vimscript-ing back in the day and it was not a very pleasant experience.  However, there is a HUGE downside to lua, which is that now there are two ways to do everything: the vim script way and the lua way.  Some plugins have examples of both, some plugins only have vimscript examples.  I don't know enough about vim and lua and neovim yet to convert those examples to lua myself.

Neovim works with vim plugins, but now there are neovim specific plugins too.  It was already super hard to pick a plugin, and now there are just that many more of them.  I've been preferring neovim ones on the idea that they are newer and written in a more modern language so probably also better.

## Neovide Experience

I like the cursor animations so far.  I'm kind of surprised, I thought after a bit they would annoy me, but it really does seem helpful.  I am struggling still with the lack of windows integration.  I keep hitting ctrl+S and especially ctrl+V.  I know I can map these, and I will if I can't get over the hump, but I guess I'm really used to my gui implementing that.

Also, the scrolling is beautiful and the text rendering is fantastic.

So far I haven't setup tabs.  If I want them I'll probably try [bufferline.nvim](https://github.com/akinsho/bufferline.nvim).  I wanted to see if I could live with just telescope and neotree to start with though.

## Will I Keep At It?
I'm not sure.  I might not.  It's funny that it was a couple of episodes of the podcast [Software Unscripted](https://www.patreon.com/SoftwareUnscripted) about Zed that led me into all of this (Really great podcast by the way.  Pretty much the only tech podcast I've found interesting lately).  The key features in Zed I was most interested in were:

- Speed and native rendering
- A take on AI integration
- "Channels" for live code collaboration
- Deep treesitter and language server integration

Going from that into neovim seems so backwards given vim is the classic tiny text-only editor.  So I'm not 100% sure why I'm doing this!  Still, it's been interesting, a bit of a blast from the past, I learned a little Lua which was cool, and it is without a doubt fast.

If you have any tips for me about neovim, plugins, or editors in general I would love to hear them!  I've been trying out Blue Sky, or you can just email me.  Info on the [About page](/about).
