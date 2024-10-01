interface ImageProps {
    style: string;
    source: string;
    click?: () => void;
}

export default function Image(props: ImageProps) {
  return (
    <>
      <img src={props.source} className={props.style} onClick={props.click}/>
    </>
  );
}