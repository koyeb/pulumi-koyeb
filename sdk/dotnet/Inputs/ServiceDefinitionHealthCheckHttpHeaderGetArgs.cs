// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class ServiceDefinitionHealthCheckHttpHeaderGetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the header
        /// </summary>
        [Input("key", required: true)]
        public Input<string> Key { get; set; } = null!;

        /// <summary>
        /// The value of the header
        /// </summary>
        [Input("value")]
        public Input<string>? Value { get; set; }

        public ServiceDefinitionHealthCheckHttpHeaderGetArgs()
        {
        }
        public static new ServiceDefinitionHealthCheckHttpHeaderGetArgs Empty => new ServiceDefinitionHealthCheckHttpHeaderGetArgs();
    }
}
