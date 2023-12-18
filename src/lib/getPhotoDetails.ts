export const getPhotoWidthHeight = async (fileList: FileList):Promise<{width: number, height: number}> => {
return new Promise((resolve) => {
          const imageFile = fileList[0];
          const reader = new FileReader();
          const image = new Image();

          reader.readAsDataURL(imageFile);
          reader.onload = (event) => {
            if (event.target && typeof event.target.result === 'string') {
              image.src = event.target.result;
            }
          }
          image.onload = () => {
            resolve({width: image.width, height: image.height }) 
          };
      });
}