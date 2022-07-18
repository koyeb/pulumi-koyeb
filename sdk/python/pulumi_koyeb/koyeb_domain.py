# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['KoyebDomainArgs', 'KoyebDomain']

@pulumi.input_type
class KoyebDomainArgs:
    def __init__(__self__, *,
                 app_name: Optional[pulumi.Input[str]] = None,
                 deployment_group: Optional[pulumi.Input[str]] = None,
                 intended_cname: Optional[pulumi.Input[str]] = None,
                 messages: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 verified_at: Optional[pulumi.Input[str]] = None):
        """
        The set of arguments for constructing a KoyebDomain resource.
        :param pulumi.Input[str] app_name: The app name the domain is assigned to
        :param pulumi.Input[str] deployment_group: The deployment group assigned to the domain
        :param pulumi.Input[str] intended_cname: The CNAME record to point the domain to
        :param pulumi.Input[str] messages: The status messages of the domain
        :param pulumi.Input[str] name: The domain name
        :param pulumi.Input[str] verified_at: The date and time of when the domain was last verified
        """
        if app_name is not None:
            pulumi.set(__self__, "app_name", app_name)
        if deployment_group is not None:
            pulumi.set(__self__, "deployment_group", deployment_group)
        if intended_cname is not None:
            pulumi.set(__self__, "intended_cname", intended_cname)
        if messages is not None:
            pulumi.set(__self__, "messages", messages)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if verified_at is not None:
            pulumi.set(__self__, "verified_at", verified_at)

    @property
    @pulumi.getter(name="appName")
    def app_name(self) -> Optional[pulumi.Input[str]]:
        """
        The app name the domain is assigned to
        """
        return pulumi.get(self, "app_name")

    @app_name.setter
    def app_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "app_name", value)

    @property
    @pulumi.getter(name="deploymentGroup")
    def deployment_group(self) -> Optional[pulumi.Input[str]]:
        """
        The deployment group assigned to the domain
        """
        return pulumi.get(self, "deployment_group")

    @deployment_group.setter
    def deployment_group(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "deployment_group", value)

    @property
    @pulumi.getter(name="intendedCname")
    def intended_cname(self) -> Optional[pulumi.Input[str]]:
        """
        The CNAME record to point the domain to
        """
        return pulumi.get(self, "intended_cname")

    @intended_cname.setter
    def intended_cname(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "intended_cname", value)

    @property
    @pulumi.getter
    def messages(self) -> Optional[pulumi.Input[str]]:
        """
        The status messages of the domain
        """
        return pulumi.get(self, "messages")

    @messages.setter
    def messages(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "messages", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        The domain name
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="verifiedAt")
    def verified_at(self) -> Optional[pulumi.Input[str]]:
        """
        The date and time of when the domain was last verified
        """
        return pulumi.get(self, "verified_at")

    @verified_at.setter
    def verified_at(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "verified_at", value)


