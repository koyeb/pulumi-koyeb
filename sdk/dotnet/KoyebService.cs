// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb
{
    /// <summary>
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Koyeb = Pulumi.Koyeb;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var my_service = new Koyeb.KoyebService("my-service", new Koyeb.KoyebServiceArgs
    ///         {
    ///             AppName = koyeb_app.My_app.Name,
    ///             Definition = new Koyeb.Inputs.KoyebServiceDefinitionArgs
    ///             {
    ///                 Name = "my-service",
    ///                 InstanceTypes = new Koyeb.Inputs.KoyebServiceDefinitionInstanceTypesArgs
    ///                 {
    ///                     Type = "micro",
    ///                 },
    ///                 Ports = 
    ///                 {
    ///                     new Koyeb.Inputs.KoyebServiceDefinitionPortArgs
    ///                     {
    ///                         Port = 3000,
    ///                         Protocol = "http",
    ///                     },
    ///                 },
    ///                 Scalings = new Koyeb.Inputs.KoyebServiceDefinitionScalingsArgs
    ///                 {
    ///                     Min = 1,
    ///                     Max = 1,
    ///                 },
    ///                 Envs = 
    ///                 {
    ///                     new Koyeb.Inputs.KoyebServiceDefinitionEnvArgs
    ///                     {
    ///                         Key = "FOO",
    ///                         Value = "BAR",
    ///                     },
    ///                 },
    ///                 Routes = 
    ///                 {
    ///                     new Koyeb.Inputs.KoyebServiceDefinitionRouteArgs
    ///                     {
    ///                         Path = "/",
    ///                         Port = 3000,
    ///                     },
    ///                 },
    ///                 Regions = 
    ///                 {
    ///                     "par",
    ///                 },
    ///                 Docker = new Koyeb.Inputs.KoyebServiceDefinitionDockerArgs
    ///                 {
    ///                     Image = "koyeb/demo",
    ///                 },
    ///             },
    ///         }, new CustomResourceOptions
    ///         {
    ///             DependsOn = 
    ///             {
    ///                 koyeb_app.My_app,
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    [KoyebResourceType("koyeb:index/koyebService:KoyebService")]
    public partial class KoyebService : Pulumi.CustomResource
    {
        /// <summary>
        /// The service active deployment ID
        /// </summary>
        [Output("activeDeployment")]
        public Output<string> ActiveDeployment { get; private set; } = null!;

        /// <summary>
        /// The app id the service is assigned to
        /// </summary>
        [Output("appId")]
        public Output<string> AppId { get; private set; } = null!;

        /// <summary>
        /// The app name the service is assigned to
        /// </summary>
        [Output("appName")]
        public Output<string> AppName { get; private set; } = null!;

        /// <summary>
        /// The date and time of when the service was created
        /// </summary>
        [Output("createdAt")]
        public Output<string> CreatedAt { get; private set; } = null!;

        /// <summary>
        /// The service deployment definition
        /// </summary>
        [Output("definition")]
        public Output<Outputs.KoyebServiceDefinition> Definition { get; private set; } = null!;

        /// <summary>
        /// The service latest deployment ID
        /// </summary>
        [Output("latestDeployment")]
        public Output<string> LatestDeployment { get; private set; } = null!;

        /// <summary>
        /// The status messages of the service
        /// </summary>
        [Output("messages")]
        public Output<string> Messages { get; private set; } = null!;

        /// <summary>
        /// The service name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The organization ID owning the service
        /// </summary>
        [Output("organizationId")]
        public Output<string> OrganizationId { get; private set; } = null!;

        /// <summary>
        /// The date and time of when the service was last updated
        /// </summary>
        [Output("pausedAt")]
        public Output<string> PausedAt { get; private set; } = null!;

        /// <summary>
        /// The date and time of when the service was last updated
        /// </summary>
        [Output("resumedAt")]
        public Output<string> ResumedAt { get; private set; } = null!;

        /// <summary>
        /// The status of the service
        /// </summary>
        [Output("status")]
        public Output<string> Status { get; private set; } = null!;

        /// <summary>
        /// The date and time of when the service was last updated
        /// </summary>
        [Output("terminatedAt")]
        public Output<string> TerminatedAt { get; private set; } = null!;

        /// <summary>
        /// The date and time of when the service was last updated
        /// </summary>
        [Output("updatedAt")]
        public Output<string> UpdatedAt { get; private set; } = null!;

        /// <summary>
        /// The version of the service
        /// </summary>
        [Output("version")]
        public Output<string> Version { get; private set; } = null!;


        /// <summary>
        /// Create a KoyebService resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public KoyebService(string name, KoyebServiceArgs args, CustomResourceOptions? options = null)
            : base("koyeb:index/koyebService:KoyebService", name, args ?? new KoyebServiceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private KoyebService(string name, Input<string> id, KoyebServiceState? state = null, CustomResourceOptions? options = null)
            : base("koyeb:index/koyebService:KoyebService", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "https://github.com/koyeb/pulumi-koyeb/releases/download/v${VERSION}",
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing KoyebService resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static KoyebService Get(string name, Input<string> id, KoyebServiceState? state = null, CustomResourceOptions? options = null)
        {
            return new KoyebService(name, id, state, options);
        }
    }

    public sealed class KoyebServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The app name the service is assigned to
        /// </summary>
        [Input("appName", required: true)]
        public Input<string> AppName { get; set; } = null!;

        /// <summary>
        /// The service deployment definition
        /// </summary>
        [Input("definition", required: true)]
        public Input<Inputs.KoyebServiceDefinitionArgs> Definition { get; set; } = null!;

        /// <summary>
        /// The status messages of the service
        /// </summary>
        [Input("messages")]
        public Input<string>? Messages { get; set; }

        public KoyebServiceArgs()
        {
        }
    }

    public sealed class KoyebServiceState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The service active deployment ID
        /// </summary>
        [Input("activeDeployment")]
        public Input<string>? ActiveDeployment { get; set; }

        /// <summary>
        /// The app id the service is assigned to
        /// </summary>
        [Input("appId")]
        public Input<string>? AppId { get; set; }

        /// <summary>
        /// The app name the service is assigned to
        /// </summary>
        [Input("appName")]
        public Input<string>? AppName { get; set; }

        /// <summary>
        /// The date and time of when the service was created
        /// </summary>
        [Input("createdAt")]
        public Input<string>? CreatedAt { get; set; }

        /// <summary>
        /// The service deployment definition
        /// </summary>
        [Input("definition")]
        public Input<Inputs.KoyebServiceDefinitionGetArgs>? Definition { get; set; }

        /// <summary>
        /// The service latest deployment ID
        /// </summary>
        [Input("latestDeployment")]
        public Input<string>? LatestDeployment { get; set; }

        /// <summary>
        /// The status messages of the service
        /// </summary>
        [Input("messages")]
        public Input<string>? Messages { get; set; }

        /// <summary>
        /// The service name
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The organization ID owning the service
        /// </summary>
        [Input("organizationId")]
        public Input<string>? OrganizationId { get; set; }

        /// <summary>
        /// The date and time of when the service was last updated
        /// </summary>
        [Input("pausedAt")]
        public Input<string>? PausedAt { get; set; }

        /// <summary>
        /// The date and time of when the service was last updated
        /// </summary>
        [Input("resumedAt")]
        public Input<string>? ResumedAt { get; set; }

        /// <summary>
        /// The status of the service
        /// </summary>
        [Input("status")]
        public Input<string>? Status { get; set; }

        /// <summary>
        /// The date and time of when the service was last updated
        /// </summary>
        [Input("terminatedAt")]
        public Input<string>? TerminatedAt { get; set; }

        /// <summary>
        /// The date and time of when the service was last updated
        /// </summary>
        [Input("updatedAt")]
        public Input<string>? UpdatedAt { get; set; }

        /// <summary>
        /// The version of the service
        /// </summary>
        [Input("version")]
        public Input<string>? Version { get; set; }

        public KoyebServiceState()
        {
        }
    }
}
