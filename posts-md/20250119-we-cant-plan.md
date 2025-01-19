---
title: We Can't Plan?
published: 01/19/2025
---
In the software industry, if you're not doing Agile you're not doing it right.  One thing often ascribed to Agile is this idea that we must rapidly get feedback from real users using real software, that feedback must inform what we build, and that this is the only way because we can't create and follow a longer-term plan.  I'm a big believer in feedback, and the power of short feedback loops, but this assumption that we can't plan has always bothered me.  So let's explore that a bit.
<!-- excerpt -->

## The Agile Zeitgeist
Now, of course, everyone knows and is in complete agreement with what exactly Agile is.  Haha, no, not even a little bit.  I've read a couple of books about Agile and I've sat through countless conference talks about the subject.  I've even been in the position of creating an "Agile process" for my company.  But I would have a tough time defining Agile, partly because it is a term that has come to encompass a lot of different things.  This is a problem because we can easily misunderstand and talk past each other.  And also you can dismiss anything I might say here because "I don't know what Agile is" or "That's not really Agile", etc.  I usually avoid the topic altogether for those reasons.  But it's a huge part of the industry, it comes up all the time, and it underlies a lot of built-in assumptions and expectations about how we all work.

This is top of my mind because I just attended [CodeMash 2025](https://codemash.org/) where there were several talks about agile, and talks that at least mentioned it in passing.  One talk I attended in particular had me thinking about planning again.  I don't want to pick on that specific speaker or talk here because I'm reflecting on the zeitgeist more than the one talk.  So that out of the way, here's some of the things I've seen said that I'm responding to:

Waterfall failed because planning can never be perfect.  Agile is all about accepting that we are probably wrong about everything.  And given we are wrong, the only way to build something is to guess, build it, deploy it, and then see all the ways we are wrong.  So we can conclude that it's just not possible to plan a large software project.

Again, you can immediately say, "That's not what Agile says!".  And I agree, but I do think that this assumption that planning is not possible is pretty prevalent.  So let's go ahead and show that this is not what Agile is before accepting that lots of people do think this and returning to my point ;)

## What Agile Is
Agile was crystalized with [The Agile Manifesto](https://agilemanifesto.org/) in 2001, which extracted some principles from many "lightweight" development methods that had come before.  People will point to the Agile Manifesto and say "That's Agile!", but of course ["Agile" methods have been around for a while](https://en.wikipedia.org/wiki/Agile_software_development), and the Manifesto doesn't include any specifics.  Perhaps this is why it's so easy to argue about all this: we talk about it like it's one thing, but it's not.

What does the Manifesto have to say about planning?  "Responding to change over following a plan" is the main one.  The most important part of the Manifesto is probably this statement: "While there is value in the items on the right, we value the items on the left more."  So it doesn't say that following a plan is not valuable, or even impossible, just that we should value responding to change more.  Another important one is "Working software over comprehensive documentation" as an incredibly detailed approach to planning can also result in tremendous effort put into specification (aka documentation).

So "Agile" doesn't mean don't plan.  But I still encounter this basic assumption all the time.

## Why Can't We Plan?
It does seem like we're bad at planning though, doesn't it?  If you've tried to do estimates on a project before I bet you were frustrated by how off the estimates were AND how time-consuming and difficult it was to do the estimating.  And we do often seem to build the wrong thing, or at least not quite the right thing.

Honestly, I'm still struggling to understand why this is.  If Civil Engineers can plan out an entire construction project that includes the coordination of different subcontractors, ordering and delivery of materials, responding to surprises and setbacks on the job site, and so on -- why can't we?

I have thoughts including the abstraction of our work, the lack of true "standards" and "building blocks", the fact that even similar-looking things are often brand new research projects under the covers, the fact that our users are NOT information specialists, and often lack even the most basic understanding of concepts of data models, that our tools are constantly changing, and that I'm not sure we even know how to describe the "requirements" of a software project adequately.

## Context
But here's the point of this post.  I bet a lot of this has to do with the context of our work.  A fascinating thing about Software Engineering is we're all doing similar things, but the nature of our projects can be widely different.

One example of this that struck me at CodeMash had to do with some examples that were given about the importance of feedback.  They were all basically about marketing and sales.  And they boiled down to "we can't know what features will attract more buyers and make more money for our sellers".  And I buy that!  It's like marketing or fashion.  I'm sure there's some science in there, but there are also a lot of random fluctuations in popularity.

In a context like that, I can totally understand why you would want to throughout planning, accept that we can't know anything, and focus on trying to deliver something and find out what happens.

But **I** don't work in that context.  I build software for prosecutors (and other professionals in the justice system).  A lot of what we need to build for them is IN THE LAW.  You might be surprised how ambiguous and contradictory that can sometimes be...  but it's still a hell of a lot more specified than marketing!  A lot of the rest of what we build for them is more classic "enterprise" stuff about how they run their offices and manage their work.  

## Conclusion?
This is adding up to make me wonder if the lesson here might be that we should look at Agile practices on a scale.  On the one end are practices that embrace uncertainty and constant change whereas the other end needs practices that are more stable and predictable.  If your context is more stable and predictable, you should be able to plan more while still responding to change and learning from feedback.  The process that works well there will be different, but can still be Agile.