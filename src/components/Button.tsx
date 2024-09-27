import { Props } from "../interfaces/AppTypes";

export default function Button(props: Props) {
    return (
        <button onClick={props.click}>{props.title}</button>
    )
}