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
    public sealed class ServiceDefinitionGit
    {
        /// <summary>
        /// The GitHub branch to deploy
        /// </summary>
        public readonly string Branch;
        public readonly Outputs.ServiceDefinitionGitBuildpack? Buildpack;
        public readonly Outputs.ServiceDefinitionGitDockerfile? Dockerfile;
        /// <summary>
        /// If set to true, no Koyeb deployments will be triggered when changes are pushed to the GitHub repository branch
        /// </summary>
        public readonly bool? NoDeployOnPush;
        /// <summary>
        /// The GitHub repository to deploy
        /// </summary>
        public readonly string Repository;
        /// <summary>
        /// The directory where your source code is located. If not set, the work directory defaults to the root of the repository.
        /// </summary>
        public readonly string? Workdir;

        [OutputConstructor]
        private ServiceDefinitionGit(
            string branch,

            Outputs.ServiceDefinitionGitBuildpack? buildpack,

            Outputs.ServiceDefinitionGitDockerfile? dockerfile,

            bool? noDeployOnPush,

            string repository,

            string? workdir)
        {
            Branch = branch;
            Buildpack = buildpack;
            Dockerfile = dockerfile;
            NoDeployOnPush = noDeployOnPush;
            Repository = repository;
            Workdir = workdir;
        }
    }
}