interface InputProps {
    click?: (name: string) => void;
    content: string;
    name: string;
    type: string
}

export default function Input(props: InputProps) {
    return (
        <>
            <input className="w-56 p-2 text-sm text-gray-700 rounded-lg" type={props.type} name={props.name} placeholder={props.content} onChange={(e) => props.click!(e.target.value)} required />
        </>
    )
}