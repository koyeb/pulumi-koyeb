// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AppDomain {
    /**
     * The app name the domain is assigned to
     */
    appName?: string;
    /**
     * The date and time of when the domain was created
     */
    createdAt: string;
    /**
     * The deployment group assigned to the domain
     */
    deploymentGroup: string;
    /**
     * The domain ID
     */
    id: string;
    /**
     * The CNAME record to point the domain to
     */
    intendedCname: string;
    /**
     * The status messages of the domain
     */
    messages: string;
    /**
     * The domain name
     */
    name: string;
    /**
     * The organization ID owning the domain
     */
    organizationId: string;
    /**
     * The status of the domain
     */
    status: string;
    /**
     * The domain type
     */
    type: string;
    /**
     * The date and time of when the domain was last updated
     */
    updatedAt: string;
    /**
     * The date and time of when the domain was last verified
     */
    verifiedAt: string;
    /**
     * The version of the domain
     */
    version: string;
}

export interface GetAppDomain {
    /**
     * The app name the domain is assigned to
     */
    appName?: string;
    /**
     * The date and time of when the domain was created
     */
    createdAt: string;
    /**
     * The deployment group assigned to the domain
     */
    deploymentGroup: string;
    /**
     * The domain ID
     */
    id: string;
    /**
     * The CNAME record to point the domain to
     */
    intendedCname: string;
    /**
     * The status messages of the domain
     */
    messages: string;
    /**
     * The domain name
     */
    name: string;
    /**
     * The organization ID owning the domain
     */
    organizationId: string;
    /**
     * The status of the domain
     */
    status: string;
    /**
     * The domain type
     */
    type: string;
    /**
     * The date and time of when the domain was last updated
     */
    updatedAt: string;
    /**
     * The date and time of when the domain was last verified
     */
    verifiedAt: string;
    /**
     * The version of the domain
     */
    version: string;
}

export interface GetSecretAzureContainerRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry name
     */
    registryName: string;
    /**
     * The registry username
     */
    username: string;
}

export interface GetSecretDigitalOceanContainerRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface GetSecretDockerHubRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface GetSecretGithubRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface GetSecretGitlabRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface GetSecretPrivateRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry url
     */
    url: string;
    /**
     * The registry username
     */
    username: string;
}

export interface SecretAzureContainerRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry name
     */
    registryName: string;
    /**
     * The registry username
     */
    username: string;
}

export interface SecretDigitalOceanContainerRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface SecretDockerHubRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface SecretGithubRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface SecretGitlabRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface SecretPrivateRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry url
     */
    url: string;
    /**
     * The registry username
     */
    username: string;
}

export interface ServiceDefinition {
    docker?: outputs.ServiceDefinitionDocker;
    envs?: outputs.ServiceDefinitionEnv[];
    git?: outputs.ServiceDefinitionGit;
    healthChecks?: outputs.ServiceDefinitionHealthCheck[];
    instanceTypes: outputs.ServiceDefinitionInstanceType[];
    /**
     * The service name
     */
    name: string;
    ports: outputs.ServiceDefinitionPort[];
    /**
     * The service deployment regions to deploy to
     */
    regions: string[];
    routes?: outputs.ServiceDefinitionRoute[];
    scalings: outputs.ServiceDefinitionScaling[];
    /**
     * If set to true, the service will be deployed without using the cache
     */
    skipCache?: boolean;
    /**
     * The service type, either WEB or WORKER (default WEB)
     */
    type?: string;
    /**
     * The volumes to attach and mount to the service
     */
    volumes?: outputs.ServiceDefinitionVolume[];
}

export interface ServiceDefinitionDocker {
    /**
     * The Docker args to use
     */
    args?: string[];
    /**
     * The Docker command to use
     */
    command?: string;
    /**
     * The Docker entrypoint to use
     */
    entrypoints?: string[];
    /**
     * The Docker image to use to support your service
     */
    image: string;
    /**
     * The Koyeb secret containing the container registry credentials
     */
    imageRegistrySecret?: string;
    /**
     * When enabled, the service container will run in privileged mode. This advanced feature is useful to get advanced system privileges.
     */
    privileged?: boolean;
}

export interface ServiceDefinitionEnv {
    /**
     * The name of the environment variable
     */
    key: string;
    /**
     * The regions the environment variable needs to be exposed
     */
    scopes?: string[];
    /**
     * The secret name to use as the value of the environment variable
     */
    secret?: string;
    /**
     * The value of the environment variable
     */
    value?: string;
}

export interface ServiceDefinitionGit {
    /**
     * The GitHub branch to deploy
     */
    branch: string;
    buildpack?: outputs.ServiceDefinitionGitBuildpack;
    dockerfile?: outputs.ServiceDefinitionGitDockerfile;
    /**
     * If set to true, no Koyeb deployments will be triggered when changes are pushed to the GitHub repository branch
     */
    noDeployOnPush?: boolean;
    /**
     * The GitHub repository to deploy
     */
    repository: string;
    /**
     * The directory where your source code is located. If not set, the work directory defaults to the root of the repository.
     */
    workdir?: string;
}

