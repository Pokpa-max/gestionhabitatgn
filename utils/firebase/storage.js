import { storage } from "../../lib/firebase/client_config.js";
import { ref, uploadBytes, getDownloadURL, getStorage, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

export const uploadFile = (file, folderName) => {
  if (!file)
    return new Promise((resolve) => {
      resolve(null);
    });

  const ext = file.name.split(".").pop(); // Extract image extension
  const filename = `${uuidv4()}.${ext}`; // Generate unique name
  const fileRef = ref(storage, `${folderName}/${filename}`);
  return uploadBytes(fileRef, file);
};

export const deleteStorageImage = (imageUrl) => {
  const storage = getStorage();
  // Create a reference to the file to delete
  const desertRef = ref(storage, imageUrl);
  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      throw `image supprimee avec succes`;
    })
    .catch(() => {
      throw `pas supprimee feou`;
    });
};

export const getImageDownloadURL = async (file, folderName) => {
  const result = await uploadFile(file, folderName);
  const nameImage = result.ref.name.split(".");
  const storageRef = ref(`${folderName}/${nameImage[0]}_200x200.${nameImage[1]}`);

  return keepTrying(10, storageRef).then((url) => url);
};

export const getDefaultImageDownloadURL = async (file, folderName) => {
  const result = await uploadFile(file, folderName);
  return getDownloadURL(result.ref)
    .then((url) => {
      return url;
    })
}

function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
}

function keepTrying(triesRemaining, storageRef) {
  if (triesRemaining < 0) {
    return Promise.reject("out of tries");
  }

  return getDownloadURL(ref(storage, storageRef))
    .then((url) => {
      return url;
    })
    .catch((error) => {
      switch (error.code) {
        case "storage/object-not-found":
          return delay(2000).then(() => {
            console.log("retrying encours", error.message);

            return keepTrying(triesRemaining - 1, storageRef);
          });
        default:
          console.log("default", error.message);
          return Promise.reject(error);
      }
    });
}
