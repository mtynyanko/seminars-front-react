import { AxiosResponse } from "axios";
import api from "./api";

export const getSeminars = (): Promise<AxiosResponse> => {
  return api.get("seminars");
}

export const deleteSeminar = (id: number): Promise<AxiosResponse> => {
  return api.delete("seminars", { params: id });
}

export const updateSeminar = (id: number, data: object): Promise<AxiosResponse> => {
  return api.patch(`seminars/${id}`, data);
}