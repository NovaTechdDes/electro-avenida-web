'use server';
import cloudinary from 'cloudinary';
import { dbConnect } from '../lib/dbConect';
import { ProductImage } from '../models';
import path from 'path';
import { writeFile } from 'fs';

export const getProductImages = async () => {
  try {
    await dbConnect();
    const images = await ProductImage.find();
    return new Response(JSON.stringify(images));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error al obtener las imagenes', ok: false }), {
      status: 500,
    });
  }
};

export const uploadImagesCloudinary = async (files: File[], codigo: string) => {
  const urls = [];
  for (const elem of files) {
    urls.push(await uploadImage(elem, codigo));
  }
  return {
    ok: true,
    urls,
  };
};

const uploadImage = async (image: File, codigo: string) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filePath = path.join(process.cwd(), 'public', image.name);
  await writeFile(filePath, buffer, (err) => {
    if (err) {
      console.error(err);
    }
  });

  const options = {
    folder: `Electro-Avenida/${codigo}`,
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.v2.uploader.upload(filePath, options);
    return result.url;
  } catch (error) {
    console.error(error);
    return '';
  }
};
