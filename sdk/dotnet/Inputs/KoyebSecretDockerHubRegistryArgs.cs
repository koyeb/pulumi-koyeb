// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class KoyebSecretDockerHubRegistryArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The registry password
        /// </summary>
        [Input("password", required: true)]
        public Input<string> Password { get; set; } = null!;

        /// <summary>
        /// The registry username
        /// </summary>
        [Input("username", required: true)]
        public Input<string> Username { get; set; } = null!;

        public KoyebSecretDockerHubRegistryArgs()
        {
        }
        public static new KoyebSecretDockerHubRegistryArgs Empty => new KoyebSecretDockerHubRegistryArgs();
    }
}
