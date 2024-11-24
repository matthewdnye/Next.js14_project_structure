import { z } from 'zod';

/**
 * Base form field interface
 * @interface FormField
 * @template T - The type of the field value
 */
export interface FormField<T = unknown> {
  /** Field name */
  name: string;
  /** Field label */
  label: string;
  /** Field value */
  value: T;
  /** Error message if validation fails */
  error?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Field description or help text */
  description?: string;
}

/**
 * Form submission state interface
 * @interface FormState
 */
export interface FormState {
  /** Whether the form is currently submitting */
  isSubmitting: boolean;
  /** Whether the form has been submitted */
  isSubmitted: boolean;
  /** Whether the form submission was successful */
  isSuccess: boolean;
  /** Form submission error */
  error?: string;
}

/**
 * Login form schema using Zod
 */
export const loginFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  remember: z.boolean().optional(),
});

/**
 * Registration form schema using Zod
 */
export const registerFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  passwordConfirmation: z.string(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ['passwordConfirmation'],
});

/**
 * Infer types from Zod schemas
 */
export type LoginFormData = z.infer<typeof loginFormSchema>;
export type RegisterFormData = z.infer<typeof registerFormSchema>;