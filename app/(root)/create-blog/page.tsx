import CreateBlogForm from "@/components/forms/CreateBlogForm";
import { fetchCategories } from "@/lib/utils";

const CreateBlog = async () => {
  const categories = await fetchCategories();

  return (
    <div className="w-full px-4">
      <div className="max-w-[600px] my-10 mx-auto">
        <h1 className="text-[#1A1A1F] text-[32px] sm:text-[24px] font-bold">
          ბლოგის დამატება
        </h1>
        <CreateBlogForm categories={categories} />
      </div>
    </div>
  );
};

export default CreateBlog;
