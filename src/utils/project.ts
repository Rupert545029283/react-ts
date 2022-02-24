import { useEffect } from "react";
import { Project } from "screens/project-list/list";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useProject = (param?: Partial<Project>) => {
  const httpClient = useHttp();

  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(httpClient(`projects`, { data: cleanObject(param || {}) }));
  }, [param]);

  return result;
};
