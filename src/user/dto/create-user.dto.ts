import { z } from 'zod';

export const createUserDtoSchema = z.object({
  username: z
    .string()
    .toLowerCase()
    .min(6, { message: 'Your username must be at least six charachaters' })
    .max(20, {
      message: 'Your username cannot be longer than 20 characaters',
    }),

  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]{6,32}$/, {
      message:
        'Your password should be 6-32 characters long, that has at least one capital letter, one small letter, one number and one character.',
    }),

  email: z.string().email({
    message: 'Invalid input, please provide a valid email address.',
  }),
});

export type CreateUserDto = z.infer<typeof createUserDtoSchema>;
