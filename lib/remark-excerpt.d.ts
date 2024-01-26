// The remark-excerpt npm package doesn't seem to have typescript types.
// This defines a typescript module so that the import will not complain with
// a type error, but doesn't go so far as to actually define anything in the
// module, so uses of it are treated as any.

declare module 'remark-excerpt';