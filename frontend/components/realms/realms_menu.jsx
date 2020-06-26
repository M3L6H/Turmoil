import React, { Component } from 'react';

import { DragNDrop, Header, Menu } from '../shoebuckle';

export default class RealmsMenu extends Component {
    _constructData() {
        const { clusters, realms } = this.props;
        const data = {};
        
        for (const id in clusters) {
            const cluster = clusters[id];
            data[`Cluster-${ id }`] = {
                id: `Cluster-${ id }`,
                content: cluster.name,
                type: "folder",
                next: cluster.nextOrderableId ? `${ cluster.nextOrderableType }-${ cluster.nextOrderableId }` : null,
                prev: cluster.prevOrderableId ? `${ cluster.prevOrderableType }-${ cluster.prevOrderableId }` : null,
                parent: null
            };
        }

        for (const id in realms) {
            const realm = realms[id];
            data[`Realm-${ id }`] = {
                id: `Realm-${ id }`,
                content: realm.name,
                type: "item",
                next: realm.nextOrderableId ? `${ realm.nextOrderableType }-${ realm.nextOrderableId }` : null,
                prev: realm.prevOrderableId ? `${ realm.prevOrderableType }-${ realm.prevOrderableId }` : null,
                parent: realm.clusterId ? `Cluster-${ realm.clusterId }` : null
            };
        }

        return data;
    }
    
    render() {
        const { 
            dimension,
            inverted
        } = this.props;
        
        return (
            <Menu
                fluid
                inverted={ inverted }
                stretch
                vertical
            >
                <Menu.Item>
                    <Header>
                        { dimension ? dimension.name : "Direct Messages" }
                    </Header>
                </Menu.Item>
                <Menu.Item>
                    <DragNDrop data={ this._constructData() } />
                </Menu.Item>
            </Menu>
        );
    }
}
