/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, Image } from "semantic-ui-react";

const RepoResult = ({ name, owner, description }) => {
const truncateString = (string = "", maxLength = 100) =>
  string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

  return (
    <Card>
      <Image src={owner.avatar_url} wrapped ui={false} />
      <Card.Content style={{ wordWrap: "break-word" }}>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{owner.login}</Card.Meta>
        <Card.Description>{truncateString(description)}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default RepoResult;
