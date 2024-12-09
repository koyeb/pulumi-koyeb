// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package koyeb

import (
	"context"
	"reflect"

	"github.com/koyeb/pulumi-koyeb/sdk/go/koyeb/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/koyeb/pulumi-koyeb/sdk/go/koyeb"
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			_, err := koyeb.LookupSecret(ctx, &koyeb.LookupSecretArgs{
//				Name: "my-secret",
//			}, nil)
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
func LookupSecret(ctx *pulumi.Context, args *LookupSecretArgs, opts ...pulumi.InvokeOption) (*LookupSecretResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv LookupSecretResult
	err := ctx.Invoke("koyeb:index/getSecret:getSecret", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getSecret.
type LookupSecretArgs struct {
	// The azure*container*registry configuration to use
	AzureContainerRegistry *GetSecretAzureContainerRegistry `pulumi:"azureContainerRegistry"`
	// The digital*ocean*container*registry configuration to use
	DigitalOceanContainerRegistry *GetSecretDigitalOceanContainerRegistry `pulumi:"digitalOceanContainerRegistry"`
	// The docker*hub*registry configuration to use
	DockerHubRegistry *GetSecretDockerHubRegistry `pulumi:"dockerHubRegistry"`
	// The github*registry configuration to use
	GithubRegistry *GetSecretGithubRegistry `pulumi:"githubRegistry"`
	// The gitlab*registry configuration to use
	GitlabRegistry *GetSecretGitlabRegistry `pulumi:"gitlabRegistry"`
	// The secret name
	Name string `pulumi:"name"`
	// The private*registry configuration to use
	PrivateRegistry *GetSecretPrivateRegistry `pulumi:"privateRegistry"`
	// The secret type
	Type *string `pulumi:"type"`
	// The secret value
	Value *string `pulumi:"value"`
}

// A collection of values returned by getSecret.
type LookupSecretResult struct {
	// The azure*container*registry configuration to use
	AzureContainerRegistry *GetSecretAzureContainerRegistry `pulumi:"azureContainerRegistry"`
	// The date and time of when the secret was created
	CreatedAt string `pulumi:"createdAt"`
	// The digital*ocean*container*registry configuration to use
	DigitalOceanContainerRegistry *GetSecretDigitalOceanContainerRegistry `pulumi:"digitalOceanContainerRegistry"`
	// The docker*hub*registry configuration to use
	DockerHubRegistry *GetSecretDockerHubRegistry `pulumi:"dockerHubRegistry"`
	// The github*registry configuration to use
	GithubRegistry *GetSecretGithubRegistry `pulumi:"githubRegistry"`
	// The gitlab*registry configuration to use
	GitlabRegistry *GetSecretGitlabRegistry `pulumi:"gitlabRegistry"`
	// The secret ID
	Id string `pulumi:"id"`
	// The secret name
	Name string `pulumi:"name"`
	// The organization ID owning the secret
	OrganizationId string `pulumi:"organizationId"`
	// The private*registry configuration to use
	PrivateRegistry *GetSecretPrivateRegistry `pulumi:"privateRegistry"`
	// The secret type
	Type *string `pulumi:"type"`
	// The date and time of when the secret was last updated
	UpdatedAt string `pulumi:"updatedAt"`
	// The secret value
	Value *string `pulumi:"value"`
}

func LookupSecretOutput(ctx *pulumi.Context, args LookupSecretOutputArgs, opts ...pulumi.InvokeOption) LookupSecretResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (LookupSecretResultOutput, error) {
			args := v.(LookupSecretArgs)
			opts = internal.PkgInvokeDefaultOpts(opts)
			var rv LookupSecretResult
			secret, err := ctx.InvokePackageRaw("koyeb:index/getSecret:getSecret", args, &rv, "", opts...)
			if err != nil {
				return LookupSecretResultOutput{}, err
			}

			output := pulumi.ToOutput(rv).(LookupSecretResultOutput)
			if secret {
				return pulumi.ToSecret(output).(LookupSecretResultOutput), nil
			}
			return output, nil
		}).(LookupSecretResultOutput)
}

// A collection of arguments for invoking getSecret.
type LookupSecretOutputArgs struct {
	// The azure*container*registry configuration to use
	AzureContainerRegistry GetSecretAzureContainerRegistryPtrInput `pulumi:"azureContainerRegistry"`
	// The digital*ocean*container*registry configuration to use
	DigitalOceanContainerRegistry GetSecretDigitalOceanContainerRegistryPtrInput `pulumi:"digitalOceanContainerRegistry"`
	// The docker*hub*registry configuration to use
	DockerHubRegistry GetSecretDockerHubRegistryPtrInput `pulumi:"dockerHubRegistry"`
	// The github*registry configuration to use
	GithubRegistry GetSecretGithubRegistryPtrInput `pulumi:"githubRegistry"`
	// The gitlab*registry configuration to use
	GitlabRegistry GetSecretGitlabRegistryPtrInput `pulumi:"gitlabRegistry"`
	// The secret name
	Name pulumi.StringInput `pulumi:"name"`
	// The private*registry configuration to use
	PrivateRegistry GetSecretPrivateRegistryPtrInput `pulumi:"privateRegistry"`
	// The secret type
	Type pulumi.StringPtrInput `pulumi:"type"`
	// The secret value
	Value pulumi.StringPtrInput `pulumi:"value"`
}

func (LookupSecretOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupSecretArgs)(nil)).Elem()
}

// A collection of values returned by getSecret.
type LookupSecretResultOutput struct{ *pulumi.OutputState }

func (LookupSecretResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupSecretResult)(nil)).Elem()
}

