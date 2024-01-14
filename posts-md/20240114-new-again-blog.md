---
title: New Again Blog!
published: 01/14/2024
---
Welcome to the NEW new blog!  I went to CodeMash again this year for the first time in 9 years (I couldn't believe it had been that long), and I thought I might write a blog post about it.  But then one thing led to another and I ended up rewriting my blog instead.  So here's a quick post about the new tech stack behind this blog, why I switched, and how it went.
<!-- excerpt -->
You might notice that this "new" blog looks exactly the same as the last iteration.  The styles are the same, the urls are the same, everything should basically be identical from outside.  It was only the internals that changed.  I write this blog in [Markdown](https://daringfireball.net/projects/markdown/) and then I run a static site generator to turn the Markdown files into static HTML files, and then I publish those to a web server.  That's all still the same.  What changed is the static site generator.

Previously I used a tool written in .NET called Wyam.  It worked.  All the templating was done in Razor, which was fine, but I don't do hardly any development in Razor anymore.  And the way Wyam was structured was interesting.  It was highly customizable AND at the same time did most everything for you.  That meant the customization was super coupled to Wyam's proprietary "API", if you can call it that.  Working with it basically required reading the source, and while that worked, it wasn't fun.  Also, it has been deprecated and replaced by a new tool called Statiq with a commercial license.  

TLDR: Wyam was fine, but I didn't really like it, I don't use that tech anymore, and it's a dead project.

So I switched to [Next.js](https://nextjs.org/)!  Next.js is built on React, but it's focused on server side rendering including both static site generation at build time AND dynamic backend rendering at request time.  It does frontend rendering too.  It's kind of a wild framework.

I do all my front end work in React these days, so building the templates for this blog in React was natural.  And unlike Wyam, Next.js doesn't "do it all".  But it had guides and pointed you to all the npm packages to quickly and easily stitch it all together yourself.  So where Wyam felt like a scary black box, this Next.js blog feels like I wrote it.  At least the blog-y parts that matter to me.  

For example, Wyam had an "excerpts" feature built it, which I use on the home page to show a short excerpt of the post.  Next.js didn't have that.  But there's an npm package, and it was really easy to wire it up and use it where I wanted.

At the moment, I like how the Next.js turned out.  It did take me about 2 days to completely rewrite it and get everything working though.  And all I really have to show for it is this short post about the experience.  That and I did get some more exposure to Next.js, which is pretty impressive.  So I'm gonna go ahead and tell myself it was worth it.

There was a talk at CodeMash about Dev Containers.  So I tried to get this blog running in a dev container.  It worked!  Almost...  First snag, watch mode doesn't work, it doesn't see the files changing.  Probably a windows/wsl/docker issue?  But my google-foo failed me, so I gave up and just built it locally.  Maybe I'll be able to get the dev container working in the future.

If you're curious, you can see the source code for the blog [on my github](https://github.com/kberridge/kwblog).  Thanks for reading!