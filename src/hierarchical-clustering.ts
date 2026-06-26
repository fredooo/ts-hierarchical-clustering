import { AbstractCluster } from './abstract-cluster';
import { ClusterFactory } from './cluster-factory';
import { AbstractLinkage } from './linkage/abstract-linkage';

export class HierarchicalClustering<T> {
    private clusters: AbstractCluster<T>[];
    private objects: T[];
    private linkage: AbstractLinkage<T>;
    private clusterFactory: ClusterFactory<T>;
    private linkageValues: { c1: AbstractCluster<T>; c2: AbstractCluster<T>; distance: number }[];

    public constructor(objects: T[], linkage: AbstractLinkage<T>) {
        this.clusterFactory = new ClusterFactory();
        this.objects = objects;
        this.linkage = linkage;
        this.clusters = this.objects.map((e) => this.clusterFactory.createLeafCluster(e));
        this.linkageValues = [];
        this.initializeLinkageValues();
    }

    public cluster(): AbstractCluster<T> {
        while (this.clusters.length > 1) {
            // Merge cluster with lowest distance
            this.linkageValues.sort((e1, e2) => e1.distance - e2.distance);
            const { c1, c2, distance: value } = this.linkageValues[0];
            const merged = this.clusterFactory.createMergedCluster(c1, c2, value);
            // Remove merged cluster from the cluster and linkage values list
            this.clusters = this.clusters.filter((e) => e.id !== c1.id && e.id !== c2.id);
            this.linkageValues = this.linkageValues.filter(
                (e) => e.c1.id !== c1.id && e.c1.id !== c2.id && e.c2.id !== c1.id && e.c2.id !== c2.id
            );
            // Calculate and store distances to the merged cluster
            for (const cluster of this.clusters) {
                this.linkageValues.push({
                    c1: cluster,
                    c2: merged,
                    distance: this.linkage.calculate(cluster, merged),
                });
            }
            this.clusters.push(merged);
        }
        return this.clusters[0];
    }

    private initializeLinkageValues(): void {
        for (let i = 0; i < this.clusters.length; i++) {
            for (let j = i + 1; j < this.clusters.length; j++) {
                const c1 = this.clusters[i];
                const c2 = this.clusters[j];
                const distance = this.linkage.calculate(c1, c2);
                this.linkageValues.push({ c1, c2, distance });
            }
        }
    }
}
