// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Koyeb.Inputs
{

    public sealed class ServiceDefinitionGitDockerfileArgs : global::Pulumi.ResourceArgs
    {
        [Input("args")]
        private InputList<string>? _args;

        /// <summary>
        /// The arguments to pass to the Docker command
        /// </summary>
        public InputList<string> Args
        {
            get => _args ?? (_args = new InputList<string>());
            set => _args = value;
        }

        /// <summary>
        /// Override the command to execute on the container
        /// </summary>
        [Input("command")]
        public Input<string>? Command { get; set; }

        /// <summary>
        /// The location of your Dockerfile relative to the work directory. If not set, the work directory defaults to the root of the repository.
        /// </summary>
        [Input("dockerfile")]
        public Input<string>? Dockerfile { get; set; }

        [Input("entrypoints")]
        private InputList<string>? _entrypoints;

        /// <summary>
        /// Override the default entrypoint to execute on the container
        /// </summary>
        public InputList<string> Entrypoints
        {
            get => _entrypoints ?? (_entrypoints = new InputList<string>());
            set => _entrypoints = value;
        }

        /// <summary>
        /// When enabled, the service container will run in privileged mode. This advanced feature is useful to get advanced system privileges.
        /// </summary>
        [Input("privileged")]
        public Input<bool>? Privileged { get; set; }

        /// <summary>
        /// Target build stage: If your Dockerfile contains multi-stage builds, you can choose the target stage to build and deploy by entering its name
        /// </summary>
        [Input("target")]
        public Input<string>? Target { get; set; }

        public ServiceDefinitionGitDockerfileArgs()
        {
        }
        public static new ServiceDefinitionGitDockerfileArgs Empty => new ServiceDefinitionGitDockerfileArgs();
    }
}
