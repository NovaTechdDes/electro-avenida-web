import { GridProductsFeatured } from "@/src/components";
import { GridCategories } from "@/src/components/category/GridCategories";
import React from "react";

const page = () => {
  return (
    <div>
      <GridCategories />
      <GridProductsFeatured />
    </div>
  );
};

export default page;
