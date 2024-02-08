import { z } from "zod";


export const blogsSchema = z.object({
  author: z.string().min(3, 'Author must be at least 3 characters'),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(2, 'Description must be at least 2 characters').max(400, 'Description must be less than 400 characters'),
  imageUrl: z.string(),
  publishDate: z.date(),
  email: z.string().optional(),
  categories: z.string().array(),
});
