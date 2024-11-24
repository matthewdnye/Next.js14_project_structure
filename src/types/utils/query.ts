/**
 * Base query parameters interface
 */
export interface BaseQueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
}

/**
 * Filter operator types
 */
export type FilterOperator = 
  | 'eq'    // equals
  | 'neq'   // not equals
  | 'gt'    // greater than
  | 'gte'   // greater than or equal
  | 'lt'    // less than
  | 'lte'   // less than or equal
  | 'in'    // in array
  | 'nin'   // not in array
  | 'like'  // contains
  | 'between'; // between range

/**
 * Filter value types
 */
export type FilterValue = string | number | boolean | Date | Array<string | number>;

/**
 * Filter condition
 */
export interface FilterCondition {
  field: string;
  operator: FilterOperator;
  value: FilterValue;
}

/**
 * Advanced query parameters
 */
export interface AdvancedQueryParams extends BaseQueryParams {
  filters?: FilterCondition[];
  include?: string[];
  fields?: string[];
  groupBy?: string[];
  timeRange?: {
    start: Date;
    end: Date;
  };
}

/**
 * Query result metadata
 */
export interface QueryMetadata {
  took: number;
  total: number;
  page: number;
  pages: number;
}

/**
 * Query result with metadata
 * @template T - The type of items in the query result
 */
export interface QueryResult<T> {
  items: T[];
  metadata: QueryMetadata;
}