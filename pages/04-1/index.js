import { gql, useMutation } from "@apollo/client";

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
  const [mutationFunc] = useMutation(createBoard);
  const onClickMutation = async () => {
    const result = await mutationFunc({
      variables: {
        writer: "공건",
        title: "아오 공건시치",
        contents: "저는 호날두를 사랑해요",
      },
    });
    console.log(result);
  };
  return (
    <>
      <button onClick={onClickMutation}>GRAPHQL-API 요청하기</button>
    </>
  );
}
