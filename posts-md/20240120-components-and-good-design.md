---
title: The Synergy of Components and Good Design
published: 01/20/2024
---
I really like React.  It's far and away the best UI framework I've worked with.  There's so much to say about why that is, but one of the biggest reasons, and simplest in some ways, is just the power of components.  Components are a great design structure and a great code organization structure.  They're intuitive and surprisingly powerful due to how they can be nested and reused.
<!-- excerpt -->
## Thinking in Components
The [React docs](https://react.dev/learn/thinking-in-react) do a great job of explaining how to think in components, and how to split a UI design into components.  It's very intuitive, to the point of feeling obvious and not worth remarking on, but it is worth remarking on.  Especially in more complex situations.  It's easy to get lost in the weeds of complex layouts where the details can get in the way of seeing the big picture and make it difficult to see how to keep the code organized and clean and avoid duplication.  But thinking in terms of components can really slice through all of that complexity and provide a big leg up on finding a good design.

## Synergy
This reminds me of a really great talk that Michael Feathers gave called [The Deep Synergy Between Testability and Good Design](https://www.youtube.com/watch?v=4cVZvoFGJTU).  That's a talk about how there is this often this wonderful positive feedback loop between how making a code base more testable also improves the design of the code base, which makes it more testable, improving the design; you get it.

I find component-based design has a similar synergy and positive feedback loop.  Identifying and extracting good components improves the design of the code in a lot of ways.

### Reduces Duplication
Components create a really solid abstraction boundary.  This makes it really easy and obvious how to reduce the duplication of HTML structure, styles, and logic.  Find similar markup, put it in a component!

### Centralizes Logic
By the same token, components help centralize logic.  Once you have a component, it usually becomes very clear if that components has different states (open/closed, or selected/deselected, etc.).  Or if it has different behaviors in those different states.  Simply adding props to define what state the component is in is all it takes.  And suddenly you can understand easily what the behaviors and states of that component are because they're all centralized in one place in the code.

### Composable/Context Independent
Components are super composable, and this is where so much of their power comes from.  Once defined, they can be used in all sorts of different contexts.  And since components also support nesting (through children), components be combined in any number of ways, without needing to anticipate what those ways might be in advance.  

### Maintainable
Components have really strong "public interfaces" through their props.  That means the internals of a component can easily be refactored without fear that the code using them will break.  New features can be added, appearance can be changed, etc.

### Refines Data Structures
Creating components requires defining props, and that usually requires defining interfaces to represent your data (in TypeScript, of course).  It's not surprising that the structure of the components usually reflects the structure of the data.  So this basically has the effect of helping identify primitive smells and introducing good types.

The "synergy" here is the fact that we get all of these "good design" benefits effectively for free just from components being components.  This is why I always encourage looking for and extracting small components from your react code.  It's an optional thing, React doesn't force you to create small components.  It's quite easy to write long render functions, or extract smaller render functions that aren't full components.  And that'll work out fine, to an extent.  But the overhead (in terms of amount of code) of creating smaller components is usually not very high (especially with function components) and the benefits as listed above can be really significant.