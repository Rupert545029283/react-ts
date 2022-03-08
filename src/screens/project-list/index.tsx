import { List } from "./list";
import { SearchPanel } from "./search-panel";
import React from "react";
import { useDebounce, useDocumentTitle, useProjectsSearchParams } from "utils";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { useProject } from "utils/project";
import { useUsers } from "utils/user";
import { Row } from "components/lib";

export const ProjectListScreen = (props: {
  setProjectModalOpen: (isClose: boolean) => void;
}) => {
  useDocumentTitle("项目列表", false);

  const [param, setParam] = useProjectsSearchParams();
  const {
    isLoading,
    error,
    data: list,
    retry,
  } = useProject(useDebounce(param, 200));
  const { data: users } = useUsers();

  return (
    <Container>
      <Row between={true}>
        <h1>项目列表</h1>
        <Button onClick={() => props.setProjectModalOpen(true)}>
          创建项目
        </Button>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List
        refresh={retry}
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
        projectModalOpen={props.setProjectModalOpen}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
