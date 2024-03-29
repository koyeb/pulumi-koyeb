// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class KoyebAppDomainGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("appName")]
        public Input<string>? AppName { get; set; }

        /// <summary>
        /// The date and time of when the app was created
        /// </summary>
        [Input("createdAt")]
        public Input<string>? CreatedAt { get; set; }

        [Input("deploymentGroup")]
        public Input<string>? DeploymentGroup { get; set; }

        /// <summary>
        /// The app ID
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        [Input("intendedCname")]
        public Input<string>? IntendedCname { get; set; }

        [Input("messages")]
        public Input<string>? Messages { get; set; }

        /// <summary>
        /// The app name
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The organization ID owning the app
        /// </summary>
        [Input("organizationId")]
        public Input<string>? OrganizationId { get; set; }

        [Input("status")]
        public Input<string>? Status { get; set; }

        [Input("type")]
        public Input<string>? Type { get; set; }

        /// <summary>
        /// The date and time of when the app was last updated
        /// </summary>
        [Input("updatedAt")]
        public Input<string>? UpdatedAt { get; set; }

        [Input("verifiedAt")]
        public Input<string>? VerifiedAt { get; set; }

        [Input("version")]
        public Input<string>? Version { get; set; }

        public KoyebAppDomainGetArgs()
        {
        }
        public static new KoyebAppDomainGetArgs Empty => new KoyebAppDomainGetArgs();
    }
}
