/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

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
      id
      title
      description
      image {
        url
      }
      price
      slug
      categories {
        ...fragmentCategory
      }
    }
  }
  ${FRAGMENT_CATEGORY}
`;
