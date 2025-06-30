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
      className="shadow-2xl sticky top-[52px] object-cover w-[960px] h-[200px] sm:h-[300px] rounded-md mb-2 transition-all"
    />
  );
}
