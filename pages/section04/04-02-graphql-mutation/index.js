import { gql, useMutation } from "@apollo/client";
import { Fragment, useState } from "react";

const createBoard = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;
export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [mutationFunc] = useMutation(createBoard);

  const onClickSubmit = async () => {
    console.log(writer, title, contents);
    const result = await mutationFunc({
      variables: {
        // variables
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };
  const onChnageWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChnageTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChnageContents = (e) => {
    setContents(e.target.value);
  };

  return (
    <Fragment>
      작성자 : <input type="text" onChange={onChnageWriter} />
      타이틀 : <input type="text" onChange={onChnageTitle} />
      내용 : <input type="text" onChange={onChnageContents} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    </Fragment>
  );
}
