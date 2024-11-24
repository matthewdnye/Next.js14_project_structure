/**
 * Represents a user's role in the system
 */
export type UserRole = 'user' | 'admin' | 'moderator';

/**
 * Represents the status of a user's account
 */
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'pending';

/**
 * Represents a user in the system
 * @interface User
 */
export interface User {
  /** Unique identifier for the user */
  id: string;
  /** User's email address */
  email: string;
  /** User's display name */
  name: string;
  /** URL to the user's avatar image */
  avatar?: string;
  /** User's role in the system */
  role: UserRole;
  /** Current status of the user's account */
  status: UserStatus;
  /** Timestamp of when the user was created */
  createdAt: string;
  /** Timestamp of the user's last login */
  lastLoginAt?: string;
  /** User's preferences */
  preferences?: UserPreferences;
}

/**
 * Represents user preferences
 * @interface UserPreferences
 */
export interface UserPreferences {
  /** User's preferred theme */
  theme: 'light' | 'dark' | 'system';
  /** User's preferred language */
  language: string;
  /** Email notification settings */
  notifications: {
    email: boolean;
    push: boolean;
    marketing: boolean;
  };
}