'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import 'cropperjs/dist/cropper.css';

export const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string>('');
  const [isOpenCrop, setIsOpenCrop] = useState(false);
  const cropperRef = useRef<ReactCropperElement>(null);

  useEffect(() => {
    setIsOpenCrop(true)
  }, [image])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const getCroppedImage = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      const dataUrl = croppedCanvas.toDataURL('image/jpeg', 0.9);
      setCroppedImage(dataUrl)
      setIsOpenCrop(false)
    }
  };

  const cancelCropped = () => {
    setImage(null)
    setIsOpenCrop(false)
  }

  return (
    <div>
      {(image && isOpenCrop) && (
        <div className="absolute top-0 left-1/2 z-20 p-10 rounded-md -translate-x-1/2 bg-[--bg-secondary] shadow-md flex flex-col gap-4">
          <Cropper
            src={image}
            style={{ height: '400px', width: '400px' }}
            ref={cropperRef}
            aspectRatio={1}
            guides={false}
            initialAspectRatio={0.75}
          />
          <div className="flex items-center gap-2 justify-between">
            <button type="button" className="bg-[--bg-primary] text-gray-50 font-semibold p-2 rounded-md w-full" onClick={cancelCropped}>Cancelar</button>
            <button type="button" className="bg-[--bg-primary] text-gray-50 font-semibold p-2 rounded-md  w-full" onClick={getCroppedImage}>Recortar</button>
          </div>
        </div>
      )}
      <label htmlFor="file-upload" className={` w-[152px] h-[152px] bg-gray-50 p-1 flex items-center justify-center cursor-pointer rounded-md text-gray-500 `}>
        {(croppedImage) && <Image src={croppedImage} alt="" width={120} height={160} className="rounded-lg" />}
        <input type="hidden" value={croppedImage}  name="image"/>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        {!croppedImage && <span className="text-center">Clique aqui para selecionar uma foto</span>}
      </label>
    </div>
  )
}