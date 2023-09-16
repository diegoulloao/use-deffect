# use-deffect

`use deffect` for react.

The same `useEffect` as always, just as defective.

## Installation

```bash
npm i deffect
```

## Usage

```js
import { useDeffect } from "deffect";

const Component = (props) => {
  useDeffect(() => {
    console.log("a defective react hook");
  }, [...deps]);

  return <>your stuff</>;
};
```

## License

Licensed **[MIT](https://github.com/diegoulloao/use-deffect/blob/main/LICENSE)**
