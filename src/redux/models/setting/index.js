import dataCache from "utils/data-cache";

export default {
  state: {
    locale: {
      languageId: "english",
      locale: "en",
      name: "English",
      icon: "us",
    },
    ...dataCache.read("setting"),
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({}),
};
