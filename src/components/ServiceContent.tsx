export default function ServiceContent({
  title,
  subTitle,
  description,
}: {
  title: string;
  subTitle: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center border rounded-lg shadow p-2">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-lg">{subTitle}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
}
