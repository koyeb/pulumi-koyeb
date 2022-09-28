// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package koyeb

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/pulumi/pulumi-koyeb/sdk/go/koyeb"
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			_, err := koyeb.GetApp(ctx, &GetAppArgs{
//				Name: "my-app",
//			}, nil)
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
func GetApp(ctx *pulumi.Context, args *GetAppArgs, opts ...pulumi.InvokeOption) (*GetAppResult, error) {
	opts = pkgInvokeDefaultOpts(opts)
	var rv GetAppResult
	err := ctx.Invoke("koyeb:index/getApp:getApp", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getApp.
type GetAppArgs struct {
	// The app name
	Name string `pulumi:"name"`
}

// A collection of values returned by getApp.
type GetAppResult struct {
	// The date and time of when the app was created
	CreatedAt string `pulumi:"createdAt"`
	// The app domains
	Domains []GetAppDomain `pulumi:"domains"`
	// The app ID
	Id string `pulumi:"id"`
	// The app name
	Name string `pulumi:"name"`
	// The organization ID owning the app
	OrganizationId string `pulumi:"organizationId"`
	// The date and time of when the app was last updated
	UpdatedAt string `pulumi:"updatedAt"`
}

func GetAppOutput(ctx *pulumi.Context, args GetAppOutputArgs, opts ...pulumi.InvokeOption) GetAppResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (GetAppResult, error) {
			args := v.(GetAppArgs)
			r, err := GetApp(ctx, &args, opts...)
			var s GetAppResult
			if r != nil {
				s = *r
			}
			return s, err
		}).(GetAppResultOutput)
}

// A collection of arguments for invoking getApp.
type GetAppOutputArgs struct {
	// The app name
	Name pulumi.StringInput `pulumi:"name"`
}

func (GetAppOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*GetAppArgs)(nil)).Elem()
}

// A collection of values returned by getApp.
type GetAppResultOutput struct{ *pulumi.OutputState }

func (GetAppResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GetAppResult)(nil)).Elem()
}

func (o GetAppResultOutput) ToGetAppResultOutput() GetAppResultOutput {
	return o
}

func (o GetAppResultOutput) ToGetAppResultOutputWithContext(ctx context.Context) GetAppResultOutput {
	return o
}

// The date and time of when the app was created
func (o GetAppResultOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v GetAppResult) string { return v.CreatedAt }).(pulumi.StringOutput)
}

// The app domains
func (o GetAppResultOutput) Domains() GetAppDomainArrayOutput {
	return o.ApplyT(func(v GetAppResult) []GetAppDomain { return v.Domains }).(GetAppDomainArrayOutput)
}

// The app ID
func (o GetAppResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v GetAppResult) string { return v.Id }).(pulumi.StringOutput)
}

// The app name
func (o GetAppResultOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v GetAppResult) string { return v.Name }).(pulumi.StringOutput)
}

// The organization ID owning the app
func (o GetAppResultOutput) OrganizationId() pulumi.StringOutput {
	return o.ApplyT(func(v GetAppResult) string { return v.OrganizationId }).(pulumi.StringOutput)
}

// The date and time of when the app was last updated
func (o GetAppResultOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v GetAppResult) string { return v.UpdatedAt }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(GetAppResultOutput{})
}
