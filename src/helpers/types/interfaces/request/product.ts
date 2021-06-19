export interface CreateRequest {
  userId: string;
  store: string;
  name: string;
  currency: string;
  description: string;
  location: string;
  brandName: string;
  availability: boolean;
  maxPrice?: number;
  minPrice: number;
  category: object;
}

export interface GetProductRequest {
  productId: string;
}

export interface GetAllProductsRequest {
  store: string;
  page: number;
  pageSize: number;
}

export interface GetAllOrganisationProductsRequest {
  organisation: string;
  page: number;
  pageSize: number;
}

export interface SearchProduct {
  query: string;
  organisation: string;
  page: number;
  pageSize: number;
}

export interface GetAllCategoryProductsRequest {
  category: string;
  page: number;
  pageSize: number;
}

export interface UpdateRequest {
  userId: string;
  productId: string;
  name?: string;
  currency?: string;
  description?: string;
  maxPrice?: number;
  minPrice?: number;
  location: string;
  brandName: string;
  availability: boolean;
}

export interface DeleteRequest {
  userId: string;
  productId: string;
}
