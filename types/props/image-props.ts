export type ImageProps = {
  imgSrc?: string;
  isLoading?: boolean;
};

export type ImageWithDefaultProps = ImageProps & {
  useDefaultImage?: boolean;
};
