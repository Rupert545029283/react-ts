import { useEffect } from "react";
import { User } from "screens/project-list/search-panel";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useUsers = (param?: Partial<User>) => {
  const httpClient = useHttp();

  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(httpClient(`users`, { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
