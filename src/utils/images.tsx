import {baseUrl, imagesPath} from '../config/blob.tsx'
import Image from '../types/Image.tsx'

type ImageSize = '' | '@2' | '@3'

export function getImageUrl(image: Image, size: ImageSize = ''): string {
  return `${baseUrl}${imagesPath}/${image.name}${size}.${image.type}`
}

export function getThumbnailUrl(image: Image | null): string {
  if (!image) {
    return `${baseUrl}${imagesPath}/no-thumbnail.webp`
  }
  return `${baseUrl}${imagesPath}/${image.name}-thumb.${image.type}`
}
