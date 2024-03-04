import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";

async function fetcher(url) {
  const response = await fetch(url);

  if (!response) {
    const error = new Error(`An error occured...`);
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
}

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  if (error) {
    return <h1>Error ...</h1>;
  }

  let updatedPieces = artPiecesInfo.length ? artPiecesInfo : data;

  function handleToggleFavorite(slug) {
    setArtPiecesInfo(
      updatedPieces.map((piece) =>
        piece.slug === slug
          ? { ...piece, isFavorite: !piece.isFavorite }
          : piece
      )
    );
  }

  return (
    <>
      <Layout />
      <GlobalStyle />
      <Component
        data={updatedPieces}
        onToggleFavorite={handleToggleFavorite}
        {...pageProps}
      />
    </>
  );
}
