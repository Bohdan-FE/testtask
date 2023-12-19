import { PhotoDetails } from "./types";

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
        value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
        message: 'Email incorrect'
    } 
}

export const phoneValidation = {
    required: 'Phone required',
    pattern: {
        value: /^[\+]{0,1}380([0-9]{9})$/,
        message: 'Phone must start with +380 and be 13 characters long'
    }
}

export const positionValidation = {
    required: true
}

export const photoValidation = {
    required: 'Photo required',
    validate: {
      resolution: (photoDetails: PhotoDetails) => {
        if (photoDetails.width < 70 && photoDetails.height < 70) {
        return 'Photo resolution must be at least 70x70'
        }
        return true
      },
      size: (photoDetails: PhotoDetails) => {
        if (photoDetails.file.size > (5 * 1024 * 1024)) {
            return 'Photo size must not exceed 5MB'
        }
        return true
        },
        extension: (photoDetails: PhotoDetails) => {
          const validTypes = ['image/jpeg', 'image/jpg']
        if (!validTypes.includes(photoDetails.file.type)) {
            return 'Photo extension must be jpeg/jpg'
        }
        return true
        },
   },
};
