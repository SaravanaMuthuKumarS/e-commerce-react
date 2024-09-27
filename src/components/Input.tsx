interface InputProps {
    click?: (name: string) => void;
    content: string;
    name: string;
    type: string
}

export default function Input(props: InputProps) {
    return (
        <>
            <input className="w-full p-2 pl-10 text-sm text-gray-700 mt-2" type={props.type} name={props.name} placeholder={props.content} onChange={(e) => props.click!(e.target.value)} />
        </>
    )
}