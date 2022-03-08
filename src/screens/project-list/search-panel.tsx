/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react";
import { Form, Input } from "antd";
import { Project } from "./list";
import { UserSelect } from "components/user-select";

export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form css={{ marginBottom: "2rem", "> *": "" }} layout="inline">
      <Form.Item>
        <Input
          placeholder="项目名"
          type="text"
          value={param.name}
          onChange={(value) => {
            setParam({
              ...param,
              name: value.target.value,
            });
          }}
        ></Input>
      </Form.Item>
      <Form.Item>
        <UserSelect
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
          defaultOptionName={"负责人"}
        />
      </Form.Item>
    </Form>
  );
};
