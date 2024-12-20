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
 * import * as koyeb from "@koyeb/pulumi-koyeb";
 *
 * const my_app = new koyeb.App("my-app", {name: "my-app"});
 * ```
 */
export class App extends pulumi.CustomResource {
    /**
     * Get an existing App resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppState, opts?: pulumi.CustomResourceOptions): App {
        return new App(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'koyeb:index/app:App';

    /**
     * Returns true if the given object is an instance of App.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is App {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === App.__pulumiType;
    }

    /**
     * The date and time of when the app was created
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The app domains
     */
    public /*out*/ readonly domains!: pulumi.Output<outputs.AppDomain[]>;
    /**
     * The app name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The organization ID owning the app
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The date and time of when the app was last updated
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a App resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AppArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppArgs | AppState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["domains"] = state ? state.domains : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as AppArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["domains"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(App.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering App resources.
 */
export interface AppState {
    /**
     * The date and time of when the app was created
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The app domains
     */
    domains?: pulumi.Input<pulumi.Input<inputs.AppDomain>[]>;
    /**
     * The app name
     */
    name?: pulumi.Input<string>;
    /**
     * The organization ID owning the app
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The date and time of when the app was last updated
     */
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a App resource.
 */
export interface AppArgs {
    /**
     * The app name
     */
    name?: pulumi.Input<string>;
}
