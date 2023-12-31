import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export const PRODUCT_BOARD = gql`
  query fetchProdcut($productId: ID!) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;
export default function ProductDetailPage() {
  const router = useRouter();
  const { data } = useQuery(PRODUCT_BOARD, {
    variables: { productId: router.query.productId },
  });
  return data ? (
    <div>
      <div>판매자 : {data?.fetchProduct?.seller}</div>
      <div>이름 : {data?.fetchProduct?.name}</div>
      <div>설명 : {data?.fetchProduct?.detail}</div>
      <div>가격 : {data?.fetchProduct?.price}</div>
    </div>
  ) : (
    <div>로딩중..</div>
  );
}
