# Releasing local-pr-review-server

This repo is now the source of truth for:

- the shared review server and browser UI
- the OpenCode adapter exports
- the Pi adapter exports
- the installable Pi extension package

## Before tagging

1. Run verification:

```bash
npm test
npm run typecheck
```

2. Confirm consumer compatibility:
   - Superpowers points at the intended release tag in its dependency spec
   - Pi install instructions reference this repo, not `pi-local-pr-review`

## Cut a prerelease

1. Bump `package.json` to the prerelease version you want to ship.
2. Commit the release prep.
3. Create and push the tag:

```bash
git tag vX.Y.Z-rc.1
git push origin vX.Y.Z-rc.1
```

4. Publish a GitHub prerelease for that tag.

## Cut a stable release

1. Bump `package.json` to the stable version.
2. Commit the release prep.
3. Create and push the tag:

```bash
git tag vX.Y.Z
git push origin vX.Y.Z
```

4. Publish the GitHub release.

## Consumer update checklist

After tagging a release here:

1. Update Superpowers to the new dependency ref.
2. Re-run the Superpowers branch-review tests.
3. If this release supersedes the standalone Pi adapter repo, keep that repo archived and pointing here.
