import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number){
      message
    }
  }

`



export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickDelete = (e) => {
    deleteBoard({
      variables: {
        number: Number(e.target.id)
      },
      refetchQueries: [{query: FETCH_BOARDS}]
    })

  }

  console.log(data?.fetchBoards);
  return (
    <>
      {data?.fetchBoards.map(el => (
      <div key={el.number}>
        <span>
          <input type="checkbox" />
        </span>
        <span style={{ margin: "10px" }}>{el.number}</span>
        <span style={{ margin: "10px", width: "150px", display: "inline-block" }}>{el.title}</span> 
        <span style={{ margin: "10px", width: "50px", display: "inline-block"}}>{el.writer}</span>
        <span>
          <button id={el.number} onClick={onClickDelete}>삭제</button>
        </span>
      </div>
    ))}
    </>
  );
}
