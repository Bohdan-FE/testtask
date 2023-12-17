export const nameValidation = {
    required: 'Name required',
    minLength: {
        value: 2,
        message: 'Name must have more than 2 character'
    },
    maxLength: {
        value: 60,
        message: 'Name must have more than 60 character'
    },
}

export const emailValidation = {
    required: 'Email required',
    pattern: {
        value: /^(("[\w\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w\s]+")([\w-]+(?:\.[\w-]+)*))@((([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([\w-]+\.)+[\w]{2,})))$/,
        message: 'Email incorrect'
    } 
}

export const phoneValidation = {
    required: 'Phone required',
    pattern: {
        value: /^\+380\d{9}$/,
        message: 'Phone must start with +380 and be 13 characters long '
    }
}

export const positionValidation = {
    required: true
}

export const photoValidation = {
    required: 'Photo required',
    validate: {
    error: async (fileList: FileList) => {
      return new Promise((resolve) => {
        if (fileList) {
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
            if (image.width < 70 || image.height < 70) {
              console.log(image.width, image.height);
              resolve('The image should be larger than 70x70');
            } else {
              resolve(true);
            }
          };
        } else {
          resolve(true);
        }
      });
    },
  },
};



// (fileList: FileList) => {
//             if (fileList) {
            
//             const imageFile = fileList[0]
//             const reader = new FileReader();
//             const image = new Image()
//             reader.readAsDataURL(imageFile);
//             reader.onload = (event) => {
//                 if (event.target && typeof event.target.result === 'string') {
//                     image.src = event.target.result;
//                     image.onload = () => {
//                         if (image.width < 70 || image.height < 70) {  
//                             return 'The image should be larger than 70x70'
//                         }
//                      }
//                     }   
//                 }
            
//         };
//         return true
//         }}