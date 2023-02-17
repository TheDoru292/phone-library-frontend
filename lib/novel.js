
export async function getAllNovelIds() {
  const body = await fetch("http://localhost:3005/novel", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())

  const mappedData = body.novels.map((post) => {
    return {
      params: {
        id: post._id,
      }
    }
  })

  return mappedData;
}

export async function getNovelData(id) {
  const data = await fetch(`http://localhost:3005/novel/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json())

  return data;
}
