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
//			_, err := koyeb.LookupService(ctx, &koyeb.LookupServiceArgs{
//				Slug: "my-app/my-service",
//			}, nil)
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
func LookupService(ctx *pulumi.Context, args *LookupServiceArgs, opts ...pulumi.InvokeOption) (*LookupServiceResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv LookupServiceResult
	err := ctx.Invoke("koyeb:index/getService:getService", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getService.
type LookupServiceArgs struct {
	// The status messages of the service
	Messages *string `pulumi:"messages"`
	// The service slug composed of the app and service name, for instance my-app/my-service
	Slug string `pulumi:"slug"`
}

// A collection of values returned by getService.
type LookupServiceResult struct {
	// The service active deployment id
	ActiveDeployment string `pulumi:"activeDeployment"`
	// The app id the service is assigned
	AppId string `pulumi:"appId"`
	// The date and time of when the service was created
	CreatedAt string `pulumi:"createdAt"`
	// The service deployment definition
	Definitions []GetServiceDefinition `pulumi:"definitions"`
	// The id of the service
	Id string `pulumi:"id"`
	// The service latest deployment id
	LatestDeployment string `pulumi:"latestDeployment"`
	// The status messages of the service
	Messages string `pulumi:"messages"`
	// The name of the service
	Name string `pulumi:"name"`
	// The organization id owning the service
	OrganizationId string `pulumi:"organizationId"`
	// The date and time of when the service was last updated
	PausedAt string `pulumi:"pausedAt"`
	// The date and time of when the service was last updated
	ResumedAt string `pulumi:"resumedAt"`
	// The service slug composed of the app and service name, for instance my-app/my-service
	Slug string `pulumi:"slug"`
	// The status of the service
	Status string `pulumi:"status"`
	// The date and time of when the service was last updated
	TerminatedAt string `pulumi:"terminatedAt"`
	// The date and time of when the service was last updated
	UpdatedAt string `pulumi:"updatedAt"`
	// The version of the service
	Version string `pulumi:"version"`
}

func LookupServiceOutput(ctx *pulumi.Context, args LookupServiceOutputArgs, opts ...pulumi.InvokeOption) LookupServiceResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (LookupServiceResultOutput, error) {
			args := v.(LookupServiceArgs)
			opts = internal.PkgInvokeDefaultOpts(opts)
			var rv LookupServiceResult
			secret, err := ctx.InvokePackageRaw("koyeb:index/getService:getService", args, &rv, "", opts...)
			if err != nil {
				return LookupServiceResultOutput{}, err
			}

			output := pulumi.ToOutput(rv).(LookupServiceResultOutput)
			if secret {
				return pulumi.ToSecret(output).(LookupServiceResultOutput), nil
			}
			return output, nil
		}).(LookupServiceResultOutput)
}

// A collection of arguments for invoking getService.
type LookupServiceOutputArgs struct {
	// The status messages of the service
	Messages pulumi.StringPtrInput `pulumi:"messages"`
	// The service slug composed of the app and service name, for instance my-app/my-service
	Slug pulumi.StringInput `pulumi:"slug"`
}

func (LookupServiceOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupServiceArgs)(nil)).Elem()
}

// A collection of values returned by getService.
type LookupServiceResultOutput struct{ *pulumi.OutputState }

func (LookupServiceResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupServiceResult)(nil)).Elem()
}

func (o LookupServiceResultOutput) ToLookupServiceResultOutput() LookupServiceResultOutput {
	return o
}

func (o LookupServiceResultOutput) ToLookupServiceResultOutputWithContext(ctx context.Context) LookupServiceResultOutput {
	return o
}

// The service active deployment id
func (o LookupServiceResultOutput) ActiveDeployment() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.ActiveDeployment }).(pulumi.StringOutput)
}

// The app id the service is assigned
func (o LookupServiceResultOutput) AppId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.AppId }).(pulumi.StringOutput)
}

// The date and time of when the service was created
func (o LookupServiceResultOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.CreatedAt }).(pulumi.StringOutput)
}

// The service deployment definition
func (o LookupServiceResultOutput) Definitions() GetServiceDefinitionArrayOutput {
	return o.ApplyT(func(v LookupServiceResult) []GetServiceDefinition { return v.Definitions }).(GetServiceDefinitionArrayOutput)
}

// The id of the service
func (o LookupServiceResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.Id }).(pulumi.StringOutput)
}

// The service latest deployment id
func (o LookupServiceResultOutput) LatestDeployment() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.LatestDeployment }).(pulumi.StringOutput)
}

// The status messages of the service
func (o LookupServiceResultOutput) Messages() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.Messages }).(pulumi.StringOutput)
}

// The name of the service
func (o LookupServiceResultOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.Name }).(pulumi.StringOutput)
}

// The organization id owning the service
func (o LookupServiceResultOutput) OrganizationId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.OrganizationId }).(pulumi.StringOutput)
}

// The date and time of when the service was last updated
func (o LookupServiceResultOutput) PausedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.PausedAt }).(pulumi.StringOutput)
}

// The date and time of when the service was last updated
func (o LookupServiceResultOutput) ResumedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.ResumedAt }).(pulumi.StringOutput)
}

// The service slug composed of the app and service name, for instance my-app/my-service
func (o LookupServiceResultOutput) Slug() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.Slug }).(pulumi.StringOutput)
}

// The status of the service
func (o LookupServiceResultOutput) Status() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.Status }).(pulumi.StringOutput)
}

// The date and time of when the service was last updated
func (o LookupServiceResultOutput) TerminatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.TerminatedAt }).(pulumi.StringOutput)
}

// The date and time of when the service was last updated
func (o LookupServiceResultOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.UpdatedAt }).(pulumi.StringOutput)
}

// The version of the service
func (o LookupServiceResultOutput) Version() pulumi.StringOutput {
	return o.ApplyT(func(v LookupServiceResult) string { return v.Version }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(LookupServiceResultOutput{})
}
