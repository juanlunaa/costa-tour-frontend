import { useEffect, useState } from "react";

export default function usePreviewAvatar({ inputFile }) {
  const [imgSrc, setImgSrc] = useState(null)

  useEffect(() => {
    if (inputFile !== undefined && inputFile?.length !== 0) {
      const newUrl = URL.createObjectURL(inputFile[0]);

      if (newUrl !== imgSrc) {
        setImgSrc(newUrl);
      }
    }
  }, [inputFile])

  const resetPreview = () => {
    setImgSrc(null)
  }

  return { previewSrc: imgSrc, resetPreview }
}