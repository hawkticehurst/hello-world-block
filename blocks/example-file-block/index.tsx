import { FileBlockProps } from "@githubnext/blocks";
import "./index.css";

export default function (props: FileBlockProps) {
  const { content } = props;

  return (
    <p>{content}</p>
  );
}