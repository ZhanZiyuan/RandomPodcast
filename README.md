<p align="center">
    <img alt="logo" src="./src/app/icon.svg"
        width="138" />
</p>

# Random Podcast

<p align="right">
    <b>English</b> | <a href="./README_zh.md">简体中文</a>
</p>

[![GitHub deployments](https://img.shields.io/github/deployments/ZhanZiyuan/RandomPodcast/Production)](https://github.com/ZhanZiyuan/RandomPodcast/deployments)
[![GitHub last commit](https://img.shields.io/github/last-commit/ZhanZiyuan/RandomPodcast)](https://github.com/ZhanZiyuan/RandomPodcast/commits/main/)
[![GitHub License](https://img.shields.io/github/license/ZhanZiyuan/RandomPodcast)](https://github.com/ZhanZiyuan/RandomPodcast/blob/main/LICENSE)
[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/randompodcast)](https://randompodcast.vercel.app/)

A retro-styled web application that randomly "tunes in" to podcast episodes from around the world.
Built with Next.js, Tailwind CSS, and Shadcn/UI.

## Features

- **Random Tuning**: Experience the serendipity of traditional radio by scanning for random podcast episodes.
- **Bilingual Support**: Fetches content in both English and Chinese.
- **Retro Aesthetic**: A vintage radio interface complete with speaker grilles and a digital display.
- **Dark Mode**: Supports system-preferred dark mode with a toggle.
- **Responsive Design**: Works across mobile and desktop devices.
- **Interactive Background**: Features a unique Penrose triangle animation and grain texture for a retro feel.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Source**: [iTunes Search API](https://performance-developer.apple.com/documentation/itunes_store_web_service_toolkit/searching_the_itunes_store)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or pnpm

### Installation

- Clone the repository:

   ```bash
   git clone https://github.com/ZhanZiyuan/RandomPodcast.git
   cd RandomPodcast
   ```

- Install dependencies:

   ```bash
   npm install
   ```

- Run the development server:

   ```bash
   npm run dev
   ```

- Open [http://localhost:9002](http://localhost:9002) (default port configured in this project) with your browser to see the result.

## License

This project is licensed under the GPLv3 License - see the [LICENSE](./LICENSE) file for details.
