import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


 export const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://api.blog.redberryinternship.ge/api/categories"
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch categories. Status: ${response.status}`
        );
      }

      const { data } = await response.json();

      return data
    } catch (error: any) {
      console.error("Error fetching categories:", error.message);
      throw error;
    }
};