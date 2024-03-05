import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";
import { uid } from "uid";

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

  function handleAddComment(slug, comment) {
    const commentToAdd = {
      id: uid(),
      comment,
      date: new Date().toLocaleString(),
    };
    setArtPiecesInfo(
      updatedPieces.map((piece) =>
        piece.slug === slug
          ? {
              ...piece,
              comments: piece.comments
                ? [...piece.comments, commentToAdd]
                : [commentToAdd],
            }
          : piece
      )
    );
  }

  function handleDeleteComment(slug, commentId) {
    setArtPiecesInfo(
      updatedPieces.map((piece) =>
        piece.slug === slug
          ? {
              ...piece,
              comments: piece.comments.filter(
                (comment) => comment.id !== commentId
              ),
            }
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
        onSubmitComment={handleAddComment}
        onDeleteComment={handleDeleteComment}
        {...pageProps}
      />
    </>
  );
}
