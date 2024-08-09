const Card = (props) => {
  const classes = `${props.mb} bg-white w-full px-3 py-5 border ${props.newClass}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
