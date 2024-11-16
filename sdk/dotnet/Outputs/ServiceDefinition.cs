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
    public sealed class ServiceDefinition
    {
        public readonly Outputs.ServiceDefinitionDocker? Docker;
        public readonly ImmutableArray<Outputs.ServiceDefinitionEnv> Envs;
        public readonly Outputs.ServiceDefinitionGit? Git;
        public readonly ImmutableArray<Outputs.ServiceDefinitionHealthCheck> HealthChecks;
        public readonly ImmutableArray<Outputs.ServiceDefinitionInstanceType> InstanceTypes;
        /// <summary>
        /// The service name
        /// </summary>
        public readonly string Name;
        public readonly ImmutableArray<Outputs.ServiceDefinitionPort> Ports;
        /// <summary>
        /// The service deployment regions to deploy to
        /// </summary>
        public readonly ImmutableArray<string> Regions;
        public readonly ImmutableArray<Outputs.ServiceDefinitionRoute> Routes;
        public readonly ImmutableArray<Outputs.ServiceDefinitionScaling> Scalings;
        /// <summary>
        /// If set to true, the service will be deployed without using the cache
        /// </summary>
        public readonly bool? SkipCache;
        /// <summary>
        /// The service type, either WEB or WORKER (default WEB)
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private ServiceDefinition(
            Outputs.ServiceDefinitionDocker? docker,

            ImmutableArray<Outputs.ServiceDefinitionEnv> envs,

            Outputs.ServiceDefinitionGit? git,

            ImmutableArray<Outputs.ServiceDefinitionHealthCheck> healthChecks,

            ImmutableArray<Outputs.ServiceDefinitionInstanceType> instanceTypes,

            string name,

            ImmutableArray<Outputs.ServiceDefinitionPort> ports,

            ImmutableArray<string> regions,

            ImmutableArray<Outputs.ServiceDefinitionRoute> routes,

            ImmutableArray<Outputs.ServiceDefinitionScaling> scalings,

            bool? skipCache,

            string? type)
        {
            Docker = docker;
            Envs = envs;
            Git = git;
            HealthChecks = healthChecks;
            InstanceTypes = instanceTypes;
            Name = name;
            Ports = ports;
            Regions = regions;
            Routes = routes;
            Scalings = scalings;
            SkipCache = skipCache;
            Type = type;
        }
    }
}