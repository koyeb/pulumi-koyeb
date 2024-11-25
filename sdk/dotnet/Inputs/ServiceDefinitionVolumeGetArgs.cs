// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class ServiceDefinitionVolumeGetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The volume ID to mount to the service
        /// </summary>
        [Input("id", required: true)]
        public Input<string> Id { get; set; } = null!;

        /// <summary>
        /// The path where to mount the volume
        /// </summary>
        [Input("path", required: true)]
        public Input<string> Path { get; set; } = null!;

        /// <summary>
        /// Explicitly specify the replica index to mount the volume to
        /// </summary>
        [Input("replicaIndex")]
        public Input<int>? ReplicaIndex { get; set; }

        [Input("scopes")]
        private InputList<string>? _scopes;

        /// <summary>
        /// The regions to apply the scaling configuration
        /// </summary>
        public InputList<string> Scopes
        {
            get => _scopes ?? (_scopes = new InputList<string>());
            set => _scopes = value;
        }

        public ServiceDefinitionVolumeGetArgs()
        {
        }
        public static new ServiceDefinitionVolumeGetArgs Empty => new ServiceDefinitionVolumeGetArgs();
    }
}