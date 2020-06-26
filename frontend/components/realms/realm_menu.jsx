import React, { Component } from 'react';

import LinkedList from '../../util/linked_list';

import { DragNDrop, Header, Icon, Menu } from '../shoebuckle';

export default class RealmMenu extends Component {
    constructor(props) {
        super(props);
    
        this._selectRealm = this._selectRealm.bind(this);
        this._updateOrderables = this._updateOrderables.bind(this);
    }
    
    _selectRealm(e) {
        e.stopPropagation();
        const dragNDropItem = e.currentTarget;
        this.props.select(dragNDropItem.id.split("-")[1]);
    }

    _convertClusters() {
        const { clusters } = this.props;
        const converted = [];

        for (const id in clusters) {
            const cluster = clusters[id];
            converted.push({
                id: `Cluster-${ id }`,
                content: cluster.name,
                type: "folder",
                next: cluster.nextOrderableId ? `${ cluster.nextOrderableType }-${ cluster.nextOrderableId }` : null,
                prev: cluster.prevOrderableId ? `${ cluster.prevOrderableType }-${ cluster.prevOrderableId }` : null,
                parent: null
            });
        }

        return converted;
    }

    _convertRealms() {
        const { realms } = this.props;
        const converted = [];

        for (const id in realms) {
            const realm = realms[id];
            const icon = realm.realmType === "text" ? "hashtag" : "microphone";
            const parent = realm.clusterId ? `Cluster-${ realm.clusterId }` : null;
            converted.push({
                id: `Realm-${ id }`,
                content: <Menu.Item justifyStart><Icon name={ icon } /> { realm.name }</Menu.Item>,
                onClick: this._selectRealm,
                type: "item",
                next: realm.nextOrderableId ? `${ realm.nextOrderableType }-${ realm.nextOrderableId }` : null,
                prev: realm.prevOrderableId ? `${ realm.prevOrderableType }-${ realm.prevOrderableId }` : null,
                parent
            });
        }

        return converted;
    }

    _constructList() {
        const clusters = this._convertClusters();
        const realms = this._convertRealms();
        const rootRealms = realms.filter(({ parent }) => !parent);
        const ll = new LinkedList(clusters.concat(rootRealms));

        clusters.forEach(cluster => {
            const clusterRealms = realms.filter(({ parent }) => parent === cluster.id);
            ll.updateItem(cluster.id, { children: new LinkedList(clusterRealms) });
        });

        return ll;
    }

    _updateOrderables(orderables) {
        this.props.updateOrderables(orderables.map(orderable => (
            { ...orderable, type: orderable.type === "folder" ? "Cluster" : "Realm" }
        )));
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
                noHover
                stretch
                vertical
            >
                <Menu.Item>
                    <Header>
                        { dimension ? dimension.name : "Direct Messages" }
                    </Header>
                </Menu.Item>
                <Menu.Item>
                    <DragNDrop list={ this._constructList() } update={ this._updateOrderables } />
                </Menu.Item>
            </Menu>
        );
    }
}
