// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb
{
    public static class GetApp
    {
        /// <summary>
        /// ## Example Usage
        /// 
        /// ```csharp
        /// using System.Collections.Generic;
        /// using System.Linq;
        /// using Pulumi;
        /// using Koyeb = Pulumi.Koyeb;
        /// 
        /// return await Deployment.RunAsync(() =&gt; 
        /// {
        ///     var my_app = Koyeb.GetApp.Invoke(new()
        ///     {
        ///         Name = "my-app",
        ///     });
        /// 
        /// });
        /// ```
        /// </summary>
        public static Task<GetAppResult> InvokeAsync(GetAppArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.InvokeAsync<GetAppResult>("koyeb:index/getApp:getApp", args ?? new GetAppArgs(), options.WithDefaults());

        /// <summary>
        /// ## Example Usage
        /// 
        /// ```csharp
        /// using System.Collections.Generic;
        /// using System.Linq;
        /// using Pulumi;
        /// using Koyeb = Pulumi.Koyeb;
        /// 
        /// return await Deployment.RunAsync(() =&gt; 
        /// {
        ///     var my_app = Koyeb.GetApp.Invoke(new()
        ///     {
        ///         Name = "my-app",
        ///     });
        /// 
        /// });
        /// ```
        /// </summary>
        public static Output<GetAppResult> Invoke(GetAppInvokeArgs args, InvokeOptions? options = null)
            => global::Pulumi.Deployment.Instance.Invoke<GetAppResult>("koyeb:index/getApp:getApp", args ?? new GetAppInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetAppArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// The app name
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        public GetAppArgs()
        {
        }
        public static new GetAppArgs Empty => new GetAppArgs();
    }

    public sealed class GetAppInvokeArgs : global::Pulumi.InvokeArgs
    {
        /// <summary>
        /// The app name
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        public GetAppInvokeArgs()
        {
        }
        public static new GetAppInvokeArgs Empty => new GetAppInvokeArgs();
    }


    [OutputType]
    public sealed class GetAppResult
    {
        /// <summary>
        /// The date and time of when the app was created
        /// </summary>
        public readonly string CreatedAt;
        /// <summary>
        /// The app domains
        /// </summary>
        public readonly ImmutableArray<Outputs.GetAppDomainResult> Domains;
        /// <summary>
        /// The app ID
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The app name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The organization ID owning the app
        /// </summary>
        public readonly string OrganizationId;
        /// <summary>
        /// The date and time of when the app was last updated
        /// </summary>
        public readonly string UpdatedAt;

        [OutputConstructor]
        private GetAppResult(
            string createdAt,

            ImmutableArray<Outputs.GetAppDomainResult> domains,

            string id,

            string name,

            string organizationId,

            string updatedAt)
        {
            CreatedAt = createdAt;
            Domains = domains;
            Id = id;
            Name = name;
            OrganizationId = organizationId;
            UpdatedAt = updatedAt;
        }
    }
}
