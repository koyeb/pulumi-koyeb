// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

export interface GetSecretAzureContainerRegistry {
    password: string;
    registryName: string;
    username: string;
}

export interface GetSecretAzureContainerRegistryArgs {
    password: pulumi.Input<string>;
    registryName: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface GetSecretDigitalOceanContainerRegistry {
    password: string;
    username: string;
}

export interface GetSecretDigitalOceanContainerRegistryArgs {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface GetSecretDockerHubRegistry {
    password: string;
    username: string;
}

export interface GetSecretDockerHubRegistryArgs {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface GetSecretGithubRegistryArgs {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface GetSecretGithubRegistry {
    password: string;
    username: string;
}

export interface GetSecretGitlabRegistry {
    password: string;
    username: string;
}

export interface GetSecretGitlabRegistryArgs {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface GetSecretPrivateRegistry {
    password: string;
    url: string;
    username: string;
}

export interface GetSecretPrivateRegistryArgs {
    password: pulumi.Input<string>;
    url: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface KoyebAppDomain {
    appName?: pulumi.Input<string>;
    createdAt?: pulumi.Input<string>;
    deploymentGroup?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    intendedCname?: pulumi.Input<string>;
    messages?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    organizationId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    updatedAt?: pulumi.Input<string>;
    verifiedAt?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}

export interface KoyebSecretAzureContainerRegistry {
    password: pulumi.Input<string>;
    registryName: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface KoyebSecretDigitalOceanContainerRegistry {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface KoyebSecretDockerHubRegistry {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface KoyebSecretGithubRegistry {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface KoyebSecretGitlabRegistry {
    password: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface KoyebSecretPrivateRegistry {
    password: pulumi.Input<string>;
    url: pulumi.Input<string>;
    username: pulumi.Input<string>;
}

export interface KoyebServiceDefinition {
    docker?: pulumi.Input<inputs.KoyebServiceDefinitionDocker>;
    envs?: pulumi.Input<pulumi.Input<inputs.KoyebServiceDefinitionEnv>[]>;
    git?: pulumi.Input<inputs.KoyebServiceDefinitionGit>;
    instanceTypes: pulumi.Input<inputs.KoyebServiceDefinitionInstanceTypes>;
    name: pulumi.Input<string>;
    ports: pulumi.Input<pulumi.Input<inputs.KoyebServiceDefinitionPort>[]>;
    regions: pulumi.Input<pulumi.Input<string>[]>;
    routes?: pulumi.Input<pulumi.Input<inputs.KoyebServiceDefinitionRoute>[]>;
    scalings: pulumi.Input<inputs.KoyebServiceDefinitionScalings>;
}

export interface KoyebServiceDefinitionDocker {
    args?: pulumi.Input<pulumi.Input<string>[]>;
    command?: pulumi.Input<string>;
    image: pulumi.Input<string>;
    imageRegistySecret?: pulumi.Input<string>;
}

export interface KoyebServiceDefinitionEnv {
    key: pulumi.Input<string>;
    value: pulumi.Input<string>;
}

export interface KoyebServiceDefinitionGit {
    branch: pulumi.Input<string>;
    buildCommand?: pulumi.Input<string>;
    noDeployOnPush?: pulumi.Input<boolean>;
    repository: pulumi.Input<string>;
    runCommand?: pulumi.Input<string>;
}

export interface KoyebServiceDefinitionInstanceTypes {
    type: pulumi.Input<string>;
}

export interface KoyebServiceDefinitionPort {
    port: pulumi.Input<number>;
    protocol: pulumi.Input<string>;
}

export interface KoyebServiceDefinitionRoute {
    path: pulumi.Input<string>;
    port: pulumi.Input<number>;
}

export interface KoyebServiceDefinitionScalings {
    max?: pulumi.Input<number>;
    min?: pulumi.Input<number>;
}

