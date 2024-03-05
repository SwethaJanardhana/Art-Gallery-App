import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function DetailedPage({
  data,
  onToggleFavorite,
  onSubmitComment,
  onDeleteComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const {
    imageSource,
    name,
    artist,
    year,
    genre,
    isFavorite,
    comments,
    colors,
  } = data.find((piece) => piece.slug === slug);
  return (
    <ArtPieceDetails
      image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
      isFavorite={isFavorite}
      slug={slug}
      comments={comments}
      onToggleFavorite={onToggleFavorite}
      onSubmitComment={onSubmitComment}
      onDeleteComment={onDeleteComment}
      colors={colors}
    />
  );
}
