import ArtPieces from "@/components/ArtPieces/ArtPieces";
import useSWR from "swr";

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

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

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
