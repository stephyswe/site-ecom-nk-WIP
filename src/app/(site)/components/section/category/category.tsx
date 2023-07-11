import { categoryData } from "@/app/(site)/components/section/category/category-data";
import { CategoryItem } from "@/app/(site)/components/section/category/category-item";

export const SectionCategory = () => {
  return (
    <div>
      <div className="p q a0 aj ak al h9 gx dp">
        <div>
          <div className="b hs ht hu hv">
            {categoryData.map((item) => (
              <CategoryItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
