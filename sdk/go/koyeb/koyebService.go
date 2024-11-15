// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package koyeb

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
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
//			_, err := koyeb.NewKoyebService(ctx, "my-service", &koyeb.KoyebServiceArgs{
//				AppName: pulumi.Any(koyeb_app.My_app.Name),
//				Definition: &KoyebServiceDefinitionArgs{
//					Name: pulumi.String("my-service"),
//					InstanceTypes: KoyebServiceDefinitionInstanceTypeArray{
//						&KoyebServiceDefinitionInstanceTypeArgs{
//							Type: pulumi.String("micro"),
//						},
//					},
//					Ports: KoyebServiceDefinitionPortArray{
//						&KoyebServiceDefinitionPortArgs{
//							Port:     pulumi.Int(3000),
//							Protocol: pulumi.String("http"),
//						},
//					},
//					Scalings: KoyebServiceDefinitionScalingArray{
//						&KoyebServiceDefinitionScalingArgs{
//							Min: pulumi.Int(1),
//							Max: pulumi.Int(1),
//						},
//					},
//					Envs: KoyebServiceDefinitionEnvArray{
//						&KoyebServiceDefinitionEnvArgs{
//							Key:   pulumi.String("FOO"),
//							Value: pulumi.String("BAR"),
//						},
//						&KoyebServiceDefinitionEnvArgs{
//							Key:   pulumi.String("PORT"),
//							Value: pulumi.String("3000"),
//						},
//					},
//					Routes: KoyebServiceDefinitionRouteArray{
//						&KoyebServiceDefinitionRouteArgs{
//							Path: pulumi.String("/"),
//							Port: pulumi.Int(3000),
//						},
//					},
//					Regions: pulumi.StringArray{
//						pulumi.String("fra"),
//					},
//					Docker: &KoyebServiceDefinitionDockerArgs{
//						Image: pulumi.String("koyeb/demo"),
//					},
//				},
//			}, pulumi.DependsOn([]pulumi.Resource{
//				koyeb_app.My - app,
//			}))
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
type KoyebService struct {
	pulumi.CustomResourceState

	// The service active deployment ID
	ActiveDeployment pulumi.StringOutput `pulumi:"activeDeployment"`
	// The app id the service is assigned to
	AppId pulumi.StringOutput `pulumi:"appId"`
	// The app name the service is assigned to
	AppName pulumi.StringOutput `pulumi:"appName"`
	// The date and time of when the service was created
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// The service deployment definition
	Definition KoyebServiceDefinitionOutput `pulumi:"definition"`
	// The service latest deployment ID
	LatestDeployment pulumi.StringOutput `pulumi:"latestDeployment"`
	// The status messages of the service
	Messages pulumi.StringOutput `pulumi:"messages"`
	// The service name
	Name pulumi.StringOutput `pulumi:"name"`
	// The organization ID owning the service
	OrganizationId pulumi.StringOutput `pulumi:"organizationId"`
	// The date and time of when the service was last updated
	PausedAt pulumi.StringOutput `pulumi:"pausedAt"`
	// The date and time of when the service was last updated
	ResumedAt pulumi.StringOutput `pulumi:"resumedAt"`
	// The status of the service
	Status pulumi.StringOutput `pulumi:"status"`
	// The date and time of when the service was last updated
	TerminatedAt pulumi.StringOutput `pulumi:"terminatedAt"`
	// The date and time of when the service was last updated
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
	// The version of the service
	Version pulumi.StringOutput `pulumi:"version"`
}

