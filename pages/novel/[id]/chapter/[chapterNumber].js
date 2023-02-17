import Link from "next/link";

export async function getServerSideProps(context) {
  const data = await fetch(
    `http://localhost:3005/novel/${context.params.id}/${context.params.chapterNumber}`
  ).then((res) => res.json());

  return {
    props: {
      novel: data.novel,
      chapter: data.chapter,
    },
  };
}

export default function Chapter({ novel, chapter }) {
  return (
    <div>
      <Link href={`/novel/${novel._id}`}>
        <h2>{novel.title}</h2>
      </Link>
      <h2>
        {chapter.chapterNumber}. {chapter.title}
      </h2>

      <pre>{chapter.content}</pre>
    </div>
  );
}
