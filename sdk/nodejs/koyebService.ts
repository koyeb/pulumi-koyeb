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
 * const my_service = new koyeb.KoyebService("my-service", {
 *     appName: koyeb_app.my_app.name,
 *     definition: {
 *         name: "my-service",
 *         instanceTypes: {
 *             type: "micro",
 *         },
 *         ports: [{
 *             port: 3000,
 *             protocol: "http",
 *         }],
 *         scalings: {
 *             min: 1,
 *             max: 1,
 *         },
 *         envs: [{
 *             key: "FOO",
 *             value: "BAR",
 *         }],
 *         routes: [{
 *             path: "/",
 *             port: 3000,
 *         }],
 *         regions: ["par"],
 *         docker: {
 *             image: "koyeb/demo",
 *         },
 *     },
 * }, {
 *     dependsOn: [koyeb_app["my-app"]],
 * });
 * ```
 */
export class KoyebService extends pulumi.CustomResource {
    /**
     * Get an existing KoyebService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KoyebServiceState, opts?: pulumi.CustomResourceOptions): KoyebService {
        return new KoyebService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'koyeb:index/koyebService:KoyebService';

    /**
     * Returns true if the given object is an instance of KoyebService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KoyebService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KoyebService.__pulumiType;
    }

    /**
     * The service active deployment ID
     */
    public /*out*/ readonly activeDeployment!: pulumi.Output<string>;
    /**
     * The app id the service is assigned to
     */
    public /*out*/ readonly appId!: pulumi.Output<string>;
    /**
     * The app name the service is assigned to
     */
    public readonly appName!: pulumi.Output<string>;
    /**
     * The date and time of when the service was created
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The service deployment definition
     */
    public readonly definition!: pulumi.Output<outputs.KoyebServiceDefinition>;
    /**
     * The service latest deployment ID
     */
    public /*out*/ readonly latestDeployment!: pulumi.Output<string>;
    /**
     * The status messages of the service
     */
    public readonly messages!: pulumi.Output<string>;
    /**
     * The service name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The organization ID owning the service
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The date and time of when the service was last updated
     */
    public /*out*/ readonly pausedAt!: pulumi.Output<string>;
    /**
     * The date and time of when the service was last updated
     */
    public /*out*/ readonly resumedAt!: pulumi.Output<string>;
    /**
     * The status of the service
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The date and time of when the service was last updated
     */
    public /*out*/ readonly terminatedAt!: pulumi.Output<string>;
    /**
     * The date and time of when the service was last updated
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The version of the service
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a KoyebService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KoyebServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KoyebServiceArgs | KoyebServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KoyebServiceState | undefined;
            resourceInputs["activeDeployment"] = state ? state.activeDeployment : undefined;
            resourceInputs["appId"] = state ? state.appId : undefined;
            resourceInputs["appName"] = state ? state.appName : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["definition"] = state ? state.definition : undefined;
            resourceInputs["latestDeployment"] = state ? state.latestDeployment : undefined;
            resourceInputs["messages"] = state ? state.messages : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["pausedAt"] = state ? state.pausedAt : undefined;
            resourceInputs["resumedAt"] = state ? state.resumedAt : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["terminatedAt"] = state ? state.terminatedAt : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as KoyebServiceArgs | undefined;
            if ((!args || args.appName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appName'");
            }
            if ((!args || args.definition === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definition'");
            }
            resourceInputs["appName"] = args ? args.appName : undefined;
            resourceInputs["definition"] = args ? args.definition : undefined;
            resourceInputs["messages"] = args ? args.messages : undefined;
            resourceInputs["activeDeployment"] = undefined /*out*/;
            resourceInputs["appId"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["latestDeployment"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["pausedAt"] = undefined /*out*/;
            resourceInputs["resumedAt"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["terminatedAt"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KoyebService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KoyebService resources.
 */
export interface KoyebServiceState {
    /**
     * The service active deployment ID
     */
    activeDeployment?: pulumi.Input<string>;
    /**
     * The app id the service is assigned to
     */
    appId?: pulumi.Input<string>;
    /**
     * The app name the service is assigned to
     */
    appName?: pulumi.Input<string>;
    /**
     * The date and time of when the service was created
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The service deployment definition
     */
    definition?: pulumi.Input<inputs.KoyebServiceDefinition>;
    /**
     * The service latest deployment ID
     */
    latestDeployment?: pulumi.Input<string>;
    /**
     * The status messages of the service
     */
    messages?: pulumi.Input<string>;
    /**
     * The service name
     */
    name?: pulumi.Input<string>;
    /**
     * The organization ID owning the service
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The date and time of when the service was last updated
     */
    pausedAt?: pulumi.Input<string>;
    /**
     * The date and time of when the service was last updated
     */
    resumedAt?: pulumi.Input<string>;
    /**
     * The status of the service
     */
    status?: pulumi.Input<string>;
    /**
     * The date and time of when the service was last updated
     */
    terminatedAt?: pulumi.Input<string>;
    /**
     * The date and time of when the service was last updated
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The version of the service
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KoyebService resource.
 */
export interface KoyebServiceArgs {
    /**
     * The app name the service is assigned to
     */
    appName: pulumi.Input<string>;
    /**
     * The service deployment definition
     */
    definition: pulumi.Input<inputs.KoyebServiceDefinition>;
    /**
     * The status messages of the service
     */
    messages?: pulumi.Input<string>;
}
