"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

import { useFilters } from "@/app/_ui/filters";
import { Pagination } from "@/app/_ui/Pagination";
import { getStatusColorClass } from "./_lib/getStatusColorClass";
import { AlertDetails } from "./_components/AlertDetails";
import alerts from "./alerts.json";
import { applyPagination } from "./_lib/applyPagination";

type Alert = {
  id: number;
  type: string;
  camera: string;
  location: string;
  time: string;
  status: string;
  details: string;
};

export default function Alerts() {
  const searchParams = useSearchParams();

  const [selectedAlert, setSelectedAlert] = useState<null | Alert>(
    (searchParams.get("alert") && alerts[Number(searchParams.get("alert"))]) ||
      null
  );

  const filters = {
    page: searchParams.get("page") || "1",
    alert: searchParams.get("alert") || "",
  };

  const { filterValues, handleFilterChange } = useFilters({
    pageName: "alerts",
    filters,
  });

  // Retrieve the total number of pages from your data source
  const totalPages = alerts.length / 10;

  // Example event handler for page change
  const handlePageChange = (page: number) => {
    // Perform your logic to update the page here
    handleFilterChange("page", page.toString());
  };

  const handleAlertClick = (alert: Alert) => {
    handleFilterChange("alert", alert.id.toString());
    setSelectedAlert(alert);
  };

  const filteredAlerts = applyPagination(alerts, filterValues);

  return (
    <>
      <Head>
        <title>Alerts - CCTV Video Analytics Software</title>
      </Head>

      <div className="min-h-screen">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <table className="w-full bg-white shadow overflow-hidden sm:rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-6 border-b">Alert Type</th>
                    <th className="py-4 px-6 border-b">Camera</th>
                    <th className="py-4 px-6 border-b">Location</th>
                    <th className="py-4 px-6 border-b">Time</th>
                    <th className="py-4 px-6 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAlerts.map((alert) => (
                    <tr
                      key={alert.id}
                      className={`cursor-pointer hover:bg-slate-50 ${
                        selectedAlert && alert.id === selectedAlert.id
                          ? "bg-slate-100"
                          : "bg-white"
                      }`}
                      onClick={() => handleAlertClick(alert)}
                    >
                      <td className="py-4 px-6 border-b">
                        <h3 className="text-lg font-semibold">{alert.type}</h3>
                      </td>
                      <td className="py-4 px-6 border-b">{alert.camera}</td>
                      <td className="py-4 px-6 border-b">{alert.location}</td>
                      <td className="py-4 px-6 border-b">{alert.time}</td>
                      <td className="py-4 px-6 border-b">
                        <span
                          className={`px-4 py-2 rounded-xl text-white font-medium capitalize ${getStatusColorClass(
                            alert.status
                          )}`}
                        >
                          {alert.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Render the pagination component */}
              <Pagination
                currentPage={parseInt(filterValues.page, 10)}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
            {selectedAlert && <AlertDetails alert={selectedAlert} />}
          </div>
        </div>
      </div>
    </>
  );
}
