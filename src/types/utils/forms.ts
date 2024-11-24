import { FormEvent, ChangeEvent } from 'react';

/**
 * Generic form values type
 */
export type FormValues = Record<string, unknown>;

/**
 * Form field configuration
 * @template T - The type of the field value
 */
export interface FormField<T = unknown> {
  name: string;
  label: string;
  type: string;
  value: T;
  error?: string;
  touched?: boolean;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  helperText?: string;
  validate?: (value: T) => string | undefined;
}

/**
 * Form submission handler
 * @template T - The type of form values
 */
export type FormSubmitHandler<T extends FormValues> = (
  values: T,
  event: FormEvent<HTMLFormElement>
) => void | Promise<void>;

/**
 * Form field change handler
 * @template T - The type of the field value
 */
export type FieldChangeHandler<T = string> = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  field: FormField<T>
) => void;

/**
 * Form validation errors
 */
export type FormErrors<T extends FormValues> = Partial<Record<keyof T, string>>;

/**
 * Form state
 * @template T - The type of form values
 */
export interface FormState<T extends FormValues> {
  values: T;
  errors: FormErrors<T>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

/**
 * Form action handlers
 * @template T - The type of form values
 */
export interface FormActions<T extends FormValues> {
  setValues: (values: Partial<T>) => void;
  setErrors: (errors: FormErrors<T>) => void;
  setTouched: (touched: Partial<Record<keyof T, boolean>>) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  resetForm: () => void;
  validateForm: () => Promise<FormErrors<T>>;
  validateField: (name: keyof T) => Promise<string | undefined>;
}

/**
 * Form context value
 * @template T - The type of form values
 */
export interface FormContextValue<T extends FormValues> {
  state: FormState<T>;
  actions: FormActions<T>;
}