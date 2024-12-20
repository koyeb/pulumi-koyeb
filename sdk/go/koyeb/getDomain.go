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
//			_, err := koyeb.LookupDomain(ctx, &koyeb.LookupDomainArgs{
//				Name: "www.exampled.tld",
//			}, nil)
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
func LookupDomain(ctx *pulumi.Context, args *LookupDomainArgs, opts ...pulumi.InvokeOption) (*LookupDomainResult, error) {
	opts = internal.PkgInvokeDefaultOpts(opts)
	var rv LookupDomainResult
	err := ctx.Invoke("koyeb:index/getDomain:getDomain", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getDomain.
type LookupDomainArgs struct {
	// The app name the domain is assigned to
	AppName *string `pulumi:"appName"`
	// The deployment group assigned to the domain
	DeploymentGroup *string `pulumi:"deploymentGroup"`
	// The CNAME record to point the domain to
	IntendedCname *string `pulumi:"intendedCname"`
	// The status messages of the domain
	Messages *string `pulumi:"messages"`
	// The domain name
	Name string `pulumi:"name"`
	// The date and time of when the domain was last verified
	VerifiedAt *string `pulumi:"verifiedAt"`
}

// A collection of values returned by getDomain.
type LookupDomainResult struct {
	// The app name the domain is assigned to
	AppName *string `pulumi:"appName"`
	// The date and time of when the domain was created
	CreatedAt string `pulumi:"createdAt"`
	// The deployment group assigned to the domain
	DeploymentGroup string `pulumi:"deploymentGroup"`
	// The domain ID
	Id string `pulumi:"id"`
	// The CNAME record to point the domain to
	IntendedCname string `pulumi:"intendedCname"`
	// The status messages of the domain
	Messages string `pulumi:"messages"`
	// The domain name
	Name string `pulumi:"name"`
	// The organization ID owning the domain
	OrganizationId string `pulumi:"organizationId"`
	// The status of the domain
	Status string `pulumi:"status"`
	// The domain type
	Type string `pulumi:"type"`
	// The date and time of when the domain was last updated
	UpdatedAt string `pulumi:"updatedAt"`
	// The date and time of when the domain was last verified
	VerifiedAt string `pulumi:"verifiedAt"`
	// The version of the domain
	Version string `pulumi:"version"`
}

func LookupDomainOutput(ctx *pulumi.Context, args LookupDomainOutputArgs, opts ...pulumi.InvokeOption) LookupDomainResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (LookupDomainResultOutput, error) {
			args := v.(LookupDomainArgs)
			opts = internal.PkgInvokeDefaultOpts(opts)
			var rv LookupDomainResult
			secret, err := ctx.InvokePackageRaw("koyeb:index/getDomain:getDomain", args, &rv, "", opts...)
			if err != nil {
				return LookupDomainResultOutput{}, err
			}

			output := pulumi.ToOutput(rv).(LookupDomainResultOutput)
			if secret {
				return pulumi.ToSecret(output).(LookupDomainResultOutput), nil
			}
			return output, nil
		}).(LookupDomainResultOutput)
}

// A collection of arguments for invoking getDomain.
type LookupDomainOutputArgs struct {
	// The app name the domain is assigned to
	AppName pulumi.StringPtrInput `pulumi:"appName"`
	// The deployment group assigned to the domain
	DeploymentGroup pulumi.StringPtrInput `pulumi:"deploymentGroup"`
	// The CNAME record to point the domain to
	IntendedCname pulumi.StringPtrInput `pulumi:"intendedCname"`
	// The status messages of the domain
	Messages pulumi.StringPtrInput `pulumi:"messages"`
	// The domain name
	Name pulumi.StringInput `pulumi:"name"`
	// The date and time of when the domain was last verified
	VerifiedAt pulumi.StringPtrInput `pulumi:"verifiedAt"`
}

func (LookupDomainOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupDomainArgs)(nil)).Elem()
}

// A collection of values returned by getDomain.
type LookupDomainResultOutput struct{ *pulumi.OutputState }

func (LookupDomainResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupDomainResult)(nil)).Elem()
}

func (o LookupDomainResultOutput) ToLookupDomainResultOutput() LookupDomainResultOutput {
	return o
}

func (o LookupDomainResultOutput) ToLookupDomainResultOutputWithContext(ctx context.Context) LookupDomainResultOutput {
	return o
}

// The app name the domain is assigned to
func (o LookupDomainResultOutput) AppName() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupDomainResult) *string { return v.AppName }).(pulumi.StringPtrOutput)
}

// The date and time of when the domain was created
func (o LookupDomainResultOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.CreatedAt }).(pulumi.StringOutput)
}

// The deployment group assigned to the domain
func (o LookupDomainResultOutput) DeploymentGroup() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.DeploymentGroup }).(pulumi.StringOutput)
}

// The domain ID
func (o LookupDomainResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.Id }).(pulumi.StringOutput)
}

// The CNAME record to point the domain to
func (o LookupDomainResultOutput) IntendedCname() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.IntendedCname }).(pulumi.StringOutput)
}

// The status messages of the domain
func (o LookupDomainResultOutput) Messages() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.Messages }).(pulumi.StringOutput)
}

// The domain name
func (o LookupDomainResultOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.Name }).(pulumi.StringOutput)
}

// The organization ID owning the domain
func (o LookupDomainResultOutput) OrganizationId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.OrganizationId }).(pulumi.StringOutput)
}

// The status of the domain
func (o LookupDomainResultOutput) Status() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.Status }).(pulumi.StringOutput)
}

// The domain type
func (o LookupDomainResultOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.Type }).(pulumi.StringOutput)
}

// The date and time of when the domain was last updated
func (o LookupDomainResultOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.UpdatedAt }).(pulumi.StringOutput)
}

// The date and time of when the domain was last verified
func (o LookupDomainResultOutput) VerifiedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.VerifiedAt }).(pulumi.StringOutput)
}

// The version of the domain
func (o LookupDomainResultOutput) Version() pulumi.StringOutput {
	return o.ApplyT(func(v LookupDomainResult) string { return v.Version }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(LookupDomainResultOutput{})
}
