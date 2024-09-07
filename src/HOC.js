import withStyle from "./HigherOrderComponent";

const Button = ({ style }) => <button style={style}>Click me</button>;
const Text = ({ style }) => <p style={style}>Hello world</p>;

export const StyleButton = withStyle(Button);
export const StyleText = withStyle(Text);
