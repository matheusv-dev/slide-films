export async function getData(limit: number, page?: number) {
  const sumPage = page ? `&page=${page}` : ''

  const res = await fetch(
    'https://movies.slideworks.cc/movies?limit=' + limit + sumPage,
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
