/**
 * Authentication state interface
 * @interface AuthState
 */
export interface AuthState {
  /** Currently authenticated user */
  user: User | null;
  /** JWT access token */
  accessToken: string | null;
  /** Loading state */
  isLoading: boolean;
  /** Error message if authentication fails */
  error: string | null;
}

/**
 * Login credentials interface
 * @interface LoginCredentials
 */
export interface LoginCredentials {
  /** User's email */
  email: string;
  /** User's password */
  password: string;
  /** Remember me option */
  remember?: boolean;
}

/**
 * Registration data interface
 * @interface RegisterData
 */
export interface RegisterData {
  /** User's email */
  email: string;
  /** User's password */
  password: string;
  /** Password confirmation */
  passwordConfirmation: string;
  /** User's full name */
  name: string;
  /** Accepted terms and conditions */
  acceptedTerms: boolean;
}

/**
 * Password reset request interface
 * @interface PasswordResetRequest
 */
export interface PasswordResetRequest {
  /** User's email */
  email: string;
}

/**
 * Password reset confirmation interface
 * @interface PasswordResetConfirmation
 */
export interface PasswordResetConfirmation {
  /** Reset token */
  token: string;
  /** New password */
  newPassword: string;
  /** New password confirmation */
  confirmPassword: string;
}