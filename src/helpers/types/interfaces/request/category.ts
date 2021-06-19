export interface CreateCategory {
  name: string;
}
export interface CreateSubCategory {
  parentCategory: string;
  level: string;
  category: string;
}

export interface SearchCategory {
  query: string;
  page: number;
  pageSize: number;
}

export interface GetAllCategories {
  page: number;
  pageSize: number;
}

export interface UpdateCategory {
  slug: string;
  name: string;
}
