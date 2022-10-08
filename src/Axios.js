import axios from "axios";
import { NETWORK_URL } from "./components/config";

export const getSpellsList = async () => {
  let list = [];
  let data = await axios({
    url: `${NETWORK_URL}api/spells`,
    method: "GET",
  });

  if (data.status == 200) {
    list = [...list, ...data.data.results];
  }
  console.log(list);
  return list;
};

export const getSpellsListItem = async (itemUrl) => {
  let word = {};
  let data = await axios({
    url: `https://www.dnd5eapi.co${itemUrl}`,
    method: "GET",
  });
  if (data.status == 200) {
    word = { ...word, ...data.data };
  }

  console.log(word, "word");
  return word;
};
