export type ImageProps = {
  imgSrc?: string;
  isLoading?: boolean;
  imgClasses?: string;
  hasPreview?: boolean;
};

export type ImageWithDefaultProps = ImageProps & {
  useDefaultImage?: boolean;
};
