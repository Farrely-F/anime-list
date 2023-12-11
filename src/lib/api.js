export function fetchAPI(endpoint) {
  try {
    return fetch(`${process.env.NEXT_API_BASE_URL}${endpoint}`).then((res) =>
      res.json()
    );
  } catch (error) {
    console.error(error);
  }
}
