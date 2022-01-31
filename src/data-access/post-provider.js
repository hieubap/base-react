import { API } from "variables";
import baseProvider from "./base-provider";

export default {
  ...baseProvider(API.post),
};
