import Image from "next/image";
export default function Card({
  width,
  height,
  title,
  src,
}: {
  width: number;
  height: number;
  title: string;
  src: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border border-white bg-white`}
      style={{ width: `${width}%`, height: `${height}%` }}
    >
      <Image src={src} width={width} height={height} alt="image on card" />
      <h1>{title}</h1>
    </div>
  );
}
