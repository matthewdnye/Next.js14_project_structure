import { ParsedUrlQuery } from 'querystring';

/**
 * Dynamic route parameters
 */
export type RouteParams = {
  [key: string]: string | string[];
};

/**
 * Dynamic route parameter with ID
 */
export type IdRouteParams = {
  id: string;
};

/**
 * Slug route parameter
 */
export type SlugRouteParams = {
  slug: string;
};

/**
 * Nested dynamic route parameters
 */
export type NestedRouteParams = {
  parentId: string;
  childId: string;
};

/**
 * Extended query parameters interface
 */
export interface ExtendedQuery extends ParsedUrlQuery {
  page?: string;
  limit?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
  filter?: string;
  view?: 'grid' | 'list';
}

/**
 * Route configuration
 */
export type RouteConfig = {
  path: string;
  exact?: boolean;
  auth?: boolean;
  roles?: string[];
  layout?: string;
};