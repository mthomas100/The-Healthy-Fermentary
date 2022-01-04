/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

import { Category } from './types';

// FRAGMENTS
const FRAGMENT_IMAGE = gql`
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

export const FRAGMENT_CATEGORY = gql`
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

export const FRAGMENT_PRODUCT = gql`
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
  ${FRAGMENT_IMAGE}
`;

// QUERIES

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($slug: String) {
    products(where: { slug: $slug }) {
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
  ${FRAGMENT_CATEGORY}
  ${FRAGMENT_IMAGE}
`;

export const ALL_CATEGORIES_QUERY = gql`
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
  ${FRAGMENT_PRODUCT}
`;
