import React, { useRef } from "react";

const FileUploader = ({ onFileSelect }: any) => {
  const fileInput = useRef<any>(null);

  const handleFileInput = (e: any) => {
    // handle validations
    const file = e.target.files[0];
  };
  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      <button
        onClick={(e: any) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      />
    </div>
  );
};

export default FileUploader;
