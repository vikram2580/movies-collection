import { object, string } from "yup";

/////////////////////////////// Sign Schema /////////////////////////////////////
export const loginSchema = object().shape({
  username: string().required("Required"),
  password: string().required("Required"),
});
