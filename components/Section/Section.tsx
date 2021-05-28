import { Post } from "../Post/Post";
import { Grid, Title } from "./style";
import { Post as PostType } from "../../shared/types";

type SectionProps = {
  title: string;
  posts: PostType[];
};

export const Section = ({ title, posts }: SectionProps) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
    </section>
  );
};
