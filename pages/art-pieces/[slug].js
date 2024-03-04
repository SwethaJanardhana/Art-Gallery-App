import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailedPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug, data);

  const { imageSource, name, artist, year, genre } = data.find(
    (piece) => piece.slug === slug
  );
  return (
    <ArtPieceDetails
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
    />
  );
}
