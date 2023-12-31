import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
const createProduct = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;
export default function ProductPage() {
  const router = useRouter();
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [mutationFunc] = useMutation(createProduct);
  const onClickSubmit = async () => {
    try {
      const result = await mutationFunc({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: contents,
            price: parseInt(price),
          },
        },
      });
      console.log(result);
      router.push(`boards/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div>
      판매자 : <input type="text" onChange={onChangeSeller} />
      상품명 : <input type="text" onChange={onChangeName} />
      상품내용 : <input type="text" onChange={onChangeContents} />
      상품가격 : <input type="text" onChange={onChangePrice} />
      <button onClick={onClickSubmit}>상품 등록</button>
    </div>
  );
}
