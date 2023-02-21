export const getGifs = async (category) => {
  const API_KEY = "LHPeDUqryjFW2if5wtXO5dmOyrj1VWOD";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));

  return gifs;
};

// fetch es para traer información de una URL
