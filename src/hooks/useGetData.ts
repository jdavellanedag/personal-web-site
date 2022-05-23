import { useState } from "react";
import { useQuery } from "react-query";

interface Props {
  resource: string;
}

export const useGetData = <T>({ resource }: Props) => {
  const apiURL: string = import.meta.env.VITE_BACKEND_API
    ? import.meta.env.VITE_BACKEND_API.toString()
    : "";

  const getData = async () => {
    try {
      const response = await fetch(`${apiURL}/queries/${resource}`);
      const data = await response.json();
      return data;
    } catch (error) {}
  };

  const { data } = useQuery<T>(resource, getData);

  return { data };
};
