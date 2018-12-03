// Butterfly-Knife: date tools
import { getMonthDays, getSeparatorDate } from "./date/";

// Butterfly-Knife: storage tools
import { setArraySessionStorage, getArraySessionStorage } from "./storage/";

// Butterfly-Knife: url tools
import { addUrlParam } from "./url/";

export {
  getMonthDays,
  getSeparatorDate,
  setArraySessionStorage,
  getArraySessionStorage,
  addUrlParam
};

// include all function to BFN
// BFN = Butterfly Knife
(function() {
  let BFN = {
    getMonthDays,
    getSeparatorDate,
    setArraySessionStorage,
    getArraySessionStorage,
    addUrlParam
  };
  if (typeof window == "undefine") {
    return;
  }
  for (const i in BFN) {
    window["BFN_" + i] = BFN[i];
  }
  window.BFN = BFN;
})();
