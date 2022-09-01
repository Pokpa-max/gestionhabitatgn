import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    updateDoc,
    addDoc,
} from 'firebase/firestore'
import { db } from '@/lib/firebase/client_config'
import { parseDocsData } from '@/utils/firebase/firestore'
import { categoryConstructorCreate, bundleConstructorCreate } from '../../utils/functionFactory'
import { deleteResizedStorageImage, getDefaultImageDownloadURL, getImageLinkBySize } from '../../utils/firebase/storage'
import { encodeImageToBlurhash } from '@/utils/blurHash'

// Categories

export const categoriesCollectionRef = collection(db, `categories`)

export const categoryDocRef = (categoryId) => doc(db, `categories/${categoryId}`)

export const getCategories = (setState) => {
    return onSnapshot(categoriesCollectionRef, (querySnapshot) => {
        const categories = parseDocsData(querySnapshot)
        console.log('categories', categories)
        setState(categories)
    })
}

export const editCategory = async (categoryId, data, updateImage, oldImageUrl, oldImageUrl1000) => {
    const imageData = {}
    if (updateImage) {
        const imageUrl = await getDefaultImageDownloadURL(data.imageUrl[0], `app/categories`);
        const imageHash = await encodeImageToBlurhash(imageUrl)
        deleteResizedStorageImage(oldImageUrl, '1000x1000')
        deleteResizedStorageImage(oldImageUrl, '200x200')

        imageData.imageUrl = imageUrl;
        imageData.imageUrl1000 = getImageLinkBySize(imageUrl, '1000x1000');
        imageData.imageHash = imageHash;
    }
    await updateDoc(categoryDocRef(categoryId), categoryConstructorCreate({ ...data, imageUrl: oldImageUrl, imageUrl1000: oldImageUrl1000, ...imageData }, true))
}

export const addCategory = async (data) => {
    const imageUrl = await getDefaultImageDownloadURL(
        data.imageUrl[0],
        `app/categories`
    )

    const imageUrl1000 = getImageLinkBySize(imageUrl, '1000x1000')
    const imageHash = await encodeImageToBlurhash(imageUrl)

    await addDoc(categoriesCollectionRef, categoryConstructorCreate({ ...data, imageUrl1000, imageUrl, imageHash }))
}

export const deleteCategory = async (categoryId, imageUrl) => {
    deleteResizedStorageImage(imageUrl, '1000x1000')
    deleteResizedStorageImage(imageUrl, '200x200')
    await deleteDoc(categoryDocRef(categoryId))
}

// Bundle

export const bundlesCollectionRef = collection(db, `bundles`)

export const bundleDocRef = (bundleId) => doc(db, `bundles/${bundleId}`)

export const getBundles = (setState) => {
    return onSnapshot(bundlesCollectionRef, (querySnapshot) => {
        const bundles = parseDocsData(querySnapshot)
        console.log('bundles', bundles)
        setState(bundles)
    })
}

export const editBundle = async (bundleId, data, updateImage, oldImageUrl, oldImageUrl1000) => {
    const imageData = {}
    if (updateImage) {
        const imageUrl = await getDefaultImageDownloadURL(data.imageUrl[0], `app/bundles`);
        const imageHash = await encodeImageToBlurhash(imageUrl)
        deleteResizedStorageImage(oldImageUrl, '1000x1000')
        deleteResizedStorageImage(oldImageUrl, '200x200')

        imageData.imageUrl = imageUrl;
        imageData.imageUrl1000 = getImageLinkBySize(imageUrl, '1000x1000');
        imageData.imageHash = imageHash;
    }
    await updateDoc(bundleDocRef(bundleId), bundleConstructorCreate({ ...data, imageUrl: oldImageUrl, imageUrl1000: oldImageUrl1000, ...imageData }, true))
}

export const addBundle = async (data) => {
    const imageUrl = await getDefaultImageDownloadURL(
        data.imageUrl[0],
        `app/bundles`
    )

    const imageUrl1000 = getImageLinkBySize(imageUrl, '1000x1000')
    const imageHash = await encodeImageToBlurhash(imageUrl)

    await addDoc(bundlesCollectionRef, bundleConstructorCreate({ ...data, imageUrl1000, imageUrl, imageHash }))
}

export const deleteBundle = async (bundleId, imageUrl) => {
    deleteResizedStorageImage(imageUrl, '1000x1000')
    deleteResizedStorageImage(imageUrl, '200x200')
    await deleteDoc(bundleDocRef(bundleId))
}