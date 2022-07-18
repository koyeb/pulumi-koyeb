# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

from . import _utilities
import typing
# Export this package's modules as members:
from .get_app import *
from .get_domain import *
from .get_secret import *
from .get_service import *
from .koyeb_app import *
from .koyeb_domain import *
from .koyeb_secret import *
from .koyeb_service import *
from .provider import *
from ._inputs import *
from . import outputs
_utilities.register(
    resource_modules="""
[
 {
  "pkg": "koyeb",
  "mod": "index/koyebApp",
  "fqn": "pulumi_koyeb",
  "classes": {
   "koyeb:index/koyebApp:KoyebApp": "KoyebApp"
  }
 },
 {
  "pkg": "koyeb",
  "mod": "index/koyebDomain",
  "fqn": "pulumi_koyeb",
  "classes": {
   "koyeb:index/koyebDomain:KoyebDomain": "KoyebDomain"
  }
 },
 {
  "pkg": "koyeb",
  "mod": "index/koyebSecret",
  "fqn": "pulumi_koyeb",
  "classes": {
   "koyeb:index/koyebSecret:KoyebSecret": "KoyebSecret"
  }
 },
 {
  "pkg": "koyeb",
  "mod": "index/koyebService",
  "fqn": "pulumi_koyeb",
  "classes": {
   "koyeb:index/koyebService:KoyebService": "KoyebService"
  }
 }
]
""",
    resource_packages="""
[
 {
  "pkg": "koyeb",
  "token": "pulumi:providers:koyeb",
  "fqn": "pulumi_koyeb",
  "class": "Provider"
 }
]
"""
)
