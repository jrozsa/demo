"use client";
import { Chart } from "@antv/g2";
import { useEffect } from "react";
import { Data } from "./types";

export const Chart1 = () => {
  useEffect(() => {
    const chart = new Chart({
      container: "chart1",
      theme: "classic",
      paddingLeft: 100,
    });
    async function getData() {
      const res = await fetch(
        "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&areaCode=E92000001&metric=cumPeopleVaccinatedFirstDoseByPublishDate&format=json"
      );

      if (!res.ok) {
        // Error boundary
        alert("Failed to fetch data");
      }

      const response = await res.json();
      const data = response.body as Data;

      chart
        .line()
        .data(data)
        .encode("x", (d: Data) => new Date(d.date))
        .encode("y", "cumPeopleVaccinatedFirstDoseByPublishDate")
        .axis("x", { title: "Date" })
        .axis("y", { title: "People Vaccinated First Dose" });

      await chart.render();
    }

    getData();
  }, []);

  return <div id="chart1"></div>;
};
