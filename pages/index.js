import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

async function fetcher(url) {
  const res = await fetch(url);

  if (!res) {
    const error = new Error(`An error occured...`);
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export default function HomePage() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(URL, fetcher);

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  if (error) {
    return <h1>Error ...</h1>;
  }
  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
