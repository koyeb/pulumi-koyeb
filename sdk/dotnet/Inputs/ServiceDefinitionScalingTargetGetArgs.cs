// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class ServiceDefinitionScalingTargetGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("averageCpus")]
        private InputList<Inputs.ServiceDefinitionScalingTargetAverageCpusGetArgs>? _averageCpus;

        /// <summary>
        /// The CPU usage (expressed as a percentage) across all Instances of your Service within a region
        /// </summary>
        public InputList<Inputs.ServiceDefinitionScalingTargetAverageCpusGetArgs> AverageCpus
        {
            get => _averageCpus ?? (_averageCpus = new InputList<Inputs.ServiceDefinitionScalingTargetAverageCpusGetArgs>());
            set => _averageCpus = value;
        }

        [Input("averageMems")]
        private InputList<Inputs.ServiceDefinitionScalingTargetAverageMemGetArgs>? _averageMems;

        /// <summary>
        /// The memory usage (expressed as a percentage) across all Instances of your Service within a region
        /// </summary>
        public InputList<Inputs.ServiceDefinitionScalingTargetAverageMemGetArgs> AverageMems
        {
            get => _averageMems ?? (_averageMems = new InputList<Inputs.ServiceDefinitionScalingTargetAverageMemGetArgs>());
            set => _averageMems = value;
        }

        [Input("concurrentRequests")]
        private InputList<Inputs.ServiceDefinitionScalingTargetConcurrentRequestGetArgs>? _concurrentRequests;

        /// <summary>
        /// The number of concurrent requests across all Instances of your Service within a region
        /// </summary>
        public InputList<Inputs.ServiceDefinitionScalingTargetConcurrentRequestGetArgs> ConcurrentRequests
        {
            get => _concurrentRequests ?? (_concurrentRequests = new InputList<Inputs.ServiceDefinitionScalingTargetConcurrentRequestGetArgs>());
            set => _concurrentRequests = value;
        }

        [Input("requestResponseTimes")]
        private InputList<Inputs.ServiceDefinitionScalingTargetRequestResponseTimeGetArgs>? _requestResponseTimes;

        /// <summary>
        /// The average response time of requests across all Instances of your Service within a region
        /// </summary>
        public InputList<Inputs.ServiceDefinitionScalingTargetRequestResponseTimeGetArgs> RequestResponseTimes
        {
            get => _requestResponseTimes ?? (_requestResponseTimes = new InputList<Inputs.ServiceDefinitionScalingTargetRequestResponseTimeGetArgs>());
            set => _requestResponseTimes = value;
        }

        [Input("requestsPerSeconds")]
        private InputList<Inputs.ServiceDefinitionScalingTargetRequestsPerSecondGetArgs>? _requestsPerSeconds;

        /// <summary>
        /// The number of concurrent requests per second across all Instances of your Service within a region
        /// </summary>
        public InputList<Inputs.ServiceDefinitionScalingTargetRequestsPerSecondGetArgs> RequestsPerSeconds
        {
            get => _requestsPerSeconds ?? (_requestsPerSeconds = new InputList<Inputs.ServiceDefinitionScalingTargetRequestsPerSecondGetArgs>());
            set => _requestsPerSeconds = value;
        }

        public ServiceDefinitionScalingTargetGetArgs()
        {
        }
        public static new ServiceDefinitionScalingTargetGetArgs Empty => new ServiceDefinitionScalingTargetGetArgs();
    }
}
