import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  isAdmin: z.boolean(),
});

export type IUser = z.infer<typeof UserSchema>;

export const FindUserSchema = z.object({
  id: z.string(),
});
export type IFindUser = z.infer<typeof FindUserSchema>;

export const CreateUserSchema = z.object({});
export type ICreateUser = z.infer<typeof CreateUserSchema>;

export type ILoadUser = IFindUser | ICreateUser;
