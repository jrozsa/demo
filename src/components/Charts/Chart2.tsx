"use client";
import { Chart } from "@antv/g2";
import { useEffect } from "react";
import { Data } from "./types";

export const Chart2 = () => {
  useEffect(() => {
    const chart = new Chart({
      container: "chart2",
      theme: "classic",
      paddingLeft: 60,
    });
    async function getData() {
      const res = await fetch(
        "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&areaCode=E92000001&metric=cumDeaths60DaysByDeathDateRate&format=json"
      );

      if (!res.ok) {
        // Error boundary
        throw new Error("Failed to fetch data");
      }

      const response = await res.json();
      const data = response.body as Data;

      chart
        .area()
        .data(data)
        .encode("x", (d: Data) => new Date(d.date))
        .encode("y", "cumDeaths60DaysByDeathDateRate")
        .axis("x", { title: "Date" })
        .axis("y", { title: "Death Rate" });

      await chart.render();
    }

    getData();
  }, []);

  return <div id="chart2"></div>;
};
