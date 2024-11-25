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
    public sealed class ServiceDefinitionVolume
    {
        /// <summary>
        /// The volume ID to mount to the service
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The path where to mount the volume
        /// </summary>
        public readonly string Path;
        /// <summary>
        /// Explicitly specify the replica index to mount the volume to
        /// </summary>
        public readonly int? ReplicaIndex;
        /// <summary>
        /// The regions to apply the scaling configuration
        /// </summary>
        public readonly ImmutableArray<string> Scopes;

        [OutputConstructor]
        private ServiceDefinitionVolume(
            string id,

            string path,

            int? replicaIndex,

            ImmutableArray<string> scopes)
        {
            Id = id;
            Path = path;
            ReplicaIndex = replicaIndex;
            Scopes = scopes;
        }
    }
}