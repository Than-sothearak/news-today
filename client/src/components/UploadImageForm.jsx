import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const UploadImageForm = ({
  imageUrl,
  handleImageChange,
  handleUpload,
  uploading,
  selectedPreviewImage,
  handleEditImage,
  isEditing,
  handleRemoveImgae,
  imageFile,
}) => {
  return (
    <div>
      <div className="flex flex-col pt-5 px-7 pb-5 gap-2 text-start border-2 border-gray-200">
        <h1 className="text-3xl font-bold">Image</h1>
        <div className="flex flex-col gap-4">
          <div
            className={`${
              imageUrl ? "h-full" : "h-48"
            } border rounded-md p-4 w-full flex justify-center items-center`}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="Uploaded" />
            ) : (
              <p className="text-slate-300">No image</p>
            )}
          </div>

          {!isEditing ? (
            <div className="w-full flex justify-end">
              <button
                onClick={() => handleEditImage()}
                className="flex justify-end items-center gap-2 hover:text-blue-600"
              >
                <CiEdit size={18} /> <h2>Edit</h2>
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-end">
              <button
                onClick={() => handleEditImage()}
                className="flex justify-end items-center gap-2 hover:text-blue-600"
              >
                <MdOutlineCancel size={18} /> <h2>Close</h2>
              </button>
            </div>
          )}
        </div>

        {isEditing && (
          <div>
            <h3>Images</h3>
            <div>
              <label className="flex flex-col justify-center items-center border-4 h-60 rounded-md border-dotted cursor-pointer">
                <div>
                  {uploading ? (
                    <button
                      className="flex items-center justify-center space-x-2 gap-2"
                      disabled
                    >
                      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                      Uploading...
                    </button>
                  ) : (
                    <h2 className="text-blue-500">Choose image file here</h2>
                  )}
                </div>

                <input
                  className="hidden"
                  onChange={(e) => handleImageChange(e.target.files?.[0])}
                  accept="image/*"
                  type="file"
                  name="image"
                  disabled={uploading}
                />
              </label>
              <div className="text-xs text-muted-foreground mt-4">
                <p>16:9 aspect ratio recommended</p>
              </div>

              {selectedPreviewImage && (
                <div className="mt-4 w-48 h-full relative">
                  <img
                    src={selectedPreviewImage}
                    alt="Selected Preview"
                    className="w-48 z-0 max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-md"
                  />
                  <div className="absolute top-0 right-0 z-50">
                    <button onClick={() => handleRemoveImgae()}>
                      <MdOutlineCancel size={28} />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => handleUpload()}
              className={`mt-4 p-2 rounded-lg border hover:bg-blue-600 hover:text-white`}
            >
              Upload Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImageForm;
