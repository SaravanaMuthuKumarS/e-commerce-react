interface ButtonProps {
    click: () => void;
    title: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={props.click}>{props.title}</button>
    )
}