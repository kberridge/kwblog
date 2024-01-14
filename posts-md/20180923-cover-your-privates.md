---
title: Cover Your Privates
published: 9/23/2018
tags: C#, Code Design
---
I know I'm not going to stun anyone with this, but, when it comes to class design and C#, not everything should be public.
<!-- excerpt -->
Many years ago I was getting pretty big into Ruby and was spending time learning the language and dabbling with Rails and so forth.  But I ended up drawing what I now consider to be a poor conclusion, which was that it wasn't important to make classes and methods private or internal.  Or more generally I came to believe it wasn't worth it to worry about limiting access to your methods.  This conclusion was further enforced by posts that I'd read online about people being frustrated with things being internal or sealed in the .NET framework. 

My argument at the time was that it was much more important that your code communicate how it is intended to be used than go out of its way to prevent people from using it incorrectly.  "Just look at Ruby!  Everything is accessible and people are doing just fine!" I'd say.  And I think that **that** is still true.  However taking that to mean you basically shouldn't use `private` or `internal` was wrong.

In a library, if everything is public then most changes you might want to make become potential breaking changes.  And that makes changing anything very difficult.

If you are in MVC and you're writing View Models, making properties on your View Model public that are not actually used by the View that consumes them makes it very difficult to reason about what on the View Model is used where.

Both of these examples are especially painful because Find All References can't save you. But the things that make this painful in those examples apply just as well even when Find All References does work.

So I've fully changed my opinion here.  I still believe it's MORE important that your code communicate how it is intended to be used than attempt to prevent people from using it incorrectly.  But I think using what features the language provides to enforce that is also an important form of communication AND serves to make future maintenance easier AND helps encourage you to design more robust APIs.