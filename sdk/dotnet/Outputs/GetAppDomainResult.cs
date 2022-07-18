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
    public sealed class GetAppDomainResult
    {
        public readonly string? AppName;
        public readonly string CreatedAt;
        public readonly string DeploymentGroup;
        public readonly string Id;
        public readonly string IntendedCname;
        public readonly string Messages;
        public readonly string Name;
        public readonly string OrganizationId;
        public readonly string Status;
        public readonly string Type;
        public readonly string UpdatedAt;
        public readonly string VerifiedAt;
        public readonly string Version;

        [OutputConstructor]
        private GetAppDomainResult(
            string? appName,

            string createdAt,

            string deploymentGroup,

            string id,

            string intendedCname,

            string messages,

            string name,

            string organizationId,

            string status,

            string type,

            string updatedAt,

            string verifiedAt,

            string version)
        {
            AppName = appName;
            CreatedAt = createdAt;
            DeploymentGroup = deploymentGroup;
            Id = id;
            IntendedCname = intendedCname;
            Messages = messages;
            Name = name;
            OrganizationId = organizationId;
            Status = status;
            Type = type;
            UpdatedAt = updatedAt;
            VerifiedAt = verifiedAt;
            Version = version;
        }
    }
}
