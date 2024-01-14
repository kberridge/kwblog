---
title: REPL vs. Tests
published: 2/08/2018
tags: F#, Tests
---
I fell in love with functional programming when I learned F#.  We program in C# at work, but I use F# any chance I get on little side utilities and things.  In F# the REPL is a pretty big deal.  F#'s REPL is called fsi (F# Interactive).  REPL stands for Read, Evaluate, Print Loop.  It's just an interactive shell where you type in F#.  When Rosyln came out C# got C# Interactive too, and it's built into VS but I never think to use it for some reason.  But I do reach for fsi a lot when I'm writing F#, and from what I can gather that seems pretty typical in the F# community and the functional programming world at large too.
<!-- excerpt -->
For illustrative purposes, I want to give an example so I distilled out a VERY simple bit from one of those utilities I was working on.

```
type NoticeInfo =
  { Name : string
  ; UsedInProducts : string list
  }

let addProductToNotice productCode notice =
  if notice.UsedInProducts |> List.exists ((=) productCode) then
    notice
  else
    { notice with UsedInProducts = productCode :: notice.UsedInProducts }
```

There's a record type that includes a list called "UsedInProducts".  The function "addProductToNotice" adds a string to that list if it isn't already in the list.  Could I have used a set instead of a list?  I don't know, maybe.  Is there a better way to write this, I don't know, probably.  But that's not the point (though I'm always game to learn more F#, so [send me a tweet](http://twitter.com/kberridge) and learn me)!

Here's me in real time testing this code in the REPL:
<video src="/REPL example.mp4" controls muted height="480">
Sorry, your browser doesn't support embedded videos, but you can <a href="/REPL example.mp4">download it</a>.
</video>

- I try adding from empty and see that it is added
- I try adding a duplicate and see that it is not added
- I try adding a non-duplicate and see that it is added
- I am happy

This is a pretty productive way of working.  It's so easy to explore and see what your code is doing.  It's a great way to experiment and learn new APIs.  But there is one very critical downside: it's ephemeral.  Typed it once, saw it work once, but now it is gone forever.

I built a pretty sizable utility once this way, testing it exclusively through the REPL as I went.  It was integrated with 3 different web services, transforming the data from each and writing information to an XML file it was keeping up to date.  It was a fantastic experience.  A piece would compile, I'd play with it in the REPL and see it work, then move on to the next piece.  At the end, I wired up all the pieces together and it just worked.  First time!  It was amazing!

# The Tests Strike Back
But a month later I came back to it to tweak something and quickly realized I was petrified to change anything.  Of course, I could still run the code in the REPL, and now that I wasn't writing it for the first time this was kind of cumbersome, but that wasn't the main problem.  The problem was I couldn't remember what all the edge cases and scenarios were that I had so carefully verified were working in the REPL before!  I could use the REPL again now, but I couldn't remember what to type into it anymore!

So lesson re-learned, I need to have tests!  I know that tests are valuable for regression detection, that is, they fail if something that used to work stops working.  I also know they are valuable as documentation, basically reminding me later of how things work and what edge cases had to be considered and handled.  And these two traits combined give me a lot of confidence to refactor and change the code later.  I'm familiar with this, I've written about it and even given a talk about it.  So it was cool to see the proof of that in how petrified I was to change this code that didn't have tests.

But when I asked myself why I hadn't written tests, the answer wasn't just because I'd used the REPL, nor that I'm lazy.  I think there was something a bit more interesting happening unconsciously.

# TDD
When I write C# I like to do TDD.  I find that writing the test first helps me think about what I'm trying to do.  But the REPL was accomplishing the same thing for me.  In some ways, the REPL is even easier.  I don't have to try to think of a test name.  And I don't worry at all about "writing the right test", or building a good maintainable test suite.  In the REPL, I'm just in pure explore the problem and solution mode.  When I do TDD on something totally new I always do a few things that I learned from [Brad Wilson in this TekPub video](https://www.pluralsight.com/courses/play-by-play-wilson-tdd):

- I start with the class under test and the tests in the same file
- I start out with dummy names, sometimes just A, B, or C, both for tests and for methods and classes
- I will red, green, refactor w/ a test, then start a new test and RGR it, then delete the first test, or even both of them and start over
- Only when I've made some progress and like the direction things are going do I go back and move the class under test to where it should live and start to use real names

This is kind of like using the test as a REPL.  BUT that still has more conceptual baggage than working in the REPL has.  So I'm wondering, **maybe the REPL is better in the early exploratory phase than TDD?**  When the exploring is done, I still want tests, but now I can write those tests with more of a documentation mindset.

Another thing is when I'm writing C# I truly don't trust that what I'm writing works at all until I see a green test.  But in F# when the compiler says the code is good, I have a lot more faith it also works correctly.  I think this is because of how much more powerful the type system is in F#.  It is capable of describing what states are valid or invalid to a much further extent than C#, so there are many fewer procedural edge cases that I need to worry about.  Or said another way, the F# compiler can look at a program and say "this is not a valid program" for many more possible inputs.  The easiest example of this is simply the ability to know that a variable can't be null at compile time.  But it's really the discriminated unions and record types that bring a lot of flexible data representations.  And the immutability also tends to lead me to write algorithms that define more types and explicitly transform from one valid state to another valid state as represented by those types.  I know this is high level and hand-wavy, and that's because I don't want to get to into the weeds about functional vs. OO here.  [Gary Bernhardt's talk "Ideology"](https://www.destroyallsoftware.com/talks/ideology) talks more about this idea of how types and tests relate.

So I'm wondering, **maybe I can focus more on how the types and the algorithm model the problem before switching into thinking more about specific examples and edge cases with tests?**

I think this also explains why I don't reach for the C# REPL.  Without the powerful type system, I'd rather do TDD.  But with both a powerful type system and a REPL, I don't need to write the tests first.  But as I learned the hard way when I didn't write *any* tests, I still need tests.