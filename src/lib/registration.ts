import { BASE_URL } from "./baseUrl";
import { getRegistrationToken } from "./getRegistrationToken";
import { Form } from "./types";

export const signUp = async (data: Form) => {
    const token = await getRegistrationToken();
    const formData = new FormData();
    formData.append("position_id", data.position_id + "");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("photo", data.photo.file);
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      body: formData,
      headers: { Token: token.token },
    });
    return response.json();
};
