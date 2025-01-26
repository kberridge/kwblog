---
title: Long-lived Feature Branches Are The Worst
published: 01/19/2025
---
How do you deal with development efforts that are going to take a long time?  If you only have one thing in-progress this is easy, but who only has one feature in the works a time?  We have to be able to work on multiple features concurrently, and ship them when they're ready.  So, of course, we use branches in source control to keep our changes separate and then merge them when they are done.  And this works tremendously well.  But the longer this goes on the worse and worse it gets.
<!-- excerpt -->

## Branches
I just want to take a minute to marvel at the effectiveness of light weight branches in modern source control.  This is something we all just take for granted now, but it wasn't always that way.  When I started we were still using centralized version control systems and their whole approach was to prevent two people from changing the same file at the same time.  Because if two people changed the same code file that would be chaos!  How would we ever reconcile that!  You had to check out a file before you could edit it, and then no one else could check it out and edit it until you checked it back in again.

Eventually someone realized that even though in theory it sounds like allowing parallel edits would be a disaster, it turns out in practice it's fine.  We don't often change the same line/area of a file, so usually our changes merge no problem.  And even when they don't, it's not hard to manually resolve.  That worked so well that we ended up with modern distributed version control systems like git and we never even think twice about concurrent edits.

## Long-lived Branches
Branches really do work well.  But long-lived branches bring some extra challenges, which I'll enumerate.  But, first, if you're doing long-lived branches please make sure that you are regularly reverse integrating!  That is, merge your master or main branch into your feature branch regularly (or rebase your feature branch on top of master, if you're into that kind of thing).  This will not solve the problems with long-lived branches, but it will help.

So, what's wrong with long-lived branches?

- **Divergence and conflicts.**  Even if you reverse integrate, divergence and conflicts will arise because chances are, other people have long-lived branches in the works too.  In the best case this will make merging harder later.  At the worst, someone might be pulling the rug out from under your feature.
- **Lack of Feedback.**  Unless you spin up a dedicated test environment for your feature branch that you continuously deploy to, no one can test your feature till it is all the way done.  And since we're talking about long-lived features, that is too damn long.  That means no one can test and find your bugs while you remember what you were working on.  No one can give design feedback.  You don't know if you might be introducing deployment issues, or performance issues, or reliability/robustness issues.  Obviously you can mitigate this with a dedicated test environment.  And maybe you can even make spinning those up really easy.  But even so, it's a separate environment, and you'll have to get special testing.
- **They drag on and on.**  I feel like long-lived feature branches tend to just drag on and on and on.  Something about the psychological safety of it being it's own little world with no risk to production maybe?  Maybe that makes it too easy to keep adding "just one more thing"?  Maybe the fact that integrating is hard and is the only step that introduces risk causes us to keep putting it off?  
- **Isolation.** You don't have to care what anyone else is working on, and they don't have to care what you're working on.  I suppose we could argue that might be good for productivity, but it's not good for team building and the health and quality of the product.

## Trunk-based Development, AKA Feature Flags
Well if we can't do feature branches, but our features still require a lot of time, then what are we supposed to do?  Trunk-based Development.  I've seen this in two forms: everyone commits on main and short feature branches.

I get very annoyed at the communication around this though.  It's often presented as if it's the easiest thing: "just use feature flags."  But, no, that's crazy, feature flags are NOT easy.  Sure, if your feature is adding a new screen and new tables and everything is brand new -- yes, that's easy.  But that's such a [degenerate case](https://en.wikipedia.org/wiki/Degeneracy_(mathematics))!  Even the simplest scenarios involve updating existing screens or code, and feature flags double the complexity even then: you have to test it works on and off!

And there are so many changes that are impossible to do as a feature flag without embracing huge added complexity or limitations.  Just for example, let's talk about databases.  Suppose you had a field like "height" that was a string and you are going to change it into "height-feet" and "height-inches" that are ints.  You'll update your UI, you'll update your backend, and you'll write a database migration that:

1. Creates the new fields
2. Parses the existing field into the new fields
3. Deletes the existing field

This is a non-additive schema change, or a "breaking change".  The process as describe above is the simplest way to make this change, but obviously we can't do this with a feature flag!  To do this feature with a feature flag, we also have to embrace no breaking changes to our database schema.  That could be:

- Create the new fields, parse the old field into the new fields, make the system translate the old field into the new fields when the flag is off, and translate the new fields into the old field when the flag is on for every insert/update.

Some architectures and systems may already have this no-breaking schema changes constraint if they need to be able rollback deployments, or run two versions of a microservice side by side at the same time, etc.  In which case maybe feature flags do look easy.  

And let's not forgot, now you have to come back and clean up all these feature flags too once they are no longer needed.  Or else keep all that extra code complexity around for ever.

I'm not saying feature flags are bad, I'm just saying let's not pretend they're free and easy and without risk!

## Find Small Moves
In the movie Contact, Ellie's dad (but really an alien) tells her, "Small moves, Ellie, small moves".  How about instead of a long-lived branch, and instead of a feature flag, we try really hard to find ways to ship the really big feature in smaller parts?

### Ship the "new bits"
Sometimes really big features are really big because there's a lot of supporting ground work that needs to be there.  Like settings and configuration screens.  Those screens are worthless without the features that use them, but that also means there's no risk to shipping them, maybe with feature flags.

### Skip the supporting stuff
On the other hand, what if we just didn't build the settings and configuration screens at first but we shipped the "real" feature without them.  We can configure that stuff in the database by hand at first.

I've had trouble getting buy-in with this approach.  Some people might see this as backwards.  I've always seen it as very agile though: build the important/difficult/scary part first cause that's what you'll learn from.  Then build the supporting/easy/obvious stuff last.

### Preparatory Refactoring
Kent Beck famously said "For each desired change, make the change easy (warning: this may be hard), then make the easy change."  And Martin Fowler calls this [preparatory refactoring](https://martinfowler.com/articles/preparatory-refactoring-example.html).  It often looks something like:

1. Create a new abstraction
2. Update all code to use the new abstraction (without changing any behavior)
3. Write a new implementation of the abstraction that does your new behavior
4. Delete the original behavior
5. Remove the abstraction

The beautiful thing about this is you can ship at any time.  But as Kent Beck said, "warning: this may be hard".

### Scale Down
I've been reading [Shape Up](https://basecamp.com/shapeup) lately, not done yet, but they talk about 6-week cycles and "fixed time, variable scope".  I haven't finished it, so maybe I'm reading into it too much, but it sounds like they're suggesting designing what you know you can ship in a 6 week iteration.  Apologies if I don't have that right yet, but it's what I was going to mention anyway.  Can we cut scope so we can ship something in a short amount of time?  And then come back and enhance it later?  Maybe we can start with a simpler UI?  Or maybe we can leave out some features at first?

## It's All Hard
I think the big problem here is that all of the small moves approaches are hard up front.  They requires careful analysis and planning.  They might require design changes, which could require buy-in from product folks.  They also require realizing that the feature is going to be long-lived.

The long-lived feature branch on the other hand costs nothing up front, but gets worse and worse the longer things go on.  And by the time you realize, it's probably too late to do anything differently.

For whatever unfortunate reason for the last two years I've found myself in this predicament a lot.  One project was to rewrite a feature from old UI tech onto our modern React stack.  I didn't think the feature was too big or that it would take too long, and then it took forever.  I have another one of those in the works now, and I don't think I learned my lesson.  And then I had two other projects that are both making a very big change to a central part of the features in question.  The end result will be a much more powerful and flexible system, but the upgrade touches every part of the feature.  And again, I didn't think it would take nearly as long to do as it has.  

In hindsight, I see some ways we might have been able to tackle these in small moves and feature flags.  But as discussed above, those approaches would have been more complicated and required more development work.  And I still don't know if that would have been worth it.

But even so, long-lived feature branches really are the worst.