// Generated using "yarn build-templates"

export const meta = {
  name: "MeTube",
  description:
    "MeTube is a Web GUI for youtube-dl (using the yt-dlp fork) with playlist support. Allows you to download videos from YouTube and dozens of other sites. Browser extensions allow right-clicking videos and sending them directly to MeTube. ",
  instructions: null,
  changeLog: [{ date: "2022-07-12", description: "first release" }],
  links: [
    { label: "Documentation", url: "https://github.com/alexta69/metube" },
    { label: "Github", url: "https://github.com/alexta69/metube" },
  ],
  contributors: [
    { name: "Ponkhy", url: "https://github.com/Ponkhy" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: [
      "projectName",
      "appServiceName",
      "appServiceImage",
      "downloadPath",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "metube",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "alexta69/metube:2022-10-05",
      },
      downloadPath: {
        type: "string",
        title: "Downloads Volume Name",
        default: "downloads",
      },
    },
  },
  logo: "logo.svg",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
export type DownloadsVolumeName = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  downloadPath: DownloadsVolumeName;
}
