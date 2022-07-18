import * as koyeb from "@pulumi/koyeb";
import * as random from "@pulumi/random";
import * as pulumi from "@pulumi/pulumi";

let randomPet = new random.RandomPet("my-random-secret-name");
let randomPassword = new random.RandomPassword("my-random-secret-password", {
    length: 32,
});

let secret = new koyeb.KoyebSecret("my-secret", {
    name: pulumi.interpolate`${randomPet.id}`,
    value: pulumi.interpolate`${randomPassword.id}`,
})

export let name = secret.name;