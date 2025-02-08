import { firestore } from "@/utils/firebase";
import { ResponseType, UserDataType } from "@/types";
import { doc, updateDoc } from "firebase/firestore";
import { uploadFileCloudinary } from "./imageService";

export const updateUser = async (
  uid: string,
  updatedData: UserDataType
): Promise<ResponseType> => {
  try {
    if (updatedData.image && updatedData.image.uri) {
      const imageUploadRes = await uploadFileCloudinary(
        updatedData.image,
        "users"
      );
      if (!imageUploadRes.success) {
        return {
          success: false,
          msg: imageUploadRes.msg || "Failed to upload image",
        };
      }
      updatedData.image = imageUploadRes.data;
    }

    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, updatedData);
    return { success: true, msg: "User updated successfully" };
  } catch (error: any) {
    console.log("Error updating user: ", error);
    return { success: false, msg: error?.message };
  }
};