@pulumi.input_type
class _KoyebDomainState:
    def __init__(__self__, *,
                 app_name: Optional[pulumi.Input[str]] = None,
                 created_at: Optional[pulumi.Input[str]] = None,
                 deployment_group: Optional[pulumi.Input[str]] = None,
                 intended_cname: Optional[pulumi.Input[str]] = None,
                 messages: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 organization_id: Optional[pulumi.Input[str]] = None,
                 status: Optional[pulumi.Input[str]] = None,
                 type: Optional[pulumi.Input[str]] = None,
                 updated_at: Optional[pulumi.Input[str]] = None,
                 verified_at: Optional[pulumi.Input[str]] = None,
                 version: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering KoyebDomain resources.
        :param pulumi.Input[str] app_name: The app name the domain is assigned to
        :param pulumi.Input[str] created_at: The date and time of when the domain was created
        :param pulumi.Input[str] deployment_group: The deployment group assigned to the domain
        :param pulumi.Input[str] intended_cname: The CNAME record to point the domain to
        :param pulumi.Input[str] messages: The status messages of the domain
        :param pulumi.Input[str] name: The domain name
        :param pulumi.Input[str] organization_id: The organization ID owning the domain
        :param pulumi.Input[str] status: The status of the domain
        :param pulumi.Input[str] type: The domain type
        :param pulumi.Input[str] updated_at: The date and time of when the domain was last updated
        :param pulumi.Input[str] verified_at: The date and time of when the domain was last verified
        :param pulumi.Input[str] version: The version of the domain
        """
        if app_name is not None:
            pulumi.set(__self__, "app_name", app_name)
        if created_at is not None:
            pulumi.set(__self__, "created_at", created_at)
        if deployment_group is not None:
            pulumi.set(__self__, "deployment_group", deployment_group)
        if intended_cname is not None:
            pulumi.set(__self__, "intended_cname", intended_cname)
        if messages is not None:
            pulumi.set(__self__, "messages", messages)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if organization_id is not None:
            pulumi.set(__self__, "organization_id", organization_id)
        if status is not None:
            pulumi.set(__self__, "status", status)
        if type is not None:
            pulumi.set(__self__, "type", type)
        if updated_at is not None:
            pulumi.set(__self__, "updated_at", updated_at)
        if verified_at is not None:
            pulumi.set(__self__, "verified_at", verified_at)
        if version is not None:
            pulumi.set(__self__, "version", version)

    @property
    @pulumi.getter(name="appName")
    def app_name(self) -> Optional[pulumi.Input[str]]:
        """
        The app name the domain is assigned to
        """
        return pulumi.get(self, "app_name")

    @app_name.setter
    def app_name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "app_name", value)

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> Optional[pulumi.Input[str]]:
        """
        The date and time of when the domain was created
        """
        return pulumi.get(self, "created_at")

    @created_at.setter
    def created_at(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "created_at", value)

    @property
    @pulumi.getter(name="deploymentGroup")
    def deployment_group(self) -> Optional[pulumi.Input[str]]:
        """
        The deployment group assigned to the domain
        """
        return pulumi.get(self, "deployment_group")

    @deployment_group.setter
    def deployment_group(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "deployment_group", value)

    @property
    @pulumi.getter(name="intendedCname")
    def intended_cname(self) -> Optional[pulumi.Input[str]]:
        """
        The CNAME record to point the domain to
        """
        return pulumi.get(self, "intended_cname")

    @intended_cname.setter
    def intended_cname(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "intended_cname", value)

    @property
    @pulumi.getter
    def messages(self) -> Optional[pulumi.Input[str]]:
        """
        The status messages of the domain
        """
        return pulumi.get(self, "messages")

    @messages.setter
    def messages(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "messages", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        The domain name
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="organizationId")
    def organization_id(self) -> Optional[pulumi.Input[str]]:
        """
        The organization ID owning the domain
        """
        return pulumi.get(self, "organization_id")

    @organization_id.setter
    def organization_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "organization_id", value)

    @property
    @pulumi.getter
    def status(self) -> Optional[pulumi.Input[str]]:
        """
        The status of the domain
        """
        return pulumi.get(self, "status")

    @status.setter
    def status(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "status", value)

    @property
    @pulumi.getter
    def type(self) -> Optional[pulumi.Input[str]]:
        """
        The domain type
        """
        return pulumi.get(self, "type")

    @type.setter
    def type(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "type", value)

    @property
    @pulumi.getter(name="updatedAt")
    def updated_at(self) -> Optional[pulumi.Input[str]]:
        """
        The date and time of when the domain was last updated
        """
        return pulumi.get(self, "updated_at")

    @updated_at.setter
    def updated_at(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "updated_at", value)

    @property
    @pulumi.getter(name="verifiedAt")
    def verified_at(self) -> Optional[pulumi.Input[str]]:
        """
        The date and time of when the domain was last verified
        """
        return pulumi.get(self, "verified_at")

    @verified_at.setter
    def verified_at(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "verified_at", value)

    @property
    @pulumi.getter
    def version(self) -> Optional[pulumi.Input[str]]:
        """
        The version of the domain
        """
        return pulumi.get(self, "version")

    @version.setter
    def version(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "version", value)


class KoyebDomain(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 app_name: Optional[pulumi.Input[str]] = None,
                 deployment_group: Optional[pulumi.Input[str]] = None,
                 intended_cname: Optional[pulumi.Input[str]] = None,
                 messages: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 verified_at: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        ## Example Usage

        ```python
        import pulumi
        import pulumi_koyeb as koyeb

        my_domain = koyeb.KoyebDomain("my-domain")
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] app_name: The app name the domain is assigned to
        :param pulumi.Input[str] deployment_group: The deployment group assigned to the domain
        :param pulumi.Input[str] intended_cname: The CNAME record to point the domain to
        :param pulumi.Input[str] messages: The status messages of the domain
        :param pulumi.Input[str] name: The domain name
        :param pulumi.Input[str] verified_at: The date and time of when the domain was last verified
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: Optional[KoyebDomainArgs] = None,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        ## Example Usage

        ```python
        import pulumi
        import pulumi_koyeb as koyeb

        my_domain = koyeb.KoyebDomain("my-domain")
        ```

        :param str resource_name: The name of the resource.
        :param KoyebDomainArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(KoyebDomainArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 app_name: Optional[pulumi.Input[str]] = None,
                 deployment_group: Optional[pulumi.Input[str]] = None,
                 intended_cname: Optional[pulumi.Input[str]] = None,
                 messages: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 verified_at: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.plugin_download_url is None:
            opts.plugin_download_url = _utilities.get_plugin_download_url()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = KoyebDomainArgs.__new__(KoyebDomainArgs)

            __props__.__dict__["app_name"] = app_name
            __props__.__dict__["deployment_group"] = deployment_group
            __props__.__dict__["intended_cname"] = intended_cname
            __props__.__dict__["messages"] = messages
            __props__.__dict__["name"] = name
            __props__.__dict__["verified_at"] = verified_at
            __props__.__dict__["created_at"] = None
            __props__.__dict__["organization_id"] = None
            __props__.__dict__["status"] = None
            __props__.__dict__["type"] = None
            __props__.__dict__["updated_at"] = None
            __props__.__dict__["version"] = None
        super(KoyebDomain, __self__).__init__(
            'koyeb:index/koyebDomain:KoyebDomain',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            app_name: Optional[pulumi.Input[str]] = None,
            created_at: Optional[pulumi.Input[str]] = None,
            deployment_group: Optional[pulumi.Input[str]] = None,
            intended_cname: Optional[pulumi.Input[str]] = None,
            messages: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            organization_id: Optional[pulumi.Input[str]] = None,
            status: Optional[pulumi.Input[str]] = None,
            type: Optional[pulumi.Input[str]] = None,
            updated_at: Optional[pulumi.Input[str]] = None,
            verified_at: Optional[pulumi.Input[str]] = None,
            version: Optional[pulumi.Input[str]] = None) -> 'KoyebDomain':
        """
        Get an existing KoyebDomain resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] app_name: The app name the domain is assigned to
        :param pulumi.Input[str] created_at: The date and time of when the domain was created
        :param pulumi.Input[str] deployment_group: The deployment group assigned to the domain
        :param pulumi.Input[str] intended_cname: The CNAME record to point the domain to
        :param pulumi.Input[str] messages: The status messages of the domain
        :param pulumi.Input[str] name: The domain name
        :param pulumi.Input[str] organization_id: The organization ID owning the domain
        :param pulumi.Input[str] status: The status of the domain
        :param pulumi.Input[str] type: The domain type
        :param pulumi.Input[str] updated_at: The date and time of when the domain was last updated
        :param pulumi.Input[str] verified_at: The date and time of when the domain was last verified
        :param pulumi.Input[str] version: The version of the domain
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _KoyebDomainState.__new__(_KoyebDomainState)

        __props__.__dict__["app_name"] = app_name
        __props__.__dict__["created_at"] = created_at
        __props__.__dict__["deployment_group"] = deployment_group
        __props__.__dict__["intended_cname"] = intended_cname
        __props__.__dict__["messages"] = messages
        __props__.__dict__["name"] = name
        __props__.__dict__["organization_id"] = organization_id
        __props__.__dict__["status"] = status
        __props__.__dict__["type"] = type
        __props__.__dict__["updated_at"] = updated_at
        __props__.__dict__["verified_at"] = verified_at
        __props__.__dict__["version"] = version
        return KoyebDomain(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="appName")
    def app_name(self) -> pulumi.Output[Optional[str]]:
        """
        The app name the domain is assigned to
        """
        return pulumi.get(self, "app_name")

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> pulumi.Output[str]:
        """
        The date and time of when the domain was created
        """
        return pulumi.get(self, "created_at")

    @property
    @pulumi.getter(name="deploymentGroup")
    def deployment_group(self) -> pulumi.Output[str]:
        """
        The deployment group assigned to the domain
        """
        return pulumi.get(self, "deployment_group")

    @property
    @pulumi.getter(name="intendedCname")
    def intended_cname(self) -> pulumi.Output[str]:
        """
        The CNAME record to point the domain to
        """
        return pulumi.get(self, "intended_cname")

    @property
    @pulumi.getter
    def messages(self) -> pulumi.Output[str]:
        """
        The status messages of the domain
        """
        return pulumi.get(self, "messages")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The domain name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="organizationId")
    def organization_id(self) -> pulumi.Output[str]:
        """
        The organization ID owning the domain
        """
        return pulumi.get(self, "organization_id")

    @property
    @pulumi.getter
    def status(self) -> pulumi.Output[str]:
        """
        The status of the domain
        """
        return pulumi.get(self, "status")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[str]:
        """
        The domain type
        """
        return pulumi.get(self, "type")

    @property
    @pulumi.getter(name="updatedAt")
    def updated_at(self) -> pulumi.Output[str]:
        """
        The date and time of when the domain was last updated
        """
        return pulumi.get(self, "updated_at")

    @property
    @pulumi.getter(name="verifiedAt")
    def verified_at(self) -> pulumi.Output[str]:
        """
        The date and time of when the domain was last verified
        """
        return pulumi.get(self, "verified_at")

    @property
    @pulumi.getter
    def version(self) -> pulumi.Output[str]:
        """
        The version of the domain
        """
        return pulumi.get(self, "version")

