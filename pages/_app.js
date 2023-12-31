import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  // ApolloClient 세팅
  const client = new ApolloClient({
    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 가져온 데이터 임시 저장
  });
  // 컴포넌트 graphql 세팅
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
