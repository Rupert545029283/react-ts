import styled from "@emotion/styled";
import { Spin, Typography } from "antd";

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) => props.marginBottom + "rem"};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`;

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullpageLoading = () => {
  return (
    <FullPage>
      <Spin size={"large"}></Spin>
    </FullPage>
  );
};

export const FullPageError = ({ error }: { error: Error | null }) => {
  return (
    <FullPage>
      <Typography.Text type="danger">{error?.message}</Typography.Text>
    </FullPage>
  );
};
