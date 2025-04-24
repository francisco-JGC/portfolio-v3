import React from "react";

type ImgSrc = string | { src: string };

interface ImgProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: ImgSrc;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  srcSetWebp?: ImgSrc;
  sizes?: string;
}

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  srcSetWebp,
  sizes = "100vw",
  ...props
}) => {
  const resolveSrc = (source: ImgSrc | undefined) =>
    typeof source === "string" ? source : source?.src;

  return (
    <picture>
      {srcSetWebp && (
        <source
          srcSet={resolveSrc(srcSetWebp)}
          type="image/webp"
          sizes={sizes}
        />
      )}
      <img
        src={resolveSrc(src)}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        style={{ objectFit: "cover" }}
        className={className}
        sizes={sizes}
        {...props}
      />
    </picture>
  );
};
