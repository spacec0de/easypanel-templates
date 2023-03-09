// Generated using "npm run build-templates"

export const meta = {
  name: "Openblocks",
  description:
    "Openblocks is a Open-source Retool alternative, low code platform to build your apps exceedingly fast with no limitations",
  instructions: null,
  changeLog: [{ date: "2023-02-21", description: "first release" }],
  links: [
    { label: "Website", url: "https://openblocks.dev/" },
    { label: "Documentation", url: "https://docs.openblocks.dev/" },
    { label: "Github", url: "https://github.com/openblocks-dev/openblocks" },
    {
      label: "Discord Community",
      url: "https://discord.com/invite/z5W2YHXdtt",
    },
  ],
  contributors: [{ name: "spaceb0t", url: "https://github.com/spacec0de" }],
  schema: {
    type: "object",
    required: [
      "projectName",
      "appServiceName",
      "appServiceImage",
      "databaseServiceName",
      "redisServiceName",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "openblocks",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "1.1.6",
      },
      databaseServiceName: {
        type: "string",
        title: "Database Service Name",
        default: "openblocks-db",
      },
      redisServiceName: {
        type: "string",
        title: "Redis Service Name",
        default: "openblocks-redis",
      },
    },
  },
  logo: "logo.svg",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
export type DatabaseServiceName = string;
export type RedisServiceName = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  databaseServiceName: DatabaseServiceName;
  redisServiceName: RedisServiceName;
}
