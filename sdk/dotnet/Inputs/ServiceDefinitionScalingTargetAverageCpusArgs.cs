// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class ServiceDefinitionScalingTargetAverageCpusArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The target value of the autoscaling target
        /// </summary>
        [Input("value", required: true)]
        public Input<int> Value { get; set; } = null!;

        public ServiceDefinitionScalingTargetAverageCpusArgs()
        {
        }
        public static new ServiceDefinitionScalingTargetAverageCpusArgs Empty => new ServiceDefinitionScalingTargetAverageCpusArgs();
    }
}
