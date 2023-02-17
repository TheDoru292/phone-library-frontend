import Link from "next/link"

export async function getServerSideProps(context) {
  const body = await fetch("http://localhost:3005/novel").then((res) => res.json())

  return {
    props: {
      novels: body.novels
    }
  }
}

export default function Novel({novels}) {
  console.log(novels)

  return (
    <div>
      {novels.map((item) => {
        return (
	  <Link href={`/novel/${item._id}`} key={item._id}>
	  <div>
	    <h2>{item.title}</h2>
	  </div>
          </Link>
        )
      })}
    </div>
  )
}