export interface ServiceDefinitionGitBuildpack {
    /**
     * The command to build your application during the build phase. If your application does not require a build command, leave this field empty
     */
    buildCommand?: string;
    /**
     * When enabled, the service container will run in privileged mode. This advanced feature is useful to get advanced system privileges.
     */
    privileged?: boolean;
    /**
     * The command to run your application once the built is completed
     */
    runCommand?: string;
}

export interface ServiceDefinitionGitDockerfile {
    /**
     * The arguments to pass to the Docker command
     */
    args?: string[];
    /**
     * Override the command to execute on the container
     */
    command?: string;
    /**
     * The location of your Dockerfile relative to the work directory. If not set, the work directory defaults to the root of the repository.
     */
    dockerfile?: string;
    /**
     * Override the default entrypoint to execute on the container
     */
    entrypoints?: string[];
    /**
     * When enabled, the service container will run in privileged mode. This advanced feature is useful to get advanced system privileges.
     */
    privileged?: boolean;
    /**
     * Target build stage: If your Dockerfile contains multi-stage builds, you can choose the target stage to build and deploy by entering its name
     */
    target?: string;
}

export interface ServiceDefinitionHealthCheck {
    /**
     * The period in seconds to wait for the instance to become healthy, default is 5s
     */
    gracePeriod?: number;
    http?: outputs.ServiceDefinitionHealthCheckHttp;
    /**
     * The period in seconds between two health checks, default is 60s
     */
    interval?: number;
    /**
     * The number of consecutive failures before attempting to restart the service, default is 3
     */
    restartLimit?: number;
    tcp?: outputs.ServiceDefinitionHealthCheckTcp;
    /**
     * The maximum time to wait in seconds before considering the check as a failure, default is 5s
     */
    timeout?: number;
}

export interface ServiceDefinitionHealthCheckHttp {
    headers?: outputs.ServiceDefinitionHealthCheckHttpHeader[];
    /**
     * An optional HTTP method to use to perform the health check, default is GET
     */
    method?: string;
    /**
     * The path to use to perform the HTTP health check
     */
    path: string;
    /**
     * The port to use to perform the health check
     */
    port: number;
}

export interface ServiceDefinitionHealthCheckHttpHeader {
    /**
     * The name of the header
     */
    key: string;
    /**
     * The value of the header
     */
    value?: string;
}

export interface ServiceDefinitionHealthCheckTcp {
    /**
     * The port to use to perform the health check
     */
    port: number;
}

export interface ServiceDefinitionInstanceType {
    /**
     * The regions to use the instance type
     */
    scopes?: string[];
    /**
     * The instance type to use to support your service
     */
    type: string;
}

export interface ServiceDefinitionPort {
    /**
     * The internal port on which this service's run command will listen
     */
    port: number;
    /**
     * The protocol used by your service
     */
    protocol: string;
}

export interface ServiceDefinitionRoute {
    /**
     * Path specifies a route by HTTP path prefix. Paths must start with / and must be unique within the app
     */
    path: string;
    /**
     * The internal port on which this service's run command will listen
     */
    port: number;
}

export interface ServiceDefinitionScaling {
    /**
     * The maximum number of instance to use to support your service
     */
    max?: number;
    /**
     * The minimal number of instances to use to support your service
     */
    min?: number;
    /**
     * The regions to apply the scaling configuration
     */
    scopes?: string[];
    targets?: outputs.ServiceDefinitionScalingTarget[];
}

export interface ServiceDefinitionScalingTarget {
    /**
     * The CPU usage (expressed as a percentage) across all Instances of your Service within a region
     */
    averageCpus?: outputs.ServiceDefinitionScalingTargetAverageCpus[];
    /**
     * The memory usage (expressed as a percentage) across all Instances of your Service within a region
     */
    averageMems?: outputs.ServiceDefinitionScalingTargetAverageMem[];
    /**
     * The number of concurrent requests per second across all Instances of your Service within a region
     */
    requestsPerSeconds?: outputs.ServiceDefinitionScalingTargetRequestsPerSecond[];
}

export interface ServiceDefinitionScalingTargetAverageCpus {
    /**
     * The target value of the autoscaling target
     */
    value: number;
}

export interface ServiceDefinitionScalingTargetAverageMem {
    /**
     * The target value of the autoscaling target
     */
    value: number;
}

export interface ServiceDefinitionScalingTargetRequestsPerSecond {
    /**
     * The target value of the autoscaling target
     */
    value: number;
}

export interface ServiceDefinitionVolume {
    /**
     * The volume ID to mount to the service
     */
    id: string;
    /**
     * The path where to mount the volume
     */
    path: string;
    /**
     * Explicitly specify the replica index to mount the volume to
     */
    replicaIndex?: number;
    /**
     * The regions to apply the scaling configuration
     */
    scopes?: string[];
}

