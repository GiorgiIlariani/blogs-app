"use client";

import { Button } from "@/components/ui/button";
import { fetchCategories } from "@/lib/utils";
import { CategoryTypes } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoriesList = () => {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const categories = await fetchCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const formattedString = selectedCategories
      .map((category) => `category=${encodeURIComponent(category)}`)
      .join("&");
    router.push(`${pathname}?${formattedString}`);
  }, [selectedCategories, router, pathname]);

  const handleCategoryClick = (categoryTitle: string) => {
    if (selectedCategories.includes(categoryTitle)) {
      setSelectedCategories((prev) =>
        prev.filter((category) => category !== categoryTitle)
      );
    } else {
      setSelectedCategories((prev) => [...prev, categoryTitle]);
    }
  };

  return (
    <div className="max-w-[610px] mx-auto flex flex-wrap md:flex-nowrap items-center gap-[10px] overflow-x-scroll no-scrollbar whitespace-nowrap mt-16 px-3">
      {categories.map(({ title, text_color, id, background_color }) => (
        <Button
          key={id}
          onClick={() => handleCategoryClick(title)}
          style={{
            color: text_color,
            backgroundColor: background_color,
            border: selectedCategories.includes(title)
              ? "1px solid #000000"
              : "1px solid transparent",
          }}>
          {title}
        </Button>
      ))}
    </div>
  );
};

export default CategoriesList;

// <Button
//   key={id}
// //   onClick={() => handleCategoryClick(index)}
//   text={title}
//   style={{
//     color: text_color,
//     backgroundColor: background_color,

//   }}
//   className=""
// />
