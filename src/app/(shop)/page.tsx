import { GridProductsFeatured } from "@/src/components";
import { About } from "@/src/components/about/About";
import { Carousel } from "@/src/components/carousel/Carousel";
import { GridCategories } from "@/src/components/category/GridCategories";
import { Contact } from "@/src/components/contact/Contact";
import React from "react";

const page = () => {
  return (
    <div>
      <Carousel />
      <GridCategories />
      <GridProductsFeatured />
      <About />
      <Contact />
    </div>
  );
};

export default page;
