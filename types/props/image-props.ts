export type ImageProps = {
  imgSrc?: string;
  isLoading?: boolean;
  imgClasses?: string;
};

export type ImageWithDefaultProps = ImageProps & {
  useDefaultImage?: boolean;
};
