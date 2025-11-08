import React, { useRef } from 'react';
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  // We derive the previewUrl from the 'image' prop if it's already a URL string or a File object.
  const previewUrl = image ? (typeof image === 'string' ? image : URL.createObjectURL(image)) : null;

  const handleImageChange = (event) => { // Accept the event object
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (previewUrl && typeof image !== 'string') { // Clean up the object URL if it was a file
        URL.revokeObjectURL(previewUrl);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      <div className="relative group">
        <div
          className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer overflow-hidden shadow-lg"
          onClick={onChooseFile}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <LuUser className="w-16 h-16 text-gray-500" />
          )}
        </div>

        {/* Overlay for actions */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
          {image ? (
            <button
              onClick={handleRemoveImage}
              className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-md"
              title="Remove image"
            >
              <LuTrash className="w-6 h-6" />
            </button>
          ) : (
            <button
              onClick={onChooseFile}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
              title="Upload image"
            >
              <LuUpload className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoSelector;
