const BASE_URL = process.env.NODE_ENV === "development" ? "" : "/evbt";
export const PAGE_URL = {
  MAIN: process.env.NODE_ENV === "development" ? "/" : "/evbt",
  FIRST: {
    LIST: `${BASE_URL}/00`,
    DETAIL: (id: string) => `${BASE_URL}/00/${id}`,
  },
  SECOND: {
    LIST: `${BASE_URL}/01`,
    DETAIL: (id: string) => `${BASE_URL}/01/${id}`,
  },
  THIRD: {
    LIST: `${BASE_URL}/02`,
    DETAIL: (id: string) => `${BASE_URL}/02/${id}`,
  },
};