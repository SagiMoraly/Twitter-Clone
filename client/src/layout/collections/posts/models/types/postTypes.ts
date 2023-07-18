export type ImageType = { url?: string; alt?: string };

export type PostFromClientType = {
  content: string;
  url: string;
  alt: string;
};

export type PostMapToModelType = {
  _id: string;
  content: string;
  url: string;
  alt: string;
  author: string;
};

export type NormalizedEditPost = {
  _id?: string;
  content: string;
  image: {
    url: string;
    alt: string;
  };
  author: string;
};

export type CreatePostErrors = Partial<PostFromClientType>;
