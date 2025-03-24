import {baseUrl, imagesPath} from '../config/blob.tsx'
import Image from '../types/Image.tsx'

type ImageSize = '' | '@2' | '@3'

/**
 * Return URL of an image in the blob storage, as described in the image descriptor.
 *
 * Note that the image is not guaranteed to exist at the returned URL.
 *
 * @param {Image} image Image descriptor.
 * @param {ImageSize} size Image size ('', '@2' or '@3').
 *
 * @returns {string} Presumed URL of the image.
 */
export function getImageUrl(image: Image, size: ImageSize = ''): string {
  return `${baseUrl}${imagesPath}/${image.name}${size}.${image.type}`
}

/**
 * Return URL of a thumbnail in the blob storage, as described in the image descriptor.
 *
 * Note that the thumbnail is not guaranteed to exist at the returned URL.
 *
 * @param {Image | null} image Image descriptor, or null.
 *
 * @returns {string} Presumed URL of the thumbnail if the image descriptor is not null;
 * or URL of a placeholder thumbnail.
 */
export function getThumbnailUrl(image: Image | null): string {
  if (!image) {
    return `${baseUrl}${imagesPath}/no-thumbnail.webp`
  }
  return `${baseUrl}${imagesPath}/${image.name}-thumb.${image.type}`
}
