// src/utils/auth.ts
import users from './mockUsers';
import bcrypt from 'bcryptjs';
import { User } from './types';

// Finds a user by email
export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = users.find(user => user.email === email);
  return user || null;
};

// Verifies the password by comparing the plain text with the hashed password
export const verifyPassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  const isValid = await bcrypt.compare(plainPassword, hashedPassword);
  return isValid;
};
