export interface CreateRequest {
  name: string;
  userId: string;
  slug: string;
}

export interface UpdateRequest {
  userId: string;
  organisation: string;
  name: string;
}

export interface addMemberRequest {
  userId: string;
  organisation: string;
  memberUsername: string;
  role: string;
}

export interface addAdminMemberRequest {
  userId: string;
  organisation: string;
  username: string;
  firstname: string;
  lastname: string;
  othernames: string;
  email: string;
  addresses?: Array<Object>;
  avatar: string;
}

export interface disableMemberAccessRequest {
  userId: string;
  organisation: string;
  memberUsername: string;
}

export interface GetRequest {
  organisation: string;
}

export interface DeleteRequest {
  userId: string;
  organisation: string;
}

export interface GetMembersOfMyOrganisationRequest {
  userId: string;
  organisation: string;
  role?: string;
  page: number;
  pageSize: number;
}
