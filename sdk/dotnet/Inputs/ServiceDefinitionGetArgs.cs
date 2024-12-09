// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class ServiceDefinitionGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("docker")]
        public Input<Inputs.ServiceDefinitionDockerGetArgs>? Docker { get; set; }

        [Input("envs")]
        private InputList<Inputs.ServiceDefinitionEnvGetArgs>? _envs;
        public InputList<Inputs.ServiceDefinitionEnvGetArgs> Envs
        {
            get => _envs ?? (_envs = new InputList<Inputs.ServiceDefinitionEnvGetArgs>());
            set => _envs = value;
        }

        [Input("git")]
        public Input<Inputs.ServiceDefinitionGitGetArgs>? Git { get; set; }

        [Input("healthChecks")]
        private InputList<Inputs.ServiceDefinitionHealthCheckGetArgs>? _healthChecks;
        public InputList<Inputs.ServiceDefinitionHealthCheckGetArgs> HealthChecks
        {
            get => _healthChecks ?? (_healthChecks = new InputList<Inputs.ServiceDefinitionHealthCheckGetArgs>());
            set => _healthChecks = value;
        }

        [Input("instanceTypes", required: true)]
        private InputList<Inputs.ServiceDefinitionInstanceTypeGetArgs>? _instanceTypes;
        public InputList<Inputs.ServiceDefinitionInstanceTypeGetArgs> InstanceTypes
        {
            get => _instanceTypes ?? (_instanceTypes = new InputList<Inputs.ServiceDefinitionInstanceTypeGetArgs>());
            set => _instanceTypes = value;
        }

        /// <summary>
        /// The service name
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("ports")]
        private InputList<Inputs.ServiceDefinitionPortGetArgs>? _ports;
        public InputList<Inputs.ServiceDefinitionPortGetArgs> Ports
        {
            get => _ports ?? (_ports = new InputList<Inputs.ServiceDefinitionPortGetArgs>());
            set => _ports = value;
        }

        [Input("regions", required: true)]
        private InputList<string>? _regions;

        /// <summary>
        /// The service deployment regions to deploy to
        /// </summary>
        public InputList<string> Regions
        {
            get => _regions ?? (_regions = new InputList<string>());
            set => _regions = value;
        }

        [Input("routes")]
        private InputList<Inputs.ServiceDefinitionRouteGetArgs>? _routes;
        public InputList<Inputs.ServiceDefinitionRouteGetArgs> Routes
        {
            get => _routes ?? (_routes = new InputList<Inputs.ServiceDefinitionRouteGetArgs>());
            set => _routes = value;
        }

        [Input("scalings", required: true)]
        private InputList<Inputs.ServiceDefinitionScalingGetArgs>? _scalings;
        public InputList<Inputs.ServiceDefinitionScalingGetArgs> Scalings
        {
            get => _scalings ?? (_scalings = new InputList<Inputs.ServiceDefinitionScalingGetArgs>());
            set => _scalings = value;
        }

        /// <summary>
        /// If set to true, the service will be deployed without using the cache
        /// </summary>
        [Input("skipCache")]
        public Input<bool>? SkipCache { get; set; }

        /// <summary>
        /// The service type, either WEB or WORKER (default WEB)
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        [Input("volumes")]
        private InputList<Inputs.ServiceDefinitionVolumeGetArgs>? _volumes;

        /// <summary>
        /// The volumes to attach and mount to the service
        /// </summary>
        public InputList<Inputs.ServiceDefinitionVolumeGetArgs> Volumes
        {
            get => _volumes ?? (_volumes = new InputList<Inputs.ServiceDefinitionVolumeGetArgs>());
            set => _volumes = value;
        }

        public ServiceDefinitionGetArgs()
        {
        }
        public static new ServiceDefinitionGetArgs Empty => new ServiceDefinitionGetArgs();
    }
}
