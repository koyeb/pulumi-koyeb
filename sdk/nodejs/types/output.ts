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
    instanceTypes: outputs.KoyebServiceDefinitionInstanceTypes;
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
    scalings: outputs.KoyebServiceDefinitionScalings;
}

export interface KoyebServiceDefinitionDocker {
    args?: string[];
    command?: string;
    image: string;
    imageRegistySecret?: string;
}

export interface KoyebServiceDefinitionEnv {
    key: string;
    secret?: string;
    value?: string;
}

export interface KoyebServiceDefinitionGit {
    branch: string;
    buildCommand?: string;
    noDeployOnPush?: boolean;
    repository: string;
    runCommand?: string;
}

export interface KoyebServiceDefinitionInstanceTypes {
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

export interface KoyebServiceDefinitionScalings {
    max?: number;
    min?: number;
}
