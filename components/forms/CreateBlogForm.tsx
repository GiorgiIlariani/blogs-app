"use client";

import { blogsSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { CategoryTypes } from "@/types";

const CreateBlogForm = ({ categories }: { categories: CategoryTypes[] }) => {
  const form = useForm<z.infer<typeof blogsSchema>>({
    resolver: zodResolver(blogsSchema),
    defaultValues: {
      author: "",
    },
  });

  function onSubmit(values: z.infer<typeof blogsSchema>) {
    console.log(values);
  }
  return <div></div>;
};

export default CreateBlogForm;
