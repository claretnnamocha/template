import { v2 as cloudinary } from "cloudinary";

export const upload = async (payload, folder: string = "users") => {
  try {
    const parts = payload.name.split(".");
    const ext = parts[parts.length - 1];
    const id = Date.now();
    const file_name = `${id}.${ext}`;

    const resource_type = payload.type.split("/")[0];
    const upload = await cloudinary.uploader.upload(payload.path, {
      public_id: `${folder}/${file_name}`,
      resource_type,
    });
    return upload.secure_url;
  } catch (error) {
    return false;
  }
};
