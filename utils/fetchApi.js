import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':'7ac2092b9bmshb500516b5ecd85ap18d255jsneebb145607b7' ,
    },
  });
    
  return data;
}