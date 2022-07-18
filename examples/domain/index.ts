import * as koyeb from "@pulumi/koyeb";
import * as random from "@pulumi/random";
import * as pulumi from "@pulumi/pulumi";

let randomPet = new random.RandomPet("my-random-domain-name");

let domain = new koyeb.KoyebDomain("my-domain", {
    name: pulumi.interpolate`${randomPet.id}.com`,
})

export let name = domain.name;
export let status = domain.status