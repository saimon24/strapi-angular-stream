export interface Attributes2 {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats?: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Image {
  data: Data;
}

export interface Attributes {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: Image;
}

export interface Meme {
  id: number;
  attributes: Attributes;
}
