import * as pulumi from "@pulumi/pulumi";
import * as koyeb from "@koyeb/pulumi-koyeb";

const app = new koyeb.App("my-app", { name: "my-app" });

export const sampleAttribute = app.name;
 