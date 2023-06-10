"use client";
import { Chart } from "@antv/g2";
import { useEffect } from "react";

export const Chart1 = () => {
  useEffect(() => {
    const chart = new Chart({
      container: "container",
      theme: "classic",
    });
    async function getData() {
      const res = await fetch(
        "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&areaCode=E92000001&metric=cumPeopleVaccinatedFirstDoseByPublishDate&format=json"
      );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      // Recommendation: handle errors
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const response = await res.json();
      const data = response.body;

      chart
        .line()
        .data(data)
        .encode("x", (d) => new Date(d.date))
        .encode("y", "cumPeopleVaccinatedFirstDoseByPublishDate")
        .legend();

      await chart.render();
    }

    getData();
  }, []);

  return <div id="container"></div>;
};
