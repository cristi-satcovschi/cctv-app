import Head from "next/head";

import cameras from "./cameras.json";
import servers from "./servers.json";
import { getCameraStatusColorClass } from "./_lib/getCameraStatusColorClass";
import { getServerStatusColorClass } from "./_lib/getServerStatusColorClass";

export default function CameraHealth() {
  return (
    <>
      <Head>
        <title>Search - CCTV Video Analytics Software</title>
      </Head>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Camera Status */}
          <div>
            <h2 className="text-xl font-bold mb-4">Camera Status</h2>

            {cameras.map((camera) => (
              <div
                className="p-4 bg-white border rounded shadow"
                key={camera.id}
              >
                <h3 className="text-lg font-semibold mb-2">{camera.name}</h3>
                <div className="flex items-center">
                  <span
                    className={`w-4 h-4 ${getCameraStatusColorClass(
                      camera.status
                    )} rounded-full mr-2`}
                  ></span>
                  <span className="text-green-500">{camera.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Server Status */}
          <div>
            <h2 className="text-xl font-bold mb-4">Server Status</h2>

            {servers.map((server) => (
              <div
                className="p-4 bg-white border rounded shadow"
                key={server.id}
              >
                <h3 className="text-lg font-semibold mb-2">{server.name}</h3>
                <div className="flex items-center">
                  <span
                    className={`w-4 h-4 ${getServerStatusColorClass(
                      server.status
                    )} rounded-full mr-2`}
                  ></span>
                  <span className="text-green-500">{server.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
