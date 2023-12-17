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

export type FormData = {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: FileList;
};
