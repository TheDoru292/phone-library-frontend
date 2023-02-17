import Link from "next/link";

export default function NovelLayout({ novel, chapters }) {
  console.log(novel);
  console.log(chapters);
  console.log(novel.title);

  return (
    <div>
      <h2 className="novel-title">{novel.title}</h2>
      <pre>{novel.description}</pre>
      <div className="toc">
        {chapters.map((item) => {
          return (
            <Link
              href={`/novel/${novel._id}/chapter/${item.chapterNumber}`}
              key={item._id}
            >
              <p>
                {item.chapterNumber}. {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
