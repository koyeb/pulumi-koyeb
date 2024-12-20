// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class ServiceDefinitionArgs : global::Pulumi.ResourceArgs
    {
        [Input("docker")]
        public Input<Inputs.ServiceDefinitionDockerArgs>? Docker { get; set; }

        [Input("envs")]
        private InputList<Inputs.ServiceDefinitionEnvArgs>? _envs;
        public InputList<Inputs.ServiceDefinitionEnvArgs> Envs
        {
            get => _envs ?? (_envs = new InputList<Inputs.ServiceDefinitionEnvArgs>());
            set => _envs = value;
        }

        [Input("git")]
        public Input<Inputs.ServiceDefinitionGitArgs>? Git { get; set; }

        [Input("healthChecks")]
        private InputList<Inputs.ServiceDefinitionHealthCheckArgs>? _healthChecks;
        public InputList<Inputs.ServiceDefinitionHealthCheckArgs> HealthChecks
        {
            get => _healthChecks ?? (_healthChecks = new InputList<Inputs.ServiceDefinitionHealthCheckArgs>());
            set => _healthChecks = value;
        }

        [Input("instanceTypes", required: true)]
        private InputList<Inputs.ServiceDefinitionInstanceTypeArgs>? _instanceTypes;
        public InputList<Inputs.ServiceDefinitionInstanceTypeArgs> InstanceTypes
        {
            get => _instanceTypes ?? (_instanceTypes = new InputList<Inputs.ServiceDefinitionInstanceTypeArgs>());
            set => _instanceTypes = value;
        }

        /// <summary>
        /// The service name
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        [Input("ports")]
        private InputList<Inputs.ServiceDefinitionPortArgs>? _ports;
        public InputList<Inputs.ServiceDefinitionPortArgs> Ports
        {
            get => _ports ?? (_ports = new InputList<Inputs.ServiceDefinitionPortArgs>());
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
        private InputList<Inputs.ServiceDefinitionRouteArgs>? _routes;
        public InputList<Inputs.ServiceDefinitionRouteArgs> Routes
        {
            get => _routes ?? (_routes = new InputList<Inputs.ServiceDefinitionRouteArgs>());
            set => _routes = value;
        }

        [Input("scalings", required: true)]
        private InputList<Inputs.ServiceDefinitionScalingArgs>? _scalings;
        public InputList<Inputs.ServiceDefinitionScalingArgs> Scalings
        {
            get => _scalings ?? (_scalings = new InputList<Inputs.ServiceDefinitionScalingArgs>());
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
        private InputList<Inputs.ServiceDefinitionVolumeArgs>? _volumes;

        /// <summary>
        /// The volumes to attach and mount to the service
        /// </summary>
        public InputList<Inputs.ServiceDefinitionVolumeArgs> Volumes
        {
            get => _volumes ?? (_volumes = new InputList<Inputs.ServiceDefinitionVolumeArgs>());
            set => _volumes = value;
        }

        public ServiceDefinitionArgs()
        {
        }
        public static new ServiceDefinitionArgs Empty => new ServiceDefinitionArgs();
    }
}
