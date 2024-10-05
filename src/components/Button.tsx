import "../scss/button.scss";

interface ButtonProps {
  click?: () => void;
  title: string;
}

export default function Button({ title, click = () => {} }: ButtonProps) {
  return (
    <button className="primary" onClick={click}>
      {title}
    </button>
  );
}
