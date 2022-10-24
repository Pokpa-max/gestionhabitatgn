import { addDoc, collection, doc } from 'firebase/firestore'
import { deleteResizedStorageImage, deleteStorageImage, getDefaultImageDownloadURL, getImageLinkBySize } from '../../utils/firebase/storage'
import { advertisingConstructorCreate } from '../../utils/functionFactory'
import { db } from '../firebase/client_config'
import { encodeImageToBlurhash } from '@/utils/blurHash'


// advertisings

// export const advertinsingCollectionRef = collection(db, `commercials`)
export const advertinsingCollectionRef = collection(db, "sliders")
// sliderImages

export const advertinsingDocRef = (commercialId) => doc(db, `commercials/${commercialId}`)


export const addAdvertising = async (data) => {




    const imageUrl = await getDefaultImageDownloadURL(data.imageUrl[0], `pub/advertisings`)




    console.log("voir const😁😁😁😁😁😁");
    // console.log(advertisingConstructorCreate({ ...data, imageUrl1000, imageUrl, imageHash }));
    // console.log("voir doneedd ❤️❤️❤️❤️❤️❤️❤️❤️", { ...data, imageUrl1000, imageUrl, imageHash });
    //  await addDoc(advertinsingCollectionRef, advertisingConstructorCreate({ ...data, imageUrl1000, imageUrl, imageHash }))

    // await addDoc(advertinsingCollectionRef, { pub: "publication" })
    await addDoc(advertinsingCollectionRef, advertisingConstructorCreate({ ...data, imageUrl }));

}