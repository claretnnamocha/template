export interface CreateRequest {
  userId: string;
  organisation: string;
  name: string;
  slug: string;
  address: object;
  image: string;
  category: object;
  description?: string;
  externalLink?: string;
}

export interface UpdateRequest {
  userId: string;
  store: string;
  description?: string;
  externalLink?: string;
  name?: string;
  slug?: string;
  image?: string;
  address?: object;
  category?: object;
}

export interface GetAllStoresRequest {
  userId: string;
  organisation: string;
  page: number;
  pageSize: number;
}

export interface GetDetailsRequest {
  store: string;
}

export interface DeleteRequest {
  userId: string;
  store: string;
}
