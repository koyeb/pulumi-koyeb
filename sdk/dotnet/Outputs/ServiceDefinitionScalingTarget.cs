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
    public sealed class ServiceDefinitionScalingTarget
    {
        /// <summary>
        /// The CPU usage (expressed as a percentage) across all Instances of your Service within a region
        /// </summary>
        public readonly ImmutableArray<Outputs.ServiceDefinitionScalingTargetAverageCpus> AverageCpus;
        /// <summary>
        /// The memory usage (expressed as a percentage) across all Instances of your Service within a region
        /// </summary>
        public readonly ImmutableArray<Outputs.ServiceDefinitionScalingTargetAverageMem> AverageMems;
        /// <summary>
        /// The number of concurrent requests per second across all Instances of your Service within a region
        /// </summary>
        public readonly ImmutableArray<Outputs.ServiceDefinitionScalingTargetRequestsPerSecond> RequestsPerSeconds;

        [OutputConstructor]
        private ServiceDefinitionScalingTarget(
            ImmutableArray<Outputs.ServiceDefinitionScalingTargetAverageCpus> averageCpus,

            ImmutableArray<Outputs.ServiceDefinitionScalingTargetAverageMem> averageMems,

            ImmutableArray<Outputs.ServiceDefinitionScalingTargetRequestsPerSecond> requestsPerSeconds)
        {
            AverageCpus = averageCpus;
            AverageMems = averageMems;
            RequestsPerSeconds = requestsPerSeconds;
        }
    }
}
