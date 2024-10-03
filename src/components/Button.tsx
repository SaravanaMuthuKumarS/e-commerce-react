import '../scss/button.scss'

interface ButtonProps {
    click: () => void;
    title: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button className="primary" onClick={props.click}>{props.title}</button>
    )
}