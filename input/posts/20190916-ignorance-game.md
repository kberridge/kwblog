Title: The Ignorance Game
Published: 9/16/2019
Tags: C#, Code Design
---
# The Ignorance Game
Some of the key code design principles I keep coming back to are the Tell Don't Ask principle, the Law of Demeter, and also Sandi Metz's idea of Blind Trust.  But I also find that these are hard to put into practice!  To help with that, I like to play a little game I call The Ignorance Game, which I'd like to describe in a bit.  But first, let's review these principles.

In Growing Object Oriented Software Guided by Tests (GOOS), Tell Don't Ask is described this way, "The calling object should describe what it wants in terms of the role that its neighbor plays, and let the called object decide how to make that happen."

In Practical Object Oriented Design in Ruby the idea of Tell Don't Ask is presented as "Blind Trust" and 3 examples are given (which I won't reproduce here) but each shows a better Tell Don't Ask design that keeps raising the abstraction level from "I know what I want and I know how you do it" to "I know what I want and I know what you do" and finally to "I know what I want and I trust you to do your part."

And finally the Law of Demeter, which can be presented in 3 parts:
	1. Have limited knowledge about others
	2. Talk only to your friends
	3. Talk only to your immediate friends

In my talk ["OOP: You're Doing It Completely Wrong"](https://kevin-berridge.blogspot.com/2014/04/oop-youre-doing-it-completely-wrong.html) I presented this as the "Anti-Social principle", mostly for a laugh, but also cause I mean it works ya know?

The common thread that runs through all of these is that the less a piece of code knows the better!  The less it knows the more independent it is.  Which means it is unaffected by changes elsewhere in the system.  Do this with enough pieces of code and the hope is there are system wide effects.  That the system can be changed with more confidence, without it feeling so brittle, without feeling like a change in one place causes everything to break.

These principles are fairly easy to understand but can be harder to put into practice.  And that's why I like to play The Ignorance Game, to help me see if my code can be improved.  To play, look at a method and ask "What does it know now?  How could it be changed to not know those things?"  That is, "Could it be made more ignorant?"  Removing knowledge of a "thing" it knows, might make it better, or might reveal a different idea, or it might make it worse and we should undo it.  So the last step in the game is to ask, "Is this better?"

## What kinds of things do methods know?

### Algorithms
In other words, how to do things.  A simple and classic example of this is searching for an item in a list.  We can extract the "searching" code into a separate method.

We can start with something like:
```
class Whatever
{
  List<Attribute> attributes;

  public bool HasStyle()
  {
    foreach(var att in attributes)
    {
      if (att.Name == "Style") return true;
    }
    return false;
  }
}
```

And move to this:
```
class Whatever
{
  List<Attribute> attributes;

  public bool HasStyle()
  {
    return HasAttribute("style");
  }

  private bool HasAttribute(string name)
  {
    foreach(var att in attributes)
    {
      if (att.Name == name) return true;
    }
    return false;
  }
}
```

I know you've done refactorings like this a million times, and I am not trying to impress you with a sophisticated example or a novel code change.  I'm just pointing out how identifying that HasStyle had "knowledge" of the searching algorithm and deciding to make it ignorant of that simplified it.  But the game is not over!

### Data Structures
This would include things like how data is organized in memory, like in an array or a linked list and so forth.  But it also includes things like what properties of an object are being accessed. Look at each of those property accesses and ask does this need to be accessed here or could it be moved somewhere else?  And it includes what those properties return.  If the property returns another object, should I really know about that whole object?

The "HasAttribute" method above has data structure knowledge of the Attribute class and the .Name property AND the searching algorithm.  We can separate those:

```
class Whatever
{
  ...

  private bool HasAttribute(string name)
  {
    return AttributesContain(att => att.Name == name);
  }

  private bool AttributesContain(Func<Attribute, bool> predicate)
  {
    foreach(var att in attributes)
    {
       if (predicate(att)) return true;
    }
    return false;
  }
}
```

And we can go again, AttributesContain has knowledge of the looping algorithm, but also the private field attributes.  Let's try removing that:

```
class Whatever
{
  ...

  private bool AttributesContain(Func<Attribute, bool> predicate)
  {
    return ListContains(attributes, predicate);
  }

  private bool ListContains<T>(List<T> list, Func<T, bool> predicate)
  {
    foreach(var i in list)
    {
       if(predicate(i)) return true;
    }
    return false;
  }
}
```

And of course, we've just reinvented C#'s `Any` extension, so we can delete ListContains and replace it with `attributes.Any(predicate)`.

### Object Relationships
From my perspective, this is really the same as the Data Structures point above, but with OO languages being the way they are today it feels a little different.  Like the property access example of above, here we're interested in what other objects the method talks to.  Does it need to talk to them or could those be moved somewhere else?

In C# this is literally saying that we should look at every single "dot" and wonder if maybe we could dot into that thing somewhere else. It seems so silly but every "dot" we move elsewhere makes the original method more ignorant of its surroundings which makes that code more amenable to change in the future.

Once we've done this for our methods we can do it for the whole class.  Same questions but now instead of extracting a method we might move a method to a different class.

We're doing nothing but moving code around, it seems so futile.  It's like a magician with a deck of cards shuffling, shuffling, and shuffling the cards. Who cares! It's the same cards in the same deck!  But the magic comes when the magician picks your card out of the deck.

We're going for a similar magic effect here too.  Our methods in our classes are becoming more ignorant but the knowledge stays in the system, we've only changed where it lives.  The effect that should emerge as we do this is that:
1.  We can make more locally isolated changes safely and confidently.
2. Related knowledge lives closer together and becomes more centrally located, because if we did a good job, everytime knowledge was moved it was moved to a more logical place.

Now when we need to make a change we get to be like the magician pulling just the card we were looking for out of the whole deck.  And also the rest of the deck doesn't explode.

This isn't free though.  The increased abstraction that results from this process makes each unit easy to understand, but can make understanding how that unit is actually wired up with the rest of the system harder to understand.  If you've written React.js code you might have experienced this in your controlled components that accept an onChange function in their props.  The component itself is so simple, it just calls onChange.  But what does onChange do?  You have to find where the component is rendered and see what function was passed to onChange, then go read that function to figure that out, oh it calls the foobar api.  Which is easy to do (especially in TypeScript), but if you're used to seeing the API call right there in line, this can feel like extra overhead.  And it is, that's the tradeoff. 

And so I return to the Ignorance Game.  The objective of the game is to consider just how ignorant the code can be.  But that doesn't mean the best design is **always** the most ignorant design.  The best design is the one that is ignorant in all the right ways.  And as usual, deciding what the "right" ways are is the art of it.  But, at least the game is kinda fun!