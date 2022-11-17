export const arrayBufferToBase64 = (buffer: any, contentType: any) => {
  const base64Flag = `data:${contentType};base64,`;
  let binary = "";
  const bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  const srcImg = base64Flag + window.btoa(binary);
  return srcImg;
};
