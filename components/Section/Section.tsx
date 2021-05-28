import { Post } from "../Post/Post";
import { Grid, Title, MoreLink } from "./style";
import { Post as PostType } from "../../shared/types";
import Link from "next/Link";

type SectionProps = {
  title: string;
  posts: PostType[];
  isCompact?: boolean;
};

export const Section = ({ title, posts, isCompact = false }: SectionProps) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>

      {isCompact && (
        // use passHref to force the Link component to pass href further on a MoreLink, which is a styled link.
        <Link href={`/category/${title}`} passHref>
          <MoreLink>More in {title}</MoreLink>
        </Link>
      )}
    </section>
  );
};
