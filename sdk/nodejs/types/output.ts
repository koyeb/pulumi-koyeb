// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

export interface GetAppDomain {
    appName?: string;
    /**
     * The date and time of when the app was created
     */
    createdAt: string;
    deploymentGroup: string;
    /**
     * The app ID
     */
    id: string;
    intendedCname: string;
    messages: string;
    /**
     * The app name
     */
    name: string;
    /**
     * The organization ID owning the app
     */
    organizationId: string;
    status: string;
    type: string;
    /**
     * The date and time of when the app was last updated
     */
    updatedAt: string;
    verifiedAt: string;
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

export interface KoyebAppDomain {
    appName?: string;
    /**
     * The date and time of when the app was created
     */
    createdAt: string;
    deploymentGroup: string;
    /**
     * The app ID
     */
    id: string;
    intendedCname: string;
    messages: string;
    /**
     * The app name
     */
    name: string;
    /**
     * The organization ID owning the app
     */
    organizationId: string;
    status: string;
    type: string;
    /**
     * The date and time of when the app was last updated
     */
    updatedAt: string;
    verifiedAt: string;
    version: string;
}

export interface KoyebSecretAzureContainerRegistry {
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

export interface KoyebSecretDigitalOceanContainerRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface KoyebSecretDockerHubRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface KoyebSecretGithubRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface KoyebSecretGitlabRegistry {
    /**
     * The registry password
     */
    password: string;
    /**
     * The registry username
     */
    username: string;
}

export interface KoyebSecretPrivateRegistry {
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

export interface KoyebServiceDefinition {
    docker?: outputs.KoyebServiceDefinitionDocker;
    envs?: outputs.KoyebServiceDefinitionEnv[];
    git?: outputs.KoyebServiceDefinitionGit;
    healthChecks?: outputs.KoyebServiceDefinitionHealthCheck[];
    instanceTypes: outputs.KoyebServiceDefinitionInstanceType[];
    /**
     * The service name
     */
    name: string;
    ports: outputs.KoyebServiceDefinitionPort[];
    /**
     * The service deployment regions to deploy to
     */
    regions: string[];
    routes?: outputs.KoyebServiceDefinitionRoute[];
    scalings: outputs.KoyebServiceDefinitionScaling[];
    /**
     * If set to true, the service will be deployed without using the cache
     */
    skipCache?: boolean;
    /**
     * The service type, either WEB or WORKER (default WEB)
     */
    type?: string;
}

export interface KoyebServiceDefinitionDocker {
    args?: string[];
    command?: string;
    entrypoints?: string[];
    image: string;
    imageRegistrySecret?: string;
    privileged?: boolean;
}

export interface KoyebServiceDefinitionEnv {
    key: string;
    scopes?: string[];
    secret?: string;
    value?: string;
}

export interface KoyebServiceDefinitionGit {
    branch: string;
    buildpack?: outputs.KoyebServiceDefinitionGitBuildpack;
    dockerfile?: outputs.KoyebServiceDefinitionGitDockerfile;
    noDeployOnPush?: boolean;
    repository: string;
    workdir?: string;
}

export interface KoyebServiceDefinitionGitBuildpack {
    buildCommand?: string;
    privileged?: boolean;
    runCommand?: string;
}

export interface KoyebServiceDefinitionGitDockerfile {
    args?: string[];
    command?: string;
    dockerfile?: string;
    entrypoints?: string[];
    privileged?: boolean;
    target?: string;
}

export interface KoyebServiceDefinitionHealthCheck {
    gracePeriod?: number;
    http?: outputs.KoyebServiceDefinitionHealthCheckHttp;
    interval?: number;
    restartLimit?: number;
    tcp?: outputs.KoyebServiceDefinitionHealthCheckTcp;
    timeout?: number;
}

export interface KoyebServiceDefinitionHealthCheckHttp {
    headers?: outputs.KoyebServiceDefinitionHealthCheckHttpHeader[];
    method?: string;
    path: string;
    port: number;
}

export interface KoyebServiceDefinitionHealthCheckHttpHeader {
    key: string;
    value?: string;
}

export interface KoyebServiceDefinitionHealthCheckTcp {
    port: number;
}

export interface KoyebServiceDefinitionInstanceType {
    scopes?: string[];
    type: string;
}

export interface KoyebServiceDefinitionPort {
    port: number;
    protocol: string;
}

export interface KoyebServiceDefinitionRoute {
    path: string;
    port: number;
}

export interface KoyebServiceDefinitionScaling {
    max?: number;
    min?: number;
    scopes?: string[];
    targets?: outputs.KoyebServiceDefinitionScalingTarget[];
}

export interface KoyebServiceDefinitionScalingTarget {
    averageCpus?: outputs.KoyebServiceDefinitionScalingTargetAverageCpus[];
    averageMems?: outputs.KoyebServiceDefinitionScalingTargetAverageMem[];
    requestsPerSeconds?: outputs.KoyebServiceDefinitionScalingTargetRequestsPerSecond[];
}

export interface KoyebServiceDefinitionScalingTargetAverageCpus {
    value: number;
}

export interface KoyebServiceDefinitionScalingTargetAverageMem {
    value: number;
}

export interface KoyebServiceDefinitionScalingTargetRequestsPerSecond {
    value: number;
}

