<p align="center">
    <img alt="logo" src="./src/app/icon.svg"
        width="138" />
</p>

# Random Podcast

<p align="right">
    <a href="./README.md">English</a> | <b>简体中文</b>
</p>

[![GitHub deployments](https://img.shields.io/github/deployments/ZhanZiyuan/RandomPodcast/Production)](https://github.com/ZhanZiyuan/RandomPodcast/deployments)
[![GitHub last commit](https://img.shields.io/github/last-commit/ZhanZiyuan/RandomPodcast)](https://github.com/ZhanZiyuan/RandomPodcast/commits/main/)
[![GitHub License](https://img.shields.io/github/license/ZhanZiyuan/RandomPodcast)](https://github.com/ZhanZiyuan/RandomPodcast/blob/main/LICENSE)
[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/randompodcast)](https://randompodcast.vercel.app/)

这是一个具有复古风格的Web应用，可以随机“调频”到世界各地的播客节目。
基于Next.js、Tailwind CSS和Shadcn/UI构建。

## 功能特性

- **随机调频**：通过随机扫描播客节目，体验传统收音机的偶然之美。
- **双语支持**：抓取中文和英文的播客内容。
- **复古美学**：精致的复古收音机界面，包含扬声器格栅和数字显示屏。
- **深色模式**：支持系统偏好的深色模式切换。
- **响应式设计**：适配移动端和桌面端。
- **动态背景**：独特的彭罗斯三角形（Penrose triangle）动画和胶片质感底噪。

## 技术栈

- **框架**：[Next.js](https://nextjs.org/)
- **样式**：[Tailwind CSS](https://tailwindcss.com/)
- **组件库**：[Shadcn/UI](https://ui.shadcn.com/)
- **图标**：[Lucide React](https://lucide.dev/)
- **数据源**：[iTunes Search API](https://performance-developer.apple.com/documentation/itunes_store_web_service_toolkit/searching_the_itunes_store)

## 快速开始

### 前置条件

- Node.js 18.x 或更高版本
- npm 或 pnpm

### 安装步骤

- 克隆仓库：

   ```bash
   git clone https://github.com/ZhanZiyuan/RandomPodcast.git
   cd RandomPodcast
   ```

- 安装依赖：

   ```bash
   npm install
   ```

- 启动开发服务器：

   ```bash
   npm run dev
   ```

- 在浏览器中打开 [http://localhost:9002](http://localhost:9002) 即可查看效果。

## 开源许可

本项目基于 GPLv3 许可证 - 详情请参阅 [LICENSE](./LICENSE) 文件。
