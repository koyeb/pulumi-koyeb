// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class ServiceDefinitionHealthCheckArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The period in seconds to wait for the instance to become healthy, default is 5s
        /// </summary>
        [Input("gracePeriod")]
        public Input<int>? GracePeriod { get; set; }

        [Input("http")]
        public Input<Inputs.ServiceDefinitionHealthCheckHttpArgs>? Http { get; set; }

        /// <summary>
        /// The period in seconds between two health checks, default is 60s
        /// </summary>
        [Input("interval")]
        public Input<int>? Interval { get; set; }

        /// <summary>
        /// The number of consecutive failures before attempting to restart the service, default is 3
        /// </summary>
        [Input("restartLimit")]
        public Input<int>? RestartLimit { get; set; }

        [Input("tcp")]
        public Input<Inputs.ServiceDefinitionHealthCheckTcpArgs>? Tcp { get; set; }

        /// <summary>
        /// The maximum time to wait in seconds before considering the check as a failure, default is 5s
        /// </summary>
        [Input("timeout")]
        public Input<int>? Timeout { get; set; }

        public ServiceDefinitionHealthCheckArgs()
        {
        }
        public static new ServiceDefinitionHealthCheckArgs Empty => new ServiceDefinitionHealthCheckArgs();
    }
}
