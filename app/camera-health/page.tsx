import { getCameraStatusColorClass } from "./_lib/getCameraStatusColorClass";
import { getServerStatusColorClass } from "./_lib/getServerStatusColorClass";

export default function CameraHealth() {
  // Mock data for camera and server status
  const cameras = [
    { id: 1, name: "Camera 1", status: "Online" },
    { id: 2, name: "Camera 2", status: "Offline" },
    { id: 3, name: "Camera 3", status: "Recording" },
    // Add more cameras as needed
  ];

  const servers = [
    { id: 1, name: "Server 1", status: "Online" },
    { id: 2, name: "Server 2", status: "Offline" },
    { id: 3, name: "Server 3", status: "Normal" },
    // Add more servers as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Camera Status */}
        <div>
          <h2 className="text-xl font-bold mb-4">Camera Status</h2>

          <div className="p-4 bg-white border rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Camera 1</h3>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <span className="text-green-500">Online</span>
            </div>
          </div>

          <div className="p-4 bg-white border rounded shadow mt-4">
            <h3 className="text-lg font-semibold mb-2">Camera 2</h3>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <span className="text-red-500">Offline</span>
            </div>
          </div>
        </div>

        {/* Server Status */}
        <div>
          <h2 className="text-xl font-bold mb-4">Server Status</h2>

          <div className="p-4 bg-white border rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Server 1</h3>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <span className="text-green-500">Running</span>
            </div>
          </div>

          <div className="p-4 bg-white border rounded shadow mt-4">
            <h3 className="text-lg font-semibold mb-2">Server 2</h3>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-yellow-500">Warning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