// NewKoyebService registers a new resource with the given unique name, arguments, and options.
func NewKoyebService(ctx *pulumi.Context,
	name string, args *KoyebServiceArgs, opts ...pulumi.ResourceOption) (*KoyebService, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AppName == nil {
		return nil, errors.New("invalid value for required argument 'AppName'")
	}
	if args.Definition == nil {
		return nil, errors.New("invalid value for required argument 'Definition'")
	}
	opts = pkgResourceDefaultOpts(opts)
	var resource KoyebService
	err := ctx.RegisterResource("koyeb:index/koyebService:KoyebService", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetKoyebService gets an existing KoyebService resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetKoyebService(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *KoyebServiceState, opts ...pulumi.ResourceOption) (*KoyebService, error) {
	var resource KoyebService
	err := ctx.ReadResource("koyeb:index/koyebService:KoyebService", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering KoyebService resources.
type koyebServiceState struct {
	// The service active deployment ID
	ActiveDeployment *string `pulumi:"activeDeployment"`
	// The app id the service is assigned to
	AppId *string `pulumi:"appId"`
	// The app name the service is assigned to
	AppName *string `pulumi:"appName"`
	// The date and time of when the service was created
	CreatedAt *string `pulumi:"createdAt"`
	// The service deployment definition
	Definition *KoyebServiceDefinition `pulumi:"definition"`
	// The service latest deployment ID
	LatestDeployment *string `pulumi:"latestDeployment"`
	// The status messages of the service
	Messages *string `pulumi:"messages"`
	// The service name
	Name *string `pulumi:"name"`
	// The organization ID owning the service
	OrganizationId *string `pulumi:"organizationId"`
	// The date and time of when the service was last updated
	PausedAt *string `pulumi:"pausedAt"`
	// The date and time of when the service was last updated
	ResumedAt *string `pulumi:"resumedAt"`
	// The status of the service
	Status *string `pulumi:"status"`
	// The date and time of when the service was last updated
	TerminatedAt *string `pulumi:"terminatedAt"`
	// The date and time of when the service was last updated
	UpdatedAt *string `pulumi:"updatedAt"`
	// The version of the service
	Version *string `pulumi:"version"`
}

type KoyebServiceState struct {
	// The service active deployment ID
	ActiveDeployment pulumi.StringPtrInput
	// The app id the service is assigned to
	AppId pulumi.StringPtrInput
	// The app name the service is assigned to
	AppName pulumi.StringPtrInput
	// The date and time of when the service was created
	CreatedAt pulumi.StringPtrInput
	// The service deployment definition
	Definition KoyebServiceDefinitionPtrInput
	// The service latest deployment ID
	LatestDeployment pulumi.StringPtrInput
	// The status messages of the service
	Messages pulumi.StringPtrInput
	// The service name
	Name pulumi.StringPtrInput
	// The organization ID owning the service
	OrganizationId pulumi.StringPtrInput
	// The date and time of when the service was last updated
	PausedAt pulumi.StringPtrInput
	// The date and time of when the service was last updated
	ResumedAt pulumi.StringPtrInput
	// The status of the service
	Status pulumi.StringPtrInput
	// The date and time of when the service was last updated
	TerminatedAt pulumi.StringPtrInput
	// The date and time of when the service was last updated
	UpdatedAt pulumi.StringPtrInput
	// The version of the service
	Version pulumi.StringPtrInput
}

func (KoyebServiceState) ElementType() reflect.Type {
	return reflect.TypeOf((*koyebServiceState)(nil)).Elem()
}

type koyebServiceArgs struct {
	// The app name the service is assigned to
	AppName string `pulumi:"appName"`
	// The service deployment definition
	Definition KoyebServiceDefinition `pulumi:"definition"`
	// The status messages of the service
	Messages *string `pulumi:"messages"`
}

// The set of arguments for constructing a KoyebService resource.
type KoyebServiceArgs struct {
	// The app name the service is assigned to
	AppName pulumi.StringInput
	// The service deployment definition
	Definition KoyebServiceDefinitionInput
	// The status messages of the service
	Messages pulumi.StringPtrInput
}

func (KoyebServiceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*koyebServiceArgs)(nil)).Elem()
}

type KoyebServiceInput interface {
	pulumi.Input

	ToKoyebServiceOutput() KoyebServiceOutput
	ToKoyebServiceOutputWithContext(ctx context.Context) KoyebServiceOutput
}

func (*KoyebService) ElementType() reflect.Type {
	return reflect.TypeOf((**KoyebService)(nil)).Elem()
}

func (i *KoyebService) ToKoyebServiceOutput() KoyebServiceOutput {
	return i.ToKoyebServiceOutputWithContext(context.Background())
}

func (i *KoyebService) ToKoyebServiceOutputWithContext(ctx context.Context) KoyebServiceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KoyebServiceOutput)
}

// KoyebServiceArrayInput is an input type that accepts KoyebServiceArray and KoyebServiceArrayOutput values.
// You can construct a concrete instance of `KoyebServiceArrayInput` via:
//
//	KoyebServiceArray{ KoyebServiceArgs{...} }
type KoyebServiceArrayInput interface {
	pulumi.Input

	ToKoyebServiceArrayOutput() KoyebServiceArrayOutput
	ToKoyebServiceArrayOutputWithContext(context.Context) KoyebServiceArrayOutput
}

type KoyebServiceArray []KoyebServiceInput

func (KoyebServiceArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*KoyebService)(nil)).Elem()
}

func (i KoyebServiceArray) ToKoyebServiceArrayOutput() KoyebServiceArrayOutput {
	return i.ToKoyebServiceArrayOutputWithContext(context.Background())
}

func (i KoyebServiceArray) ToKoyebServiceArrayOutputWithContext(ctx context.Context) KoyebServiceArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KoyebServiceArrayOutput)
}

// KoyebServiceMapInput is an input type that accepts KoyebServiceMap and KoyebServiceMapOutput values.
// You can construct a concrete instance of `KoyebServiceMapInput` via:
//
//	KoyebServiceMap{ "key": KoyebServiceArgs{...} }
type KoyebServiceMapInput interface {
	pulumi.Input

	ToKoyebServiceMapOutput() KoyebServiceMapOutput
	ToKoyebServiceMapOutputWithContext(context.Context) KoyebServiceMapOutput
}

