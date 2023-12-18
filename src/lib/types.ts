export type UserData = {
  success: boolean,
  page: number,
  total_pages: number,
  total_users: number,
  count: number,
  links: {
        next_url: string | null,
        prev_url: string | null
  },
  users: User[]
}


export type User = {
    id: number,
    name: string,
    email: string,
    phone: string,
    position: string,
    position_id: number,
    registration_timestamp: number,
    photo: string,
}

export type Position = {
    id: number,
    name: string,
}

export type Form = {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: {
   file: File,
    width: number,
    height: number
  };
};

export type PhotoDetails = {  
    file: File,
    width: number,
    height: number
}