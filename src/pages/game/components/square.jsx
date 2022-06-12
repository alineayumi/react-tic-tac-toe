export default function Square(props) {
  return (
    <button
      className="w-20 aspect-square border-solid border-2 border-gray-400"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
