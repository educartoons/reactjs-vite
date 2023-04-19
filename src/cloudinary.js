import axios from 'axios';

export async function uploadImage({ type, file, preset }) {
  const formData = new FormData();
  formData.append('upload_preset', preset);
  formData.append('file', file);

  const data = await axios
    .post(`http://api.cloudinary.com/v1_1/dowafljsv/${type}/upload`, formData)
    .then((res) => res.data);

  return data.secure_url;
}
