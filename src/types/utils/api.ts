/**
 * Generic API response wrapper
 * @template T - The type of data returned by the API
 */
export type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
  timestamp: string;
};

/**
 * Paginated API response wrapper
 * @template T - The type of items in the paginated response
 */
export type PaginatedResponse<T> = ApiResponse<{
  items: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}>;

/**
 * API error response
 */
export type ApiError = {
  code: string;
  message: string;
  errors?: Record<string, string[]>;
  stack?: string;
};

/**
 * API response with error handling
 * @template T - The type of successful response data
 * @template E - The type of error response data
 */
export type ApiResult<T, E = ApiError> = 
  | { success: true; data: T }
  | { success: false; error: E };

/**
 * Async data fetching states
 * @template T - The type of data being fetched
 * @template E - The type of error that might occur
 */
export type AsyncData<T, E = ApiError> = {
  data: T | null;
  error: E | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};