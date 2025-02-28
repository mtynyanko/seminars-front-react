import { AxiosResponse } from "axios";
import api from "./api";
import { ISeminar } from "../types";

export const getSeminars = (): Promise<AxiosResponse<ISeminar[]>> => {
  return api.get("seminars");
}

export const deleteSeminar = (id: number): Promise<AxiosResponse> => {
  return api.delete("seminars", { params: id });
}

export const updateSeminar = (id: number, seminar: ISeminar): Promise<AxiosResponse> => {
  return api.patch(`seminars/${id}`, seminar);
}