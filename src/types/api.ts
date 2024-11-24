/**
 * Generic API response interface
 * @interface ApiResponse
 * @template T - The type of data returned by the API
 */
export interface ApiResponse<T = unknown> {
  /** Response data */
  data: T;
  /** Response status */
  status: number;
  /** Success indicator */
  success: boolean;
  /** Response message */
  message?: string;
  /** Error details if any */
  error?: ApiError;
  /** Pagination metadata if applicable */
  meta?: PaginationMeta;
}

/**
 * API error interface
 * @interface ApiError
 */
export interface ApiError {
  /** Error code */
  code: string;
  /** Error message */
  message: string;
  /** Detailed error information */
  details?: Record<string, unknown>;
  /** Validation errors if any */
  validation?: ValidationError[];
}

/**
 * Validation error interface
 * @interface ValidationError
 */
export interface ValidationError {
  /** Field that failed validation */
  field: string;
  /** Error message */
  message: string;
  /** Error code */
  code: string;
}

/**
 * Pagination metadata interface
 * @interface PaginationMeta
 */
export interface PaginationMeta {
  /** Current page number */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Number of items per page */
  perPage: number;
  /** Total number of items */
  total: number;
  /** Has more pages indicator */
  hasMore: boolean;
}