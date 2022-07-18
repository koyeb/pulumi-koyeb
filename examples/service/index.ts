import * as koyeb from "@pulumi/koyeb";
import * as random from "@pulumi/random";
import * as pulumi from "@pulumi/pulumi";

let randomPet = new random.RandomPet("my-random-secret-name");

let app = new koyeb.KoyebApp("my-app", {
  name: pulumi.interpolate`${randomPet.id}`,
});

let service = new koyeb.KoyebService("my-service", {
  appName: app.name,
  definition: {
    name: "my-service",
    instanceTypes: {
      type: "micro",
    },
    ports: [
      {
        port: 3000,
        protocol: "http",
      },
    ],
    scalings: {
      min: 1,
      max: 1,
    },
    envs: [
      {
        key: "FOO",
        value: "BAR",
      },
    ],
    routes: [
      {
        path: "/",
        port: 3000,
      },
    ],
    regions: ["par"],
    docker: {
      image: "koyeb/demo",
    },
  },
});

export let name = service.name;
export let status = service.status;