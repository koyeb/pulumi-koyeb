// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class KoyebServiceDefinitionEnvGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("key", required: true)]
        public Input<string> Key { get; set; } = null!;

        [Input("secret")]
        public Input<string>? Secret { get; set; }

        [Input("value")]
        public Input<string>? Value { get; set; }

        public KoyebServiceDefinitionEnvGetArgs()
        {
        }
        public static new KoyebServiceDefinitionEnvGetArgs Empty => new KoyebServiceDefinitionEnvGetArgs();
    }
}
