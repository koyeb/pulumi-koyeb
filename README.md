# Koyeb Resource Provider

The [Koyeb](https://www.koyeb.com) Resource Provider for Pulumi lets you use Koyeb resources in your cloud programs. To use this package, please install the Pulumi CLI first.

## Installing

This package is available for several languages/platforms:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @koyeb/pulumi-koyeb
```

or `yarn`:

```bash
yarn add @koyeb/pulum-koyeb
```

### Python

To use from Python, install using `pip`:

```bash
pip install pulumi_koyeb
```

### Go

To use from Go, use `go get` to grab the latest version of the library:

```bash
go get github.com/koyeb/pulumi-koyeb/sdk/go/...
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package Pulumi.Koyeb
```

## Configuration

The following configuration points are available for the `koyeb` provider:

- `koyeb:token` - (Required) This is the Koyeb API token. This must be specified using the environment
  variable: `KOYEB_TOKEN`.

## Reference

For detailed reference documentation, please visit [the Pulumi registry](https://www.pulumi.com/registry/packages/koyeb/api-docs/).
