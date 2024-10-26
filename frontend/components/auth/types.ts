import { z } from "zod";

export const zodPassword = z
  .string()
  .min(8, "Must be at least 8 characters")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}(?=.*[-+_!@#$%^&*.,?]).*$/,
    "Must contain at least one uppercase letter, one lowercase letter, one number and a special character"
  );
