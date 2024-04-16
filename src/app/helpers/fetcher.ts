const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());
export default fetcher