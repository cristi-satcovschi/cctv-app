# CCTV Video Analytics Software

This is a CCTV video analytics software that allows users to search, filter, and view video analytics data. The software includes several features to enhance the user experience.

## Features

- **HSL Video Player Component**
  The app includes an `HLSPlayer` component that allows users to play HLS (HTTP Live Streaming) videos. The component supports both HLS and non-HLS video sources and handles browser compatibility. It uses the `hls.js` library to load and play the video.

  Example URL: [https://freelance.cristisatcovschi.ro/cctv/video](https://freelance.cristisatcovschi.ro/cctv)

  Source code: [app/\_ui/HSLPlayer.tsx](https://github.com/cristi-satcovschi/cctv-app/tree/main/app/_ui/HSLPlayer.tsx)

- **Filters**
  The app provides a filtering mechanism to refine search results. Users can apply filters based on date range, camera selection, and duration. The filters are displayed in the `FiltersSection` component and are managed using the `useFilters` hook. The filter values are stored in the URL query parameters, allowing users to bookmark or share specific filter configurations.

  Example URL: [https://freelance.cristisatcovschi.ro/cctv/search?start=2022-01-01&end=2022-01-31&camera=camera1&duration=short](https://freelance.cristisatcovschi.ro/cctv/search?start=2022-01-01&end=2022-01-31&camera=camera1&duration=short)

  Source code: [app/\_ui/filters](https://github.com/cristi-satcovschi/cctv-app/tree/main/app/_ui/filters)

- **Search Results**
  The app displays search results in the `SearchResultsSection` component. The search results are rendered in a grid layout, and users can click on a video thumbnail to open the video in the `HLSPlayer` component.

  Example URL: [https://freelance.cristisatcovschi.ro/cctv/search](https://freelance.cristisatcovschi.ro/cctv/search)

  Source code: [app/search/\_components/SearchResultsSection.tsx](https://github.com/cristi-satcovschi/cctv-app/tree/main/app/search/_components/SearchResultsSection.tsx)

- **Alert Details**
  The app includes an `AlertDetails` component that displays detailed information about a selected alert. It shows the alert type, camera, and a video player component. Users can click on an alert to view its details.

  Example URL: [https://freelance.cristisatcovschi.ro/cctv/alerts?alert=1](https://freelance.cristisatcovschi.ro/cctv/alerts?alert=1)

  Source code: [app/alerts/\_components/AlertDetails.tsx](https://github.com/cristi-satcovschi/cctv-app/tree/main/app/alerts/_components/AlertDetails.tsx)

- **Pagination**
  The app provides pagination functionality to navigate through multiple pages of search results or alerts. The `Pagination` component displays the current page number and the total number of pages. It also provides event handlers for page changes.

  Example URL: [https://freelance.cristisatcovschi.ro/cctv/alerts?page=2](https://freelance.cristisatcovschi.ro/cctv/alerts?page=2)

  Source code: [app/alerts/page.tsx](https://github.com/cristi-satcovschi/cctv-app/tree/main/app/alerts/page.tsx)

## Installation

To run the CCTV video analytics software locally, follow these steps:

1. Clone the repository: `git clone https://github.com/cristi-satcovschi/cctv-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the app in your browser: [http://localhost:3000](http://localhost:3000)

Source code: [https://github.com/cristi-satcovschi/cctv-app](https://github.com/cristi-satcovschi/cctv-app)
