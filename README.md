ts-hierarchical-clustering
==========================

[![Build](https://github.com/fredooo/ts-hierarchical-clustering/actions/workflows/build.yml/badge.svg)](https://github.com/fredooo/ts-hierarchical-clustering/actions/workflows/build.yml) [![Coverage Status](https://coveralls.io/repos/github/fredooo/ts-hierarchical-clustering/badge.svg?branch=master)](https://coveralls.io/github/fredooo/ts-hierarchical-clustering?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A TypeScript implementation of [AGNES][1], an agglomerative hierarchical clustering algorithm.

### Install

Install with `npm`:

```bash
npm install --save ts-hierarchical-clustering
```

This package ships CommonJS with bundled type declarations. It works with any
modern TypeScript module resolution (`node16`, `nodenext`, or `bundler`), e.g.:

```json
{
    "compilerOptions": {
        "moduleResolution": "node16"
    }
}
```

### Usage

This implementation can be used to cluster generic objects, given a useful definition of distance and in case of the Centroid-Linkage, additionally a definition for aggregation.

Example:

```javascript
    import { CentroidLinkage, Dendrogram, HierarchicalClustering } from 'ts-hierarchical-clustering';

    const data = [ 10, 0.9, 1.0, 11, 1.1 ];
    // Distance function required by all linkage strategies 
    const distFunc = (a: number, b: number): number => Math.abs(a - b);
    // Aggregation function only needed by the centroid linkage strategy
    const aggrFunc = (v: number[]): number => v.reduce((acc, curr) => acc + curr, 0) / v.length;
    const hc = new HierarchicalClustering<number>(data, new CentroidLinkage(distFunc, aggrFunc));
    const rootCluster = hc.cluster();
    // Split cluster according to the dendrogram and a cut-off value
    const dendrogram = new Dendrogram<number>(rootCluster, 9.3);
    const clustersAsRefs = dendrogram.extractClustersAsRefs();
    // clustersAsRefs: [ [1.1, 0.9, 1.0], [10, 11] ]
    const clustersAsIds = dendrogram.extractClustersAsIds();
    // clustersAsIds: [ [ 4, 1, 2 ], [ 3, 0 ] ]
```
#### Linkage Strategies

This package provides common linkage strategies:

* Single-Linkage
* Complete-Linkage
* Average-Linkage
* Average-Group-Linkage
* Centroid-Linkage

You can provide your own linkage method by subtyping the `AbstractLinkage` class.

[1]: https://onlinelibrary.wiley.com/doi/abs/10.1002/9780470316801.ch5 
