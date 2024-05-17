import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PrescriptionChart = ({ activeTabData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    if (activeTabData) {
      // Set the initially active year based on the active tab data
      const initialYear = Object.keys(activeTabData.chartdata)[0];
      setSelectedYear(initialYear);
      renderChart(activeTabData.chartdata, initialYear);
    }
  }, [activeTabData]);

  const renderChart = (data, year) => {
    if (!chartRef.current || !data) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    const filteredData = data[year] || [];

    const labels = filteredData.map((item) => item.month);
    const walkInPatientsData = filteredData.map((item) => item.walkInPatients);
    const appointmentPatientsData = filteredData.map(
      (item) => item.appointmentPatients
    );

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Walk-In Patients",
            backgroundColor: "#5E8BFF",
            borderColor: "#5E8BFF",
            borderWidth: 1,
            barThickness: "8",
            data: walkInPatientsData,
          },
          {
            label: "Appointed Patients",
            backgroundColor: "#52E30E",
            borderColor: "#52E30E",
            borderWidth: 1,
            barThickness: "8",
            data: appointmentPatientsData,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom", // Position the legend at the bottom
            align: "center", // Align the legend items in the center
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedYear(selectedYear);
    renderChart(activeTabData.chartdata, selectedYear); // Re-render chart with selected year
  };

  return (
    <div>
      <div className="bg-[#F7F7F7] p-5 rounded-t-lg">
        {/* Year-wise chart filter */}
        <div className="flex justify-between items-center ">
          <p className="text-[#4E4E4E] font-semibold text-lg">
            Patient Analysis
          </p>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="bg-[#6D6D6D]/30 px-3 py-1 rounded-md focus:outline-none"
          >
            {activeTabData &&
              Object.keys(activeTabData.chartdata).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </div>
      </div>
      <canvas
        ref={chartRef}
        className="bg-[#F7F7F7] p-5 rounded-b-lg"
        height={100}
      ></canvas>
    </div>
  );
};

export default PrescriptionChart;
