export interface Images {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  promotedAt: Date | null;
  width: number;
  height: number;
  color: string;
  blurHash: string;
  description: null | string;
  altDescription: string;
  urls: Urls;
  links: ResultLinks;
  categories: any[];
  likes: number;
  likedByUser: boolean;
  currentUserCollections: any[];
  sponsorship: null;
  topicSubmissions: ResultTopicSubmissions;
  user: User;
  tag: string[];
}

export interface ResultLinks {
  self: string;
  html: string;
  download: string;
  downloadLocation: string;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  coverPhoto: CoverPhoto;
}

export interface Ancestry {
  type: Category;
  category: Category;
  subcategory?: Category;
}

export interface Category {
  slug: string;
  prettySlug: string;
}

export interface CoverPhoto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  promotedAt: Date | null;
  width: number;
  height: number;
  color: string;
  blurHash: string;
  description: null | string;
  altDescription: null | string;
  urls: Urls;
  links: ResultLinks;
  categories: any[];
  likes: number;
  likedByUser: boolean;
  currentUserCollections: any[];
  sponsorship: null;
  topicSubmissions: CoverPhotoTopicSubmissions;
  user: User;
}

export interface CoverPhotoTopicSubmissions {
  travel?: Travel;
  wallpapers?: Travel;
  texturesPatterns?: Travel;
  nature?: Travel;
}

export interface Travel {
  status: Status;
  approvedOn?: Date;
}

export enum Status {
  approved = 'Approved',
  rejected = 'Rejected',
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  smallS3: string;
}

export interface User {
  id: string;
  updatedAt: Date;
  username: string;
  name: string;
  firstName: string;
  lastName: null | string;
  twitterUsername: null | string;
  portfolioURL: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profileImage: ProfileImage;
  instagramUsername: null | string;
  totalCollections: number;
  totalLikes: number;
  totalPhotos: number;
  acceptedTos: boolean;
  forHire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagramUsername: null | string;
  portfolioURL: null | string;
  twitterUsername: null | string;
  paypalEmail: null;
}

export interface ResultTopicSubmissions {
  travel?: Travel;
  wallpapers?: Travel;
  experimental?: ArtsCulture;
  artsCulture?: ArtsCulture;
  technology?: ArtsCulture;
  colorTheory?: ArtsCulture;
}

export interface ArtsCulture {
  status: Status;
}
