interface ImageProps {
  className?: string;
  source: string;
  click?: () => void;
  varient?: 'cart' | 'product' | 'service' | ''
}

export default function Image({ className = '', source, click, varient = '' }: ImageProps) {
  return (
    <>
      <img src={source} className={`rounded ${className} ${varient}`} onClick={click} />
    </>
  );
}