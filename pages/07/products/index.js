import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_PRODUCTS = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;
const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId){
      message
    }
  }

`
export default function FetchProductsPage() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const onClickDelete = (e) => {
    deleteProduct({
      variables: {
        productId: e.target.id
      },
      refetchQueries: [{query: FETCH_PRODUCTS}]
    })

  }
  return (
    <>
      {
        data?.fetchProducts.map((item) => (
          <div key={item._id}>
            <span>
              <input type="checkbox" />
            </span>
            <span style={{margin: "5px", width: "100px", display: "inline-block"}}>작성자 : {item.seller}</span>
            <span style={{margin: "5px", width: "100px", display: "inline-block", textAlign: "center"}}>{item.price}\</span>
            <span style={{margin: "5px", width: "100px", display: "inline-block", textAlign: "center"}}>{item.name}</span>
            <span style={{margin: "5px", width: "250px", display: "inline-block", textAlign: "center"}}>{item.detail}</span>
            <span>
              <button id={item._id} onClick={onClickDelete}>삭제</button>
            </span>
          </div>
        ))}
    </>
  )
}