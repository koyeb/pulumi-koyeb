// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Outputs
{

    [OutputType]
    public sealed class ServiceDefinitionDocker
    {
        /// <summary>
        /// The Docker args to use
        /// </summary>
        public readonly ImmutableArray<string> Args;
        /// <summary>
        /// The Docker command to use
        /// </summary>
        public readonly string? Command;
        /// <summary>
        /// The Docker entrypoint to use
        /// </summary>
        public readonly ImmutableArray<string> Entrypoints;
        /// <summary>
        /// The Docker image to use to support your service
        /// </summary>
        public readonly string Image;
        /// <summary>
        /// The Koyeb secret containing the container registry credentials
        /// </summary>
        public readonly string? ImageRegistrySecret;
        /// <summary>
        /// When enabled, the service container will run in privileged mode. This advanced feature is useful to get advanced system privileges.
        /// </summary>
        public readonly bool? Privileged;

        [OutputConstructor]
        private ServiceDefinitionDocker(
            ImmutableArray<string> args,

            string? command,

            ImmutableArray<string> entrypoints,

            string image,

            string? imageRegistrySecret,

            bool? privileged)
        {
            Args = args;
            Command = command;
            Entrypoints = entrypoints;
            Image = image;
            ImageRegistrySecret = imageRegistrySecret;
            Privileged = privileged;
        }
    }
}