func (o LookupSecretResultOutput) ToLookupSecretResultOutput() LookupSecretResultOutput {
	return o
}

func (o LookupSecretResultOutput) ToLookupSecretResultOutputWithContext(ctx context.Context) LookupSecretResultOutput {
	return o
}

// The azure*container*registry configuration to use
func (o LookupSecretResultOutput) AzureContainerRegistry() GetSecretAzureContainerRegistryPtrOutput {
	return o.ApplyT(func(v LookupSecretResult) *GetSecretAzureContainerRegistry { return v.AzureContainerRegistry }).(GetSecretAzureContainerRegistryPtrOutput)
}

// The date and time of when the secret was created
func (o LookupSecretResultOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupSecretResult) string { return v.CreatedAt }).(pulumi.StringOutput)
}

// The digital*ocean*container*registry configuration to use
func (o LookupSecretResultOutput) DigitalOceanContainerRegistry() GetSecretDigitalOceanContainerRegistryPtrOutput {
	return o.ApplyT(func(v LookupSecretResult) *GetSecretDigitalOceanContainerRegistry {
		return v.DigitalOceanContainerRegistry
	}).(GetSecretDigitalOceanContainerRegistryPtrOutput)
}

// The docker*hub*registry configuration to use
func (o LookupSecretResultOutput) DockerHubRegistry() GetSecretDockerHubRegistryPtrOutput {
	return o.ApplyT(func(v LookupSecretResult) *GetSecretDockerHubRegistry { return v.DockerHubRegistry }).(GetSecretDockerHubRegistryPtrOutput)
}

// The github*registry configuration to use
func (o LookupSecretResultOutput) GithubRegistry() GetSecretGithubRegistryPtrOutput {
	return o.ApplyT(func(v LookupSecretResult) *GetSecretGithubRegistry { return v.GithubRegistry }).(GetSecretGithubRegistryPtrOutput)
}

// The gitlab*registry configuration to use
func (o LookupSecretResultOutput) GitlabRegistry() GetSecretGitlabRegistryPtrOutput {
	return o.ApplyT(func(v LookupSecretResult) *GetSecretGitlabRegistry { return v.GitlabRegistry }).(GetSecretGitlabRegistryPtrOutput)
}

// The secret ID
func (o LookupSecretResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v LookupSecretResult) string { return v.Id }).(pulumi.StringOutput)
}

// The secret name
func (o LookupSecretResultOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v LookupSecretResult) string { return v.Name }).(pulumi.StringOutput)
}

// The organization ID owning the secret
func (o LookupSecretResultOutput) OrganizationId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupSecretResult) string { return v.OrganizationId }).(pulumi.StringOutput)
}

// The private*registry configuration to use
func (o LookupSecretResultOutput) PrivateRegistry() GetSecretPrivateRegistryPtrOutput {
	return o.ApplyT(func(v LookupSecretResult) *GetSecretPrivateRegistry { return v.PrivateRegistry }).(GetSecretPrivateRegistryPtrOutput)
}

// The secret type
func (o LookupSecretResultOutput) Type() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupSecretResult) *string { return v.Type }).(pulumi.StringPtrOutput)
}

// The date and time of when the secret was last updated
func (o LookupSecretResultOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupSecretResult) string { return v.UpdatedAt }).(pulumi.StringOutput)
}

// The secret value
func (o LookupSecretResultOutput) Value() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupSecretResult) *string { return v.Value }).(pulumi.StringPtrOutput)
}

func init() {
	pulumi.RegisterOutputType(LookupSecretResultOutput{})
}
