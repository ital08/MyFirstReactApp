import axios from "axios";

/**
 * Function to fetch
 */
export const getWakaTimeStats = () => {
  console.log("Processing WakaTime HTTP GET...");
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(
          "https://wakatime.com/api/v1/users/3ebdbb55-3b93-4f38-846f-1416a735ce36/stats/last_30_days"
        )
        .then((res) => {
          console.log("wakatime stats", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("wakatime err=", err);
          reject("Error in getWakaTimeStats axios!");
        });
    } catch (error) {
      console.error("wakatime Err===", error);
      reject("UY UY UY");
    }
  });
};
