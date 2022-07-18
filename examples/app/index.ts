import * as koyeb from "@koyeb/pulumi-koyeb";
import * as random from "@pulumi/random";
import * as pulumi from "@pulumi/pulumi";

let randomPet = new random.RandomPet("my-random-secret-name");

let app = new koyeb.KoyebApp("my-app", {
    name: pulumi.interpolate`${randomPet.id}`,
})

export let name = app.name;
export let domains = app.domains