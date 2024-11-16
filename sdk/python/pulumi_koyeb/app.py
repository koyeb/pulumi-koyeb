# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import sys
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
if sys.version_info >= (3, 11):
    from typing import NotRequired, TypedDict, TypeAlias
else:
    from typing_extensions import NotRequired, TypedDict, TypeAlias
from . import _utilities
from . import outputs
from ._inputs import *

__all__ = ['AppArgs', 'App']

@pulumi.input_type
class AppArgs:
    def __init__(__self__, *,
                 name: Optional[pulumi.Input[str]] = None):
        """
        The set of arguments for constructing a App resource.
        :param pulumi.Input[str] name: The app name
        """
        if name is not None:
            pulumi.set(__self__, "name", name)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        The app name
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)


@pulumi.input_type
class _AppState:
    def __init__(__self__, *,
                 created_at: Optional[pulumi.Input[str]] = None,
                 domains: Optional[pulumi.Input[Sequence[pulumi.Input['AppDomainArgs']]]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 organization_id: Optional[pulumi.Input[str]] = None,
                 updated_at: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering App resources.
        :param pulumi.Input[str] created_at: The date and time of when the app was created
        :param pulumi.Input[Sequence[pulumi.Input['AppDomainArgs']]] domains: The app domains
        :param pulumi.Input[str] name: The app name
        :param pulumi.Input[str] organization_id: The organization ID owning the app
        :param pulumi.Input[str] updated_at: The date and time of when the app was last updated
        """
        if created_at is not None:
            pulumi.set(__self__, "created_at", created_at)
        if domains is not None:
            pulumi.set(__self__, "domains", domains)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if organization_id is not None:
            pulumi.set(__self__, "organization_id", organization_id)
        if updated_at is not None:
            pulumi.set(__self__, "updated_at", updated_at)

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> Optional[pulumi.Input[str]]:
        """
        The date and time of when the app was created
        """
        return pulumi.get(self, "created_at")

    @created_at.setter
    def created_at(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "created_at", value)

    @property
    @pulumi.getter
    def domains(self) -> Optional[pulumi.Input[Sequence[pulumi.Input['AppDomainArgs']]]]:
        """
        The app domains
        """
        return pulumi.get(self, "domains")

    @domains.setter
    def domains(self, value: Optional[pulumi.Input[Sequence[pulumi.Input['AppDomainArgs']]]]):
        pulumi.set(self, "domains", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        The app name
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="organizationId")
    def organization_id(self) -> Optional[pulumi.Input[str]]:
        """
        The organization ID owning the app
        """
        return pulumi.get(self, "organization_id")

    @organization_id.setter
    def organization_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "organization_id", value)

    @property
    @pulumi.getter(name="updatedAt")
    def updated_at(self) -> Optional[pulumi.Input[str]]:
        """
        The date and time of when the app was last updated
        """
        return pulumi.get(self, "updated_at")

    @updated_at.setter
    def updated_at(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "updated_at", value)


class App(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        """
        ## Example Usage

        ```python
        import pulumi
        import pulumi_koyeb as koyeb

        my_app = koyeb.App("my-app", name="my-app")
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The app name
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: Optional[AppArgs] = None,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        ## Example Usage

        ```python
        import pulumi
        import pulumi_koyeb as koyeb

        my_app = koyeb.App("my-app", name="my-app")
        ```

        :param str resource_name: The name of the resource.
        :param AppArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(AppArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = AppArgs.__new__(AppArgs)

            __props__.__dict__["name"] = name
            __props__.__dict__["created_at"] = None
            __props__.__dict__["domains"] = None
            __props__.__dict__["organization_id"] = None
            __props__.__dict__["updated_at"] = None
        super(App, __self__).__init__(
            'koyeb:index/app:App',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            created_at: Optional[pulumi.Input[str]] = None,
            domains: Optional[pulumi.Input[Sequence[pulumi.Input[Union['AppDomainArgs', 'AppDomainArgsDict']]]]] = None,
            name: Optional[pulumi.Input[str]] = None,
            organization_id: Optional[pulumi.Input[str]] = None,
            updated_at: Optional[pulumi.Input[str]] = None) -> 'App':
        """
        Get an existing App resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] created_at: The date and time of when the app was created
        :param pulumi.Input[Sequence[pulumi.Input[Union['AppDomainArgs', 'AppDomainArgsDict']]]] domains: The app domains
        :param pulumi.Input[str] name: The app name
        :param pulumi.Input[str] organization_id: The organization ID owning the app
        :param pulumi.Input[str] updated_at: The date and time of when the app was last updated
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _AppState.__new__(_AppState)

        __props__.__dict__["created_at"] = created_at
        __props__.__dict__["domains"] = domains
        __props__.__dict__["name"] = name
        __props__.__dict__["organization_id"] = organization_id
        __props__.__dict__["updated_at"] = updated_at
        return App(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="createdAt")
    def created_at(self) -> pulumi.Output[str]:
        """
        The date and time of when the app was created
        """
        return pulumi.get(self, "created_at")

    @property
    @pulumi.getter
    def domains(self) -> pulumi.Output[Sequence['outputs.AppDomain']]:
        """
        The app domains
        """
        return pulumi.get(self, "domains")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The app name
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="organizationId")
    def organization_id(self) -> pulumi.Output[str]:
        """
        The organization ID owning the app
        """
        return pulumi.get(self, "organization_id")

    @property
    @pulumi.getter(name="updatedAt")
    def updated_at(self) -> pulumi.Output[str]:
        """
        The date and time of when the app was last updated
        """
        return pulumi.get(self, "updated_at")
