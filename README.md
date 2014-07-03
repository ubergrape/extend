# extend

Extending objects, shallow or deep.

## Install

With [component(1)](https://github.com/component/component):

```bash
component install darsain/list
```

## API

### extend([deep], obj1, ..., objN)

Extends the first passed object with next objects in line. If last argument is a boolean `true` the extend will be deep.

Deep extending will clone objects and arrays. If there are objects in the array, they'll also be cloned, not just cross-referenced.

## Why another?

- [segmentio/extend](https://github.com/segmentio/extend) - Doesn't do deep.
- [gorillatron/extend](https://github.com/gorillatron/extend) - Can't control what is being extended (always creates a new object), and doesn't clone arrays in deep extend.

## Testing

To run tests:

```
component build --dev
```

And open `test/index.html`

## License

MIT