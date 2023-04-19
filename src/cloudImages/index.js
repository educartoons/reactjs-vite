import cloudinary from 'cloudinary';

export default cloudinaryHandler = cloudinary.v2.config({
  cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
  cloud_key: import.meta.env.VITE_CLOUDINARY_KEY,
  cloud_secret: import.meta.env.VITE_CLOUDINARY_SECRET,
});
