import { HLSPlayer } from "@/app/_ui/HSLPlayer";
import { getStatusColorClass } from "../_lib/getStatusColorClass";

type Alert = {
  id: number;
  type: string;
  camera: string;
  location: string;
  time: string;
  status: string;
  details: string;
};

export function AlertDetails({ alert }: { alert: Alert }) {
  return (
    <div className="md:col-span-1">
      <div
        className={`pt-4 shadow sm:rounded-lg sticky top-0 ${getStatusColorClass(
          alert.status
        )}`}
      >
        <div className="p-6 bg-white sm:rounded-lg">
          <div className="h-60 mb-4">
            {/* HLSPlayer component to display the video */}
            <HLSPlayer videoSrc="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
          </div>
          <h2 className="text-xl font-bold mb-4">Event Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Alert Type:</p>
              <p>{alert.type}</p>
            </div>
            <div>
              <p className="font-semibold">Camera:</p>
              <p>{alert.camera}</p>
            </div>
            <div>
              <p className="font-semibold">Location:</p>
              <p>{alert.location}</p>
            </div>
            <div>
              <p className="font-semibold">Time:</p>
              <p>{alert.time}</p>
            </div>
            <div className="col-span-2">
              <p className="font-semibold">Details:</p>
              <p>{alert.details}</p>
            </div>
            <div>
              <p className="font-semibold">Status:</p>
              <div className="pt-2">
                <span
                  className={`px-4 py-2 rounded-xl text-white font-medium capitalize ${getStatusColorClass(
                    alert.status
                  )}`}
                >
                  {alert.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
