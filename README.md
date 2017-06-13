# comic-viewer

> A comic viewer built on Riot.js.

See [this demo](https://cognitom.github.io/comic-viewer/).

```html
<comic-viewer title="Sample" pages="images/[000-012].jpg"></comic-viewer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/riot/3.3.1/riot.min.js"></script>
<script src="comic-viewer.js"></script>
<script>riot.mount('comic-viewer')</script>
```

## Configure via attributes

```html
<comic-viewer
  title="Sample"
  first-page-spread="no"
  direction="manga"
  pages="images/[000-012].jpg"
  height="400"
  width="700"
  ></comic-viewer>
```

- `title`: set title if needed (default empty)
- `first-page-spread`: set `yes` to make the first view double-faced (default `no`)
- `direction`: set `comic` for LtoR (default `manga`)
- `pages`: set image urls like `images/[000-003].jpg`. `[000-003]` will expand to `000` `001` `002` `003`.
- `height`: set height of view
- `width`: set width of view (default 100%)

**Note**: `pages` attribute is always required.

## License

MIT &copy; Tsutomu Kawamura