type KoyebServiceMap map[string]KoyebServiceInput

func (KoyebServiceMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*KoyebService)(nil)).Elem()
}

func (i KoyebServiceMap) ToKoyebServiceMapOutput() KoyebServiceMapOutput {
	return i.ToKoyebServiceMapOutputWithContext(context.Background())
}

func (i KoyebServiceMap) ToKoyebServiceMapOutputWithContext(ctx context.Context) KoyebServiceMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(KoyebServiceMapOutput)
}

type KoyebServiceOutput struct{ *pulumi.OutputState }

func (KoyebServiceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**KoyebService)(nil)).Elem()
}

func (o KoyebServiceOutput) ToKoyebServiceOutput() KoyebServiceOutput {
	return o
}

func (o KoyebServiceOutput) ToKoyebServiceOutputWithContext(ctx context.Context) KoyebServiceOutput {
	return o
}

// The service active deployment ID
func (o KoyebServiceOutput) ActiveDeployment() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.ActiveDeployment }).(pulumi.StringOutput)
}

// The app id the service is assigned to
func (o KoyebServiceOutput) AppId() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.AppId }).(pulumi.StringOutput)
}

// The app name the service is assigned to
func (o KoyebServiceOutput) AppName() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.AppName }).(pulumi.StringOutput)
}

// The date and time of when the service was created
func (o KoyebServiceOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.CreatedAt }).(pulumi.StringOutput)
}

// The service deployment definition
func (o KoyebServiceOutput) Definition() KoyebServiceDefinitionOutput {
	return o.ApplyT(func(v *KoyebService) KoyebServiceDefinitionOutput { return v.Definition }).(KoyebServiceDefinitionOutput)
}

// The service latest deployment ID
func (o KoyebServiceOutput) LatestDeployment() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.LatestDeployment }).(pulumi.StringOutput)
}

// The status messages of the service
func (o KoyebServiceOutput) Messages() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.Messages }).(pulumi.StringOutput)
}

// The service name
func (o KoyebServiceOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

// The organization ID owning the service
func (o KoyebServiceOutput) OrganizationId() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.OrganizationId }).(pulumi.StringOutput)
}

// The date and time of when the service was last updated
func (o KoyebServiceOutput) PausedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.PausedAt }).(pulumi.StringOutput)
}

// The date and time of when the service was last updated
func (o KoyebServiceOutput) ResumedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.ResumedAt }).(pulumi.StringOutput)
}

// The status of the service
func (o KoyebServiceOutput) Status() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.Status }).(pulumi.StringOutput)
}

// The date and time of when the service was last updated
func (o KoyebServiceOutput) TerminatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.TerminatedAt }).(pulumi.StringOutput)
}

// The date and time of when the service was last updated
func (o KoyebServiceOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.UpdatedAt }).(pulumi.StringOutput)
}

// The version of the service
func (o KoyebServiceOutput) Version() pulumi.StringOutput {
	return o.ApplyT(func(v *KoyebService) pulumi.StringOutput { return v.Version }).(pulumi.StringOutput)
}

type KoyebServiceArrayOutput struct{ *pulumi.OutputState }

func (KoyebServiceArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*KoyebService)(nil)).Elem()
}

func (o KoyebServiceArrayOutput) ToKoyebServiceArrayOutput() KoyebServiceArrayOutput {
	return o
}

func (o KoyebServiceArrayOutput) ToKoyebServiceArrayOutputWithContext(ctx context.Context) KoyebServiceArrayOutput {
	return o
}

func (o KoyebServiceArrayOutput) Index(i pulumi.IntInput) KoyebServiceOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *KoyebService {
		return vs[0].([]*KoyebService)[vs[1].(int)]
	}).(KoyebServiceOutput)
}

type KoyebServiceMapOutput struct{ *pulumi.OutputState }

func (KoyebServiceMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*KoyebService)(nil)).Elem()
}

func (o KoyebServiceMapOutput) ToKoyebServiceMapOutput() KoyebServiceMapOutput {
	return o
}

func (o KoyebServiceMapOutput) ToKoyebServiceMapOutputWithContext(ctx context.Context) KoyebServiceMapOutput {
	return o
}

func (o KoyebServiceMapOutput) MapIndex(k pulumi.StringInput) KoyebServiceOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *KoyebService {
		return vs[0].(map[string]*KoyebService)[vs[1].(string)]
	}).(KoyebServiceOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*KoyebServiceInput)(nil)).Elem(), &KoyebService{})
	pulumi.RegisterInputType(reflect.TypeOf((*KoyebServiceArrayInput)(nil)).Elem(), KoyebServiceArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*KoyebServiceMapInput)(nil)).Elem(), KoyebServiceMap{})
	pulumi.RegisterOutputType(KoyebServiceOutput{})
	pulumi.RegisterOutputType(KoyebServiceArrayOutput{})
	pulumi.RegisterOutputType(KoyebServiceMapOutput{})
}
