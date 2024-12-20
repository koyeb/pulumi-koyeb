// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as koyeb from "@pulumi/koyeb";
 *
 * const my-secret = koyeb.getSecret({
 *     name: "my-secret",
 * });
 * ```
 */
export function getSecret(args: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
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
    /**
     * The azure*container*registry configuration to use
     */
    azureContainerRegistry?: inputs.GetSecretAzureContainerRegistry;
    /**
     * The digital*ocean*container*registry configuration to use
     */
    digitalOceanContainerRegistry?: inputs.GetSecretDigitalOceanContainerRegistry;
    /**
     * The docker*hub*registry configuration to use
     */
    dockerHubRegistry?: inputs.GetSecretDockerHubRegistry;
    /**
     * The github*registry configuration to use
     */
    githubRegistry?: inputs.GetSecretGithubRegistry;
    /**
     * The gitlab*registry configuration to use
     */
    gitlabRegistry?: inputs.GetSecretGitlabRegistry;
    /**
     * The secret name
     */
    name: string;
    /**
     * The private*registry configuration to use
     */
    privateRegistry?: inputs.GetSecretPrivateRegistry;
    /**
     * The secret type
     */
    type?: string;
    /**
     * The secret value
     */
    value?: string;
}

/**
 * A collection of values returned by getSecret.
 */
export interface GetSecretResult {
    /**
     * The azure*container*registry configuration to use
     */
    readonly azureContainerRegistry?: outputs.GetSecretAzureContainerRegistry;
    /**
     * The date and time of when the secret was created
     */
    readonly createdAt: string;
    /**
     * The digital*ocean*container*registry configuration to use
     */
    readonly digitalOceanContainerRegistry?: outputs.GetSecretDigitalOceanContainerRegistry;
    /**
     * The docker*hub*registry configuration to use
     */
    readonly dockerHubRegistry?: outputs.GetSecretDockerHubRegistry;
    /**
     * The github*registry configuration to use
     */
    readonly githubRegistry?: outputs.GetSecretGithubRegistry;
    /**
     * The gitlab*registry configuration to use
     */
    readonly gitlabRegistry?: outputs.GetSecretGitlabRegistry;
    /**
     * The secret ID
     */
    readonly id: string;
    /**
     * The secret name
     */
    readonly name: string;
    /**
     * The organization ID owning the secret
     */
    readonly organizationId: string;
    /**
     * The private*registry configuration to use
     */
    readonly privateRegistry?: outputs.GetSecretPrivateRegistry;
    /**
     * The secret type
     */
    readonly type?: string;
    /**
     * The date and time of when the secret was last updated
     */
    readonly updatedAt: string;
    /**
     * The secret value
     */
    readonly value?: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as koyeb from "@pulumi/koyeb";
 *
 * const my-secret = koyeb.getSecret({
 *     name: "my-secret",
 * });
 * ```
 */
export function getSecretOutput(args: GetSecretOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("koyeb:index/getSecret:getSecret", {
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
export interface GetSecretOutputArgs {
    /**
     * The azure*container*registry configuration to use
     */
    azureContainerRegistry?: pulumi.Input<inputs.GetSecretAzureContainerRegistryArgs>;
    /**
     * The digital*ocean*container*registry configuration to use
     */
    digitalOceanContainerRegistry?: pulumi.Input<inputs.GetSecretDigitalOceanContainerRegistryArgs>;
    /**
     * The docker*hub*registry configuration to use
     */
    dockerHubRegistry?: pulumi.Input<inputs.GetSecretDockerHubRegistryArgs>;
    /**
     * The github*registry configuration to use
     */
    githubRegistry?: pulumi.Input<inputs.GetSecretGithubRegistryArgs>;
    /**
     * The gitlab*registry configuration to use
     */
    gitlabRegistry?: pulumi.Input<inputs.GetSecretGitlabRegistryArgs>;
    /**
     * The secret name
     */
    name: pulumi.Input<string>;
    /**
     * The private*registry configuration to use
     */
    privateRegistry?: pulumi.Input<inputs.GetSecretPrivateRegistryArgs>;
    /**
     * The secret type
     */
    type?: pulumi.Input<string>;
    /**
     * The secret value
     */
    value?: pulumi.Input<string>;
}
