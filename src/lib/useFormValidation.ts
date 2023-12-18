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
      resolution: (photoDetails: PhotoDetails) => {
        if (photoDetails.width < 70 && photoDetails.height < 70) {
        return 'Photo must be at least 70x70'
        }
        return true
      },
      size: (photoDetails: PhotoDetails) => {
        if (photoDetails.size > (5 * 1024 * 1024)) {
            return 'Photo must be less 5MB'
        }
        return true
        }
   },
};
