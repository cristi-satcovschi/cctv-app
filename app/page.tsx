import { Metadata } from "next";
import { HLSPlayer } from "./_ui/HSLPlayer";

/**
 * The root page.tsx component of the app displays the Live View page
 */

export const metadata: Metadata = {
  title: "Live View - CCTV Video Analytics Software",
  description:
    "demo app for an Upwork job -- https://www.upwork.com/freelance-jobs/apply/React-Developer-needed-for-Web-Application-Immediately_~01768c35de26e31bbf",
};

export default function LiveView() {
  return (
    <main>
      <HLSPlayer videoSrc="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
    </main>
  );
}
