# Changelog

All notable changes to this project will be documented in this file.

**Tags:** 
- Added
- Changed
- Deprecated
- Removed
- Fixed
- Security

## [v1.0.9] (2026-06-26)
### Changed
- Updated all dev dependencies to latest (TypeScript 6, Jest 30, ESLint 10, Prettier 3)
- Migrated ESLint to flat config (`eslint.config.mjs`)
- Modernized `tsconfig.json` (ES2021 target, Node16 module resolution)

### Added
- GitHub Actions build workflow with Codecov coverage upload

### Removed
- Travis CI configuration

## [v1.0.8] (2019-08-27)
### Security
- Updated `eslint-utils`

## [v1.0.7] (2019-08-20)
### Changed
- Exposed classes `AbstractCluster`, `LeafCluster`, and `MergedCluster` 

## [v1.0.6] (2019-08-11)
### Removed
- Removed `codecov` from dependencies

## [v1.0.5] (2019-08-11)
### Fixed
- Average-Group-Linkage

### Added
- `CHANGELOG.md` file
- *david-dm* badges in `README.md`
- Test coverage with `codecov`

## [v1.0.4] (2019-08-07)
### Fixed
- Easier result access in `dendrogram.js` with `extractClustersAsRefs` and `extractClustersAsIds`

### Deprecated
- `extractClusters` in `dendrogram.js`, use `extractClustersAsIds` instead

## [v1.0.3] (2019-08-06)
### Fixed
- Optimization and readability in `dendrogram.ts` and `hierarchical-clustering.ts`
- Clean-up of tests and config files

## [v1.0.2] (2019-08-05)
### Added
- ESLint, prettier config and `travis.yml`

### Fixed
- Code style and typos

## [v1.0.1] (2019-08-04)
### Added
- Keywords to `package.json`

### Fixed
- Typos in `README.md` and `package.json`

## [v1.0.0] (2019-08-04)
### Added
- Implementation of the AGNES hierarchical clustering algorithm
- Strategies: Single-Linkage, Complete-Linkage, Average-Linkage, Average-Group-Linkage, and Centroid-Linkage

[v1.0.5]: https://github.com/fredooo/ts-hierarchical-clustering/compare/v1.0.4...v1.0.5
[v1.0.4]: https://github.com/fredooo/ts-hierarchical-clustering/compare/v1.0.3...v1.0.4
[v1.0.3]: https://github.com/fredooo/ts-hierarchical-clustering/compare/v1.0.2...v1.0.3
[v1.0.2]: https://github.com/fredooo/ts-hierarchical-clustering/compare/v1.0.1...v1.0.2
[v1.0.1]: https://github.com/fredooo/ts-hierarchical-clustering/releases/tag/v1.0.1
[v1.0.0]: https://github.com/fredooo/ts-hierarchical-clustering/commit/d5d44180fff8419986c8103f0a64586446f85412

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
