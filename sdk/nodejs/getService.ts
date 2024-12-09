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
 * const my-service = koyeb.getService({
 *     slug: "my-app/my-service",
 * });
 * ```
 */
export function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("koyeb:index/getService:getService", {
        "messages": args.messages,
        "slug": args.slug,
    }, opts);
}

/**
 * A collection of arguments for invoking getService.
 */
export interface GetServiceArgs {
    /**
     * The status messages of the service
     */
    messages?: string;
    /**
     * The service slug composed of the app and service name, for instance my-app/my-service
     */
    slug: string;
}

/**
 * A collection of values returned by getService.
 */
export interface GetServiceResult {
    /**
     * The service active deployment id
     */
    readonly activeDeployment: string;
    /**
     * The app id the service is assigned
     */
    readonly appId: string;
    /**
     * The date and time of when the service was created
     */
    readonly createdAt: string;
    /**
     * The service deployment definition
     */
    readonly definitions: outputs.GetServiceDefinition[];
    /**
     * The id of the service
     */
    readonly id: string;
    /**
     * The service latest deployment id
     */
    readonly latestDeployment: string;
    /**
     * The status messages of the service
     */
    readonly messages: string;
    /**
     * The name of the service
     */
    readonly name: string;
    /**
     * The organization id owning the service
     */
    readonly organizationId: string;
    /**
     * The date and time of when the service was last updated
     */
    readonly pausedAt: string;
    /**
     * The date and time of when the service was last updated
     */
    readonly resumedAt: string;
    /**
     * The service slug composed of the app and service name, for instance my-app/my-service
     */
    readonly slug: string;
    /**
     * The status of the service
     */
    readonly status: string;
    /**
     * The date and time of when the service was last updated
     */
    readonly terminatedAt: string;
    /**
     * The date and time of when the service was last updated
     */
    readonly updatedAt: string;
    /**
     * The version of the service
     */
    readonly version: string;
}
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as koyeb from "@pulumi/koyeb";
 *
 * const my-service = koyeb.getService({
 *     slug: "my-app/my-service",
 * });
 * ```
 */
export function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("koyeb:index/getService:getService", {
        "messages": args.messages,
        "slug": args.slug,
    }, opts);
}

/**
 * A collection of arguments for invoking getService.
 */
export interface GetServiceOutputArgs {
    /**
     * The status messages of the service
     */
    messages?: pulumi.Input<string>;
    /**
     * The service slug composed of the app and service name, for instance my-app/my-service
     */
    slug: pulumi.Input<string>;
}
