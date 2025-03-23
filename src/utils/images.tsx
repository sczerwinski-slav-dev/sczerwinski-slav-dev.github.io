import {baseUrl, imagesPath} from '../config/blob.tsx'
import Image from '../types/Image.tsx'

export function getThumbnailUrl(image: Image | null): string {
  if (!image) {
    return `${baseUrl}${imagesPath}/no-thumbnail.webp`
  }
  return `${baseUrl}${imagesPath}/${image.name}-thumb.${image.type}`
}
