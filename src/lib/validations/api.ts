import * as z from 'zod';

export const paginationSchema = z.object({
  page: z
    .number()
    .int('Page must be an integer')
    .min(1, 'Page must be greater than 0')
    .optional()
    .default(1),
  limit: z
    .number()
    .int('Limit must be an integer')
    .min(1, 'Limit must be greater than 0')
    .max(100, 'Limit cannot exceed 100')
    .optional()
    .default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
  search: z.string().optional(),
});

export const idParamSchema = z.object({
  id: z
    .string()
    .min(1, 'ID is required')
    .regex(/^[0-9a-fA-F]{24}$/, 'Invalid ID format'),
});

export const dateRangeSchema = z.object({
  startDate: z.string().datetime('Invalid start date'),
  endDate: z.string().datetime('Invalid end date'),
}).refine(
  (data) => new Date(data.startDate) <= new Date(data.endDate),
  {
    message: 'Start date must be before or equal to end date',
    path: ['startDate'],
  }
);

export const apiKeySchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name cannot exceed 50 characters'),
  expiresAt: z
    .string()
    .datetime('Invalid expiration date')
    .optional(),
  scopes: z
    .array(z.string())
    .min(1, 'At least one scope is required')
    .refine(
      (items) => new Set(items).size === items.length,
      'Duplicate scopes are not allowed'
    ),
});

export type PaginationParams = z.infer<typeof paginationSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
export type DateRange = z.infer<typeof dateRangeSchema>;
export type ApiKeyInput = z.infer<typeof apiKeySchema>;