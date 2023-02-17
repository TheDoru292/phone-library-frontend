import NovelLayout from "../../components/novelLayout";
import { getAllNovelIds, getNovelData } from "../../lib/novel.js";

export default function Novel({novel, chapters}) {
  return <NovelLayout novel={novel} chapters={chapters}>...</NovelLayout>;
}

export async function getStaticPaths() {
  const paths = await getAllNovelIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const data = await getNovelData(params.id)

  console.log(params.id)
  console.log(data)

  return {
    props: {
      novel: data.novel,
      chapters: data.chapters
    }
  }
}
