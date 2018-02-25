
## Current Components Protocol

Below is a list of the current components, a description of what they do and the protocol.

#### TextBox

Renders a piece of plain text.

```json
{
  "type": "TextBox",
  "text": "string to render"
}
```

#### RowBox

Renders multiple boxes in a row, line-wrapped as necessary by the browser.

```json
{
  "type": "RowBox",
  "contents": [
    {
      "type": "AnyBox"
    }
  ]
}
```

#### StyleBox

Applies some (CSS) styling to its contents.

```json
{
  "type": "StyleBox",
  "content": {
    "type": "AnyBox"
  },
  "style": {
    "fontFamily": "Arial",
    "fontSize": "12px"
  }
}
```

#### TogglerButtonBox

Renders a button that, when clicked, replaces itself with some other content.

```json
{
  "type": "TogglerButtonBox",
  "content": {
    "type": "AnyBox"
  },
  "replacementContent": {
    "type": "AnyBox"
  },
}
```

#### CheckboxBox

Renders a checkbox that reflects the value of a named boolean *dynamic variable*. Dynamic variables are global throughout the application. Checkboxes can reference the same dynamic variable, in which case changing one should update all others. The default value is `false` (unchecked).

```json
{
  "type": "CheckboxBox",
  "dynamicVariable": "nameOfDynamicVariable"
}
```

#### PaneSelectorBox

Renders one of two boxes depending on a dynamic variable (which could be changed via a `CheckboxBox`).

```json
{
  "type": "PaneSelectorBox",
  "dynamicVariable": "nameOfDynamicVariable",
  "contentTrue": {
    "type": "AnyBox"
  },
  "contentFalse": {
    "type": "AnyBox"
  },
}
```
