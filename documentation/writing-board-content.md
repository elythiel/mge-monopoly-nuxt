# Card list documentation

Displayed cards are limited to 36 elements.
The name is used to ordering them.

## Usable properties

The file is divided in 2 parts:
- the card informations written properties (between "---")
- the card description text, written after the closing "---"

You can check [this file](./card-sample.md) for an example.

Here is a description of the available properties:

```typescript
{
  color: "red" | "yellow" | "green" | "lightblue" | "blue" | "darkblue" | "brown", "pink" | "orange"
  title: string // board item title, card header
  period?: string // board item footer, card footer
  image?: {
    // board image (must exists in "public/images/" directory)
    name: string // filename, eg. "ico-guitar.svg"
    alt?: string // alt text, eg. "Icône de guitare"
    size?: "lg" | "xl" // display size
  }
  card?: boolean // should display a card when board clicked, defaut: false
  duration?: string // in card header
  location?: string // in card header
  header?: string // in card header, fallback to "title" if undefined
  footer?: string // in card footer, fallback to "period" if undefined
}
```
