import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoards(page: 1) {
      number
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD);
  const onClickMove1 = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/1");
  };
  const onClickMove2 = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/2");
  };
  const onClickMove3 = () => {
    router.push("/section05/05-03-static-routing-board-query-moved/3");
  };
  console.log(data);
  return (
    <>
      <div>
        게시글 번호 : {data.fetchBoards[0].number} 제목 : {data?.fetchBoards[0].title} 작성자 : {data?.fetchBoards[0].writer}
      </div>
      <div>
        게시글 번호 : {data.fetchBoards[1].number} 제목 : {data?.fetchBoards[1].title} 작성자 : {data?.fetchBoards[1].writer}
      </div>
      <div>
        게시글 번호 : {data.fetchBoards[3].number} 제목 : {data?.fetchBoards[3].title} 작성자 : {data?.fetchBoards[3].writer}
      </div>
      <button onClick={onClickMove1}>1번 게시글 이동하기!</button>
      <button onClick={onClickMove2}>2번 게시글 이동하기!</button>
      <button onClick={onClickMove3}>3번 게시글 이동하기!</button>
    </>
  );
}
