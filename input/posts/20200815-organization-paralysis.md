Title: Organization Paralysis
Published: 08/15/2020
Tags: 
---
I've been learning Piano and jazz theory, it is going slowly, but it is very fun.  I bought a giant book of [blank Staff Paper](https://www.amazon.com/gp/product/0793516889/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1) so I can take notes on things I'm learning, write out exercises, and hopefully start doing some transcriptions, and maybe other stuff too, I don't know where this journey may take me yet.

So, this giant book of 500 pages of blank staffs arrives, and I'm reading [The Jazz Theory Book](https://www.amazon.com/gp/product/1883217040/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1) and I'd like to take some notes.  But faced with 500 pristine and empty pages, I find myself paralyzed by the decision of where to make the first mark.  Should I divide the book into sections for the different things I think I might do?  What if a new thing I didn't anticipate comes up later and there isn't room for a section for it?  What if I end up needing way more pages for one type of thing than the others?

Maybe I should just start on page one and go in time order and write everything all together?  But what if I want to find something later, will it be hard to know where it is?  Will it be annoying to have to flip through unrelated things in between things that go together?

All those questions about how to organize my notes for the future create a pretty big stress barrier over taking that first note.  It's enough, sometimes, to make me not take notes at all.

This doesn't just apply to paper.  I used to take notes in docs in Google Docs, where everything had to go in a specific document in a specific folder.  Then I switched to using [Microsoft OneNote](http://www.onenote.com), where each page had a lot of flexibility of where you could type stuff (cause you can add a text box anywhere on the canvas), but you still had to create a page (or subpage) in a specific tab in a specific notepad.  So I switched over to [Workflowy](https://workflowy.com/), now everything is in one big tree structure of a document, but you can drill into any level of the tree and it becomes like its own big document, so it's like documents nested in documents nested in documents.  But I started to find it was hard to find stuff, and I had to decide where in that big tree to add something new.  So I switched back to OneNote.

Clearly this applies just as much to code too.  Over the last few years I've been doing a lot of architecture type work, and I've been keeping this organization paralysis idea in mind.  If we can settle on a code organization scheme (by which I mean, where do we put our classes, files, and folders) which is consistent, relatively flat, but also flexible enough to accommodate edge cases, then we can make it easier to find what we're looking for and ALSO reduce the organization paralysis when adding something new.  There's a balance to be struck here between being too unorganized and ending up with a mess, and being overly organized and never knowing what to do.

I do feel the need to mention that I strongly suspect that when it comes to file organization this is a problem of our own making.  Do we *really* need files?  This is one of the many many things that I see a lot of exciting potential for in [Dark](https://darklang.com/), though that's probably a topic for a different blog post.

Another trick in code is to delay deciding where something should go until you've basically got it written and working already.  It is much easier to name things and decide where to put them once you really know what they are.  One of my favorite ways of doing this I learned from an old TekPub video with Brad Wilson, I think it is [this video on PluralSight](https://www.pluralsight.com/courses/play-by-play-wilson-tdd?clickid=RU0yqPV9KxyOT1-wUx0Mo38LUkiT%3AbzHN1LcWw0&irgwc=1&mpid=2003851&aid=7010a000001xAKZAA2&utm_medium=digital_affiliate&utm_campaign=2003851&utm_source=impactradius) now.

As I remember it, he's doing TDD, so he figures out what test he wants to write first, which means figuring out what behavior he wants in his code under test.  So he writes the test.  Then he just creates the code under test class right in the test file.  And he's not sure what he really wants to call it yet, so it calls it Foo.  After a few more tests, and everything is coming together, and he's understanding it better, **then** he names the classes and moves them to where they belong.

I like doing this same kind of thing in a REPL too.

It helps with the Organization Paralysis, cause I'm skipping the organization step completely for now.

Oh, and in that giant book of staff paper?  I decided to just start on page one and start writing stuff down.  It's working out just fine that way so far.  I even wrote out my first transcription, [Jon Batiste's arrangement of Green Hill Zone](https://www.youtube.com/watch?v=H_fiwjSP4Aw) (from the Sonic the Hedgehog video game!).