import { z } from 'zod';

export const createContactDataSchema = () =>
  z.object({
    firstName: z.string().min(1, 'Name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    phone: z.string().optional(),
    email: z
      .string()
      .email('Invalid email')
      .min(1, 'Email is required'),
    address1: z.string().optional(),
    address2: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    zip: z.string().optional(),
  });

export const createChangePasswordSchema = () =>
  z
    .object({
      currentPassword: z.string().min(1, 'Current password is required'),
      newPassword: z.string().min(1, 'New password is required'),
      repeatNewPassword: z.string().min(1, 'Repeat new password'),
    })
    .refine((data) => data.newPassword === data.repeatNewPassword, {
      message: 'The passwords do not match.',
      path: ['repeatNewPassword'],
    });

export const createRegistrationSchema = () =>
  z
    .object({
      firstName: z.string().min(1, 'Please enter your first name.'),
      lastName: z.string().min(1, 'Please enter your last name.'),
      username: z.string().optional(),
      email: z
        .string()
        .min(1, 'Please enter your email address.')
        .email('Please enter a valid email address.'),
      phone: z.string().optional(),
      password: z.string().min(1, 'Please create a password.'),
      repeatPassword: z.string().min(1, 'Please repeat your password'),
      agreement: z.boolean().refine((value) => value, {
        message: 'Please accept the terms and privacy policy.',
      }),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: "Passwords don't match",
      path: ['repeatPassword'],
    });

export type ContactDataSchema = z.infer<ReturnType<typeof createContactDataSchema>>;
export type ChangePasswordSchema = z.infer<ReturnType<typeof createChangePasswordSchema>>;
export type RegistrationSchema = z.infer<ReturnType<typeof createRegistrationSchema>>;
