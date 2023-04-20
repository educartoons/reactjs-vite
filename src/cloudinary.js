import axios from 'axios';

async function uploadFile({ type, preset, file }) {
  const formData = new FormData();
  formData.append('upload_preset', preset);
  formData.append('file', file);

  const apiCloudinary = `http://api.cloudinary.com/v1_1/dowafljsv/${type}/upload`;

  const res = await axios.post(apiCloudinary, formData).then((res) => res.data);

  return res.secure_url;
}

export { uploadFile };
