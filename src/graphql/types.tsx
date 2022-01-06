import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  products?: Maybe<Array<Maybe<Product>>>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CategoryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate?: Maybe<CategoryAggregator>;
  groupBy?: Maybe<CategoryGroupBy>;
  values?: Maybe<Array<Maybe<Category>>>;
};

export type CategoryConnectionCreatedAt = {
  __typename?: 'CategoryConnectionCreatedAt';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionSlug = {
  __typename?: 'CategoryConnectionSlug';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryConnectionUpdatedAt = {
  __typename?: 'CategoryConnectionUpdatedAt';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CategoryConnection_Id = {
  __typename?: 'CategoryConnection_id';
  connection?: Maybe<CategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _id?: Maybe<Array<Maybe<CategoryConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<CategoryConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<CategoryConnectionSlug>>>;
  updatedAt?: Maybe<Array<Maybe<CategoryConnectionUpdatedAt>>>;
};

export type CategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type ComponentCustomCustomField = {
  __typename?: 'ComponentCustomCustomField';
  _id: Scalars['ID'];
  id: Scalars['ID'];
  options?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentCustomCustomFieldInput = {
  options?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum Enum_Product_Status {
  Draft = 'draft',
  Published = 'published'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Header = {
  __typename?: 'Header';
  _id: Scalars['ID'];
  company?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type HeaderInput = {
  company?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  _id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type Idempotency = {
  __typename?: 'Idempotency';
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  published_at?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type IdempotencyAggregator = {
  __typename?: 'IdempotencyAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IdempotencyConnection = {
  __typename?: 'IdempotencyConnection';
  aggregate?: Maybe<IdempotencyAggregator>;
  groupBy?: Maybe<IdempotencyGroupBy>;
  values?: Maybe<Array<Maybe<Idempotency>>>;
};

export type IdempotencyConnectionCreatedAt = {
  __typename?: 'IdempotencyConnectionCreatedAt';
  connection?: Maybe<IdempotencyConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type IdempotencyConnectionId = {
  __typename?: 'IdempotencyConnectionId';
  connection?: Maybe<IdempotencyConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type IdempotencyConnectionKey = {
  __typename?: 'IdempotencyConnectionKey';
  connection?: Maybe<IdempotencyConnection>;
  key?: Maybe<Scalars['String']>;
};

export type IdempotencyConnectionOrder = {
  __typename?: 'IdempotencyConnectionOrder';
  connection?: Maybe<IdempotencyConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type IdempotencyConnectionPublished_At = {
  __typename?: 'IdempotencyConnectionPublished_at';
  connection?: Maybe<IdempotencyConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type IdempotencyConnectionUpdatedAt = {
  __typename?: 'IdempotencyConnectionUpdatedAt';
  connection?: Maybe<IdempotencyConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type IdempotencyConnection_Id = {
  __typename?: 'IdempotencyConnection_id';
  connection?: Maybe<IdempotencyConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type IdempotencyGroupBy = {
  __typename?: 'IdempotencyGroupBy';
  _id?: Maybe<Array<Maybe<IdempotencyConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<IdempotencyConnectionCreatedAt>>>;
  id?: Maybe<Array<Maybe<IdempotencyConnectionId>>>;
  key?: Maybe<Array<Maybe<IdempotencyConnectionKey>>>;
  order?: Maybe<Array<Maybe<IdempotencyConnectionOrder>>>;
  published_at?: Maybe<Array<Maybe<IdempotencyConnectionPublished_At>>>;
  updatedAt?: Maybe<Array<Maybe<IdempotencyConnectionUpdatedAt>>>;
};

export type IdempotencyInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = Category | CategoryAggregator | CategoryConnection | CategoryConnectionCreatedAt | CategoryConnectionId | CategoryConnectionName | CategoryConnectionSlug | CategoryConnectionUpdatedAt | CategoryConnection_Id | CategoryGroupBy | ComponentCustomCustomField | Header | I18NLocale | Idempotency | IdempotencyAggregator | IdempotencyConnection | IdempotencyConnectionCreatedAt | IdempotencyConnectionId | IdempotencyConnectionKey | IdempotencyConnectionOrder | IdempotencyConnectionPublished_At | IdempotencyConnectionUpdatedAt | IdempotencyConnection_Id | IdempotencyGroupBy | Order | OrderAggregator | OrderAggregatorAvg | OrderAggregatorMax | OrderAggregatorMin | OrderAggregatorSum | OrderConnection | OrderConnectionAddress1 | OrderConnectionAddress2 | OrderConnectionCartContents | OrderConnectionCity | OrderConnectionCountry | OrderConnectionCreatedAt | OrderConnectionEmail | OrderConnectionFirstName | OrderConnectionId | OrderConnectionIdempotency | OrderConnectionLastName | OrderConnectionRegion | OrderConnectionStripe_Charge_Id | OrderConnectionStripe_Order_Id | OrderConnectionStripe_Url | OrderConnectionTotal | OrderConnectionUpdatedAt | OrderConnectionZipCode | OrderConnection_Id | OrderGroupBy | Product | ProductAggregator | ProductAggregatorAvg | ProductAggregatorMax | ProductAggregatorMin | ProductAggregatorSum | ProductConnection | ProductConnectionCreatedAt | ProductConnectionDescription | ProductConnectionId | ProductConnectionImage | ProductConnectionPrice | ProductConnectionSlug | ProductConnectionStatus | ProductConnectionTitle | ProductConnectionUpdatedAt | ProductConnection_Id | ProductGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreatedAt | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdatedAt | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileConnection_Id | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnection_Id | UsersPermissionsUserGroupBy | CreateCategoryPayload | CreateIdempotencyPayload | CreateOrderPayload | CreateProductPayload | CreateRolePayload | CreateUserPayload | DeleteCategoryPayload | DeleteFilePayload | DeleteHeaderPayload | DeleteIdempotencyPayload | DeleteOrderPayload | DeleteProductPayload | DeleteRolePayload | DeleteUserPayload | UpdateCategoryPayload | UpdateHeaderPayload | UpdateIdempotencyPayload | UpdateOrderPayload | UpdateProductPayload | UpdateRolePayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CreateCategoryPayload>;
  createIdempotency?: Maybe<CreateIdempotencyPayload>;
  createOrder?: Maybe<CreateOrderPayload>;
  createProduct?: Maybe<CreateProductPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteHeader?: Maybe<DeleteHeaderPayload>;
  deleteIdempotency?: Maybe<DeleteIdempotencyPayload>;
  deleteOrder?: Maybe<DeleteOrderPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateFileInfo: UploadFile;
  updateHeader?: Maybe<UpdateHeaderPayload>;
  updateIdempotency?: Maybe<UpdateIdempotencyPayload>;
  updateOrder?: Maybe<UpdateOrderPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateCategoryArgs = {
  input?: InputMaybe<CreateCategoryInput>;
};


export type MutationCreateIdempotencyArgs = {
  input?: InputMaybe<CreateIdempotencyInput>;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<CreateOrderInput>;
};


export type MutationCreateProductArgs = {
  input?: InputMaybe<CreateProductInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: InputMaybe<DeleteCategoryInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteIdempotencyArgs = {
  input?: InputMaybe<DeleteIdempotencyInput>;
};


export type MutationDeleteOrderArgs = {
  input?: InputMaybe<DeleteOrderInput>;
};


export type MutationDeleteProductArgs = {
  input?: InputMaybe<DeleteProductInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  input?: InputMaybe<UpdateCategoryInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateHeaderArgs = {
  input?: InputMaybe<UpdateHeaderInput>;
};


export type MutationUpdateIdempotencyArgs = {
  input?: InputMaybe<UpdateIdempotencyInput>;
};


export type MutationUpdateOrderArgs = {
  input?: InputMaybe<UpdateOrderInput>;
};


export type MutationUpdateProductArgs = {
  input?: InputMaybe<UpdateProductInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID'];
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  cartContents?: Maybe<Scalars['JSON']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  idempotency?: Maybe<Idempotency>;
  lastName?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  stripe_charge_id?: Maybe<Scalars['String']>;
  stripe_order_id?: Maybe<Scalars['String']>;
  stripe_url?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  zipCode?: Maybe<Scalars['String']>;
};

export type OrderAggregator = {
  __typename?: 'OrderAggregator';
  avg?: Maybe<OrderAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<OrderAggregatorMax>;
  min?: Maybe<OrderAggregatorMin>;
  sum?: Maybe<OrderAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderAggregatorAvg = {
  __typename?: 'OrderAggregatorAvg';
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorMax = {
  __typename?: 'OrderAggregatorMax';
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorMin = {
  __typename?: 'OrderAggregatorMin';
  total?: Maybe<Scalars['Float']>;
};

export type OrderAggregatorSum = {
  __typename?: 'OrderAggregatorSum';
  total?: Maybe<Scalars['Float']>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  aggregate?: Maybe<OrderAggregator>;
  groupBy?: Maybe<OrderGroupBy>;
  values?: Maybe<Array<Maybe<Order>>>;
};

export type OrderConnectionAddress1 = {
  __typename?: 'OrderConnectionAddress1';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionAddress2 = {
  __typename?: 'OrderConnectionAddress2';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionCartContents = {
  __typename?: 'OrderConnectionCartContents';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type OrderConnectionCity = {
  __typename?: 'OrderConnectionCity';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionCountry = {
  __typename?: 'OrderConnectionCountry';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionCreatedAt = {
  __typename?: 'OrderConnectionCreatedAt';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type OrderConnectionEmail = {
  __typename?: 'OrderConnectionEmail';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionFirstName = {
  __typename?: 'OrderConnectionFirstName';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionId = {
  __typename?: 'OrderConnectionId';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type OrderConnectionIdempotency = {
  __typename?: 'OrderConnectionIdempotency';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type OrderConnectionLastName = {
  __typename?: 'OrderConnectionLastName';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionRegion = {
  __typename?: 'OrderConnectionRegion';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionStripe_Charge_Id = {
  __typename?: 'OrderConnectionStripe_charge_id';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionStripe_Order_Id = {
  __typename?: 'OrderConnectionStripe_order_id';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionStripe_Url = {
  __typename?: 'OrderConnectionStripe_url';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnectionTotal = {
  __typename?: 'OrderConnectionTotal';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type OrderConnectionUpdatedAt = {
  __typename?: 'OrderConnectionUpdatedAt';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type OrderConnectionZipCode = {
  __typename?: 'OrderConnectionZipCode';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['String']>;
};

export type OrderConnection_Id = {
  __typename?: 'OrderConnection_id';
  connection?: Maybe<OrderConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy';
  _id?: Maybe<Array<Maybe<OrderConnection_Id>>>;
  address1?: Maybe<Array<Maybe<OrderConnectionAddress1>>>;
  address2?: Maybe<Array<Maybe<OrderConnectionAddress2>>>;
  cartContents?: Maybe<Array<Maybe<OrderConnectionCartContents>>>;
  city?: Maybe<Array<Maybe<OrderConnectionCity>>>;
  country?: Maybe<Array<Maybe<OrderConnectionCountry>>>;
  createdAt?: Maybe<Array<Maybe<OrderConnectionCreatedAt>>>;
  email?: Maybe<Array<Maybe<OrderConnectionEmail>>>;
  firstName?: Maybe<Array<Maybe<OrderConnectionFirstName>>>;
  id?: Maybe<Array<Maybe<OrderConnectionId>>>;
  idempotency?: Maybe<Array<Maybe<OrderConnectionIdempotency>>>;
  lastName?: Maybe<Array<Maybe<OrderConnectionLastName>>>;
  region?: Maybe<Array<Maybe<OrderConnectionRegion>>>;
  stripe_charge_id?: Maybe<Array<Maybe<OrderConnectionStripe_Charge_Id>>>;
  stripe_order_id?: Maybe<Array<Maybe<OrderConnectionStripe_Order_Id>>>;
  stripe_url?: Maybe<Array<Maybe<OrderConnectionStripe_Url>>>;
  total?: Maybe<Array<Maybe<OrderConnectionTotal>>>;
  updatedAt?: Maybe<Array<Maybe<OrderConnectionUpdatedAt>>>;
  zipCode?: Maybe<Array<Maybe<OrderConnectionZipCode>>>;
};

export type OrderInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  cartContents?: InputMaybe<Scalars['JSON']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  idempotency?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  stripe_charge_id?: InputMaybe<Scalars['String']>;
  stripe_order_id?: InputMaybe<Scalars['String']>;
  stripe_url?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID'];
  categories?: Maybe<Array<Maybe<Category>>>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  price: Scalars['Float'];
  slug: Scalars['String'];
  status: Enum_Product_Status;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type ProductCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ProductAggregator = {
  __typename?: 'ProductAggregator';
  avg?: Maybe<ProductAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ProductAggregatorMax>;
  min?: Maybe<ProductAggregatorMin>;
  sum?: Maybe<ProductAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductAggregatorAvg = {
  __typename?: 'ProductAggregatorAvg';
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMax = {
  __typename?: 'ProductAggregatorMax';
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorMin = {
  __typename?: 'ProductAggregatorMin';
  price?: Maybe<Scalars['Float']>;
};

export type ProductAggregatorSum = {
  __typename?: 'ProductAggregatorSum';
  price?: Maybe<Scalars['Float']>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate?: Maybe<ProductAggregator>;
  groupBy?: Maybe<ProductGroupBy>;
  values?: Maybe<Array<Maybe<Product>>>;
};

export type ProductConnectionCreatedAt = {
  __typename?: 'ProductConnectionCreatedAt';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProductConnectionDescription = {
  __typename?: 'ProductConnectionDescription';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProductConnectionId = {
  __typename?: 'ProductConnectionId';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProductConnectionImage = {
  __typename?: 'ProductConnectionImage';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProductConnectionPrice = {
  __typename?: 'ProductConnectionPrice';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type ProductConnectionSlug = {
  __typename?: 'ProductConnectionSlug';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProductConnectionStatus = {
  __typename?: 'ProductConnectionStatus';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProductConnectionTitle = {
  __typename?: 'ProductConnectionTitle';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProductConnectionUpdatedAt = {
  __typename?: 'ProductConnectionUpdatedAt';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProductConnection_Id = {
  __typename?: 'ProductConnection_id';
  connection?: Maybe<ProductConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _id?: Maybe<Array<Maybe<ProductConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<ProductConnectionCreatedAt>>>;
  description?: Maybe<Array<Maybe<ProductConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ProductConnectionId>>>;
  image?: Maybe<Array<Maybe<ProductConnectionImage>>>;
  price?: Maybe<Array<Maybe<ProductConnectionPrice>>>;
  slug?: Maybe<Array<Maybe<ProductConnectionSlug>>>;
  status?: Maybe<Array<Maybe<ProductConnectionStatus>>>;
  title?: Maybe<Array<Maybe<ProductConnectionTitle>>>;
  updatedAt?: Maybe<Array<Maybe<ProductConnectionUpdatedAt>>>;
};

export type ProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  slug: Scalars['String'];
  status?: InputMaybe<Enum_Product_Status>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  category?: Maybe<Category>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  header?: Maybe<Header>;
  idempotencies?: Maybe<Array<Maybe<Idempotency>>>;
  idempotenciesConnection?: Maybe<IdempotencyConnection>;
  idempotency?: Maybe<Idempotency>;
  me?: Maybe<UsersPermissionsMe>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  ordersConnection?: Maybe<OrderConnection>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsConnection?: Maybe<ProductConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoriesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryHeaderArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryIdempotenciesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryIdempotenciesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryIdempotencyArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryOrdersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryOrdersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryProductsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  _id: Scalars['ID'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  _id: Scalars['ID'];
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  _id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  _id: Scalars['ID'];
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateCategoryInput = {
  data?: InputMaybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type CreateIdempotencyInput = {
  data?: InputMaybe<IdempotencyInput>;
};

export type CreateIdempotencyPayload = {
  __typename?: 'createIdempotencyPayload';
  idempotency?: Maybe<Idempotency>;
};

export type CreateOrderInput = {
  data?: InputMaybe<OrderInput>;
};

export type CreateOrderPayload = {
  __typename?: 'createOrderPayload';
  order?: Maybe<Order>;
};

export type CreateProductInput = {
  data?: InputMaybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Product>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteCategoryInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteHeaderPayload = {
  __typename?: 'deleteHeaderPayload';
  header?: Maybe<Header>;
};

export type DeleteIdempotencyInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteIdempotencyPayload = {
  __typename?: 'deleteIdempotencyPayload';
  idempotency?: Maybe<Idempotency>;
};

export type DeleteOrderInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteOrderPayload = {
  __typename?: 'deleteOrderPayload';
  order?: Maybe<Order>;
};

export type DeleteProductInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Product>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditCategoryInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditComponentCustomCustomFieldInput = {
  id?: InputMaybe<Scalars['ID']>;
  options?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditHeaderInput = {
  company?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditIdempotencyInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['ID']>;
  published_at?: InputMaybe<Scalars['DateTime']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditOrderInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  cartContents?: InputMaybe<Scalars['JSON']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  idempotency?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  stripe_charge_id?: InputMaybe<Scalars['String']>;
  stripe_order_id?: InputMaybe<Scalars['String']>;
  stripe_url?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type EditProductInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Enum_Product_Status>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  data?: InputMaybe<EditCategoryInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateHeaderInput = {
  data?: InputMaybe<EditHeaderInput>;
};

export type UpdateHeaderPayload = {
  __typename?: 'updateHeaderPayload';
  header?: Maybe<Header>;
};

export type UpdateIdempotencyInput = {
  data?: InputMaybe<EditIdempotencyInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateIdempotencyPayload = {
  __typename?: 'updateIdempotencyPayload';
  idempotency?: Maybe<Idempotency>;
};

export type UpdateOrderInput = {
  data?: InputMaybe<EditOrderInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateOrderPayload = {
  __typename?: 'updateOrderPayload';
  order?: Maybe<Order>;
};

export type UpdateProductInput = {
  data?: InputMaybe<EditProductInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Product>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type FragmentImageFragment = { __typename?: 'UploadFile', id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string };

export type FragmentCategoryFragment = { __typename: 'Category', _id: string, createdAt: any, id: string, name: string, slug: string, updatedAt: any };

export type FragmentProductFragment = { __typename: 'Product', _id: string, createdAt: any, description: string, id: string, price: number, slug: string, status: Enum_Product_Status, title: string, updatedAt: any, image?: { __typename?: 'UploadFile', id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string } | null | undefined };

export type All_Products_QueryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type All_Products_QueryQuery = { __typename?: 'Query', products?: Array<{ __typename: 'Product', _id: string, createdAt: any, description: string, id: string, price: number, slug: string, status: Enum_Product_Status, title: string, updatedAt: any, categories?: Array<{ __typename: 'Category', _id: string, createdAt: any, id: string, name: string, slug: string, updatedAt: any } | null | undefined> | null | undefined, image?: { __typename?: 'UploadFile', id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string } | null | undefined } | null | undefined> | null | undefined };

export type All_Categories_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type All_Categories_QueryQuery = { __typename?: 'Query', categories?: Array<{ __typename: 'Category', _id: string, createdAt: any, id: string, name: string, slug: string, updatedAt: any, products?: Array<{ __typename: 'Product', _id: string, createdAt: any, description: string, id: string, price: number, slug: string, status: Enum_Product_Status, title: string, updatedAt: any, image?: { __typename?: 'UploadFile', id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export const FragmentCategoryFragmentDoc = gql`
    fragment fragmentCategory on Category {
  __typename
  _id
  createdAt
  id
  name
  slug
  updatedAt
}
    `;
export const FragmentImageFragmentDoc = gql`
    fragment fragmentImage on UploadFile {
  id
  createdAt
  updatedAt
  name
  alternativeText
  caption
  width
  height
  formats
  hash
  ext
  mime
  size
  url
}
    `;
export const FragmentProductFragmentDoc = gql`
    fragment fragmentProduct on Product {
  __typename
  _id
  createdAt
  description
  id
  image {
    ...fragmentImage
  }
  price
  slug
  status
  title
  updatedAt
}
    ${FragmentImageFragmentDoc}`;
export const All_Products_QueryDocument = gql`
    query ALL_PRODUCTS_QUERY($slug: String) {
  products(where: {slug: $slug}) {
    __typename
    _id
    categories {
      ...fragmentCategory
    }
    createdAt
    description
    id
    image {
      ...fragmentImage
    }
    price
    slug
    status
    title
    updatedAt
  }
}
    ${FragmentCategoryFragmentDoc}
${FragmentImageFragmentDoc}`;

/**
 * __useAll_Products_QueryQuery__
 *
 * To run a query within a React component, call `useAll_Products_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAll_Products_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAll_Products_QueryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAll_Products_QueryQuery(baseOptions?: Apollo.QueryHookOptions<All_Products_QueryQuery, All_Products_QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<All_Products_QueryQuery, All_Products_QueryQueryVariables>(All_Products_QueryDocument, options);
      }
export function useAll_Products_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<All_Products_QueryQuery, All_Products_QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<All_Products_QueryQuery, All_Products_QueryQueryVariables>(All_Products_QueryDocument, options);
        }
export type All_Products_QueryQueryHookResult = ReturnType<typeof useAll_Products_QueryQuery>;
export type All_Products_QueryLazyQueryHookResult = ReturnType<typeof useAll_Products_QueryLazyQuery>;
export type All_Products_QueryQueryResult = Apollo.QueryResult<All_Products_QueryQuery, All_Products_QueryQueryVariables>;
export const All_Categories_QueryDocument = gql`
    query ALL_CATEGORIES_QUERY {
  categories {
    __typename
    _id
    createdAt
    id
    name
    products {
      ...fragmentProduct
    }
    slug
    updatedAt
  }
}
    ${FragmentProductFragmentDoc}`;

/**
 * __useAll_Categories_QueryQuery__
 *
 * To run a query within a React component, call `useAll_Categories_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAll_Categories_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAll_Categories_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAll_Categories_QueryQuery(baseOptions?: Apollo.QueryHookOptions<All_Categories_QueryQuery, All_Categories_QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<All_Categories_QueryQuery, All_Categories_QueryQueryVariables>(All_Categories_QueryDocument, options);
      }
export function useAll_Categories_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<All_Categories_QueryQuery, All_Categories_QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<All_Categories_QueryQuery, All_Categories_QueryQueryVariables>(All_Categories_QueryDocument, options);
        }
export type All_Categories_QueryQueryHookResult = ReturnType<typeof useAll_Categories_QueryQuery>;
export type All_Categories_QueryLazyQueryHookResult = ReturnType<typeof useAll_Categories_QueryLazyQuery>;
export type All_Categories_QueryQueryResult = Apollo.QueryResult<All_Categories_QueryQuery, All_Categories_QueryQueryVariables>;