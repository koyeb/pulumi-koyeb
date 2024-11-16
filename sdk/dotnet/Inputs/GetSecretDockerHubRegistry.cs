// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class GetSecretDockerHubRegistryArgs : global::Pulumi.InvokeArgs
    {
        [Input("password", required: true)]
        private string? _password;

        /// <summary>
        /// The registry password
        /// </summary>
        public string? Password
        {
            get => _password;
            set => _password = value;
        }

        /// <summary>
        /// The registry username
        /// </summary>
        [Input("username", required: true)]
        public string Username { get; set; } = null!;

        public GetSecretDockerHubRegistryArgs()
        {
        }
        public static new GetSecretDockerHubRegistryArgs Empty => new GetSecretDockerHubRegistryArgs();
    }
}
