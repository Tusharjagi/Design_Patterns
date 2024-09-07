export default function withStyle(Component) {
  return (props) => {
    const style = {
      padding: "1rem",
      margin: "1rem",
      display: "flex",
      backgroundColor: "red",
    };
    return <Component style={style} {...props} />;
  };
}
