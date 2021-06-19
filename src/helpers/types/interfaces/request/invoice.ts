export interface CreateRequest {
  userId: string;
  store: string;
  definition: object;
  currency: string;
  description: string;
  discount: number;
  total: number;
}

export interface GetAllRequest {
  userId: string;
  store: string;
  page: number;
  pageSize: number;
}

export interface GetInvoiceRequest {
  invoiceId: string;
}

export interface DeleteInvoiceRequest {
  invoiceId: string;
  userId: string;
}

export interface UpdateRequest {
  invoiceId: string;
  userId?: string;
  definition?: object;
  currency?: string;
  description?: string;
  discount?: number;
  total?: number;
}
