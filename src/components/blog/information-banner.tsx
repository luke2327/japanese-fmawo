import Image, { ImageProps } from "next/image";

export default function InformationBanner({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      src={src}
      width={960}
      height={300}
      alt={alt}
      className="object-cover w-[960px] h-[300px] rounded-md mb-2"
    />
  );
}
