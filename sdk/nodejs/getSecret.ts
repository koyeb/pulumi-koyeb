// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as koyeb from "@pulumi/koyeb";
 *
 * const my_secret = pulumi.output(koyeb.getSecret({
 *     name: "my-secret",
 * }));
 * ```
 */
export function getSecret(args: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("koyeb:index/getSecret:getSecret", {
        "azureContainerRegistry": args.azureContainerRegistry,
        "digitalOceanContainerRegistry": args.digitalOceanContainerRegistry,
        "dockerHubRegistry": args.dockerHubRegistry,
        "githubRegistry": args.githubRegistry,
        "gitlabRegistry": args.gitlabRegistry,
        "name": args.name,
        "privateRegistry": args.privateRegistry,
        "type": args.type,
        "value": args.value,
    }, opts);
}

/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretArgs {
    azureContainerRegistry?: inputs.GetSecretAzureContainerRegistry;
    digitalOceanContainerRegistry?: inputs.GetSecretDigitalOceanContainerRegistry;
    dockerHubRegistry?: inputs.GetSecretDockerHubRegistry;
    githubRegistry?: inputs.GetSecretGithubRegistry;
    gitlabRegistry?: inputs.GetSecretGitlabRegistry;
    name: string;
    privateRegistry?: inputs.GetSecretPrivateRegistry;
    type?: string;
    value?: string;
}

/**
 * A collection of values returned by getSecret.
 */
export interface GetSecretResult {
    readonly azureContainerRegistry?: outputs.GetSecretAzureContainerRegistry;
    readonly createdAt: string;
    readonly digitalOceanContainerRegistry?: outputs.GetSecretDigitalOceanContainerRegistry;
    readonly dockerHubRegistry?: outputs.GetSecretDockerHubRegistry;
    readonly githubRegistry?: outputs.GetSecretGithubRegistry;
    readonly gitlabRegistry?: outputs.GetSecretGitlabRegistry;
    readonly id: string;
    readonly name: string;
    readonly organizationId: string;
    readonly privateRegistry?: outputs.GetSecretPrivateRegistry;
    readonly type?: string;
    readonly updatedAt: string;
    readonly value?: string;
}

export function getSecretOutput(args: GetSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretResult> {
    return pulumi.output(args).apply(a => getSecret(a, opts))
}

/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretOutputArgs {
    azureContainerRegistry?: pulumi.Input<inputs.GetSecretAzureContainerRegistryArgs>;
    digitalOceanContainerRegistry?: pulumi.Input<inputs.GetSecretDigitalOceanContainerRegistryArgs>;
    dockerHubRegistry?: pulumi.Input<inputs.GetSecretDockerHubRegistryArgs>;
    githubRegistry?: pulumi.Input<inputs.GetSecretGithubRegistryArgs>;
    gitlabRegistry?: pulumi.Input<inputs.GetSecretGitlabRegistryArgs>;
    name: pulumi.Input<string>;
    privateRegistry?: pulumi.Input<inputs.GetSecretPrivateRegistryArgs>;
    type?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}
