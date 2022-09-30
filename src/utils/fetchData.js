export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9dbb5d6709msha1b5361d23916a4p1df5cbjsn74f892178711",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9dbb5d6709msha1b5361d23916a4p1df5cbjsn74f892178711",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
