import React, { Component } from 'react';

import LinkedList from '../../util/linked_list';

import { DragNDrop, Header, Icon, Menu } from '../shoebuckle';

export default class RealmMenu extends Component {
    constructor(props) {
        super(props);
    
        this._selectRealm = this._selectRealm.bind(this);
        this._moveBefore = this._moveBefore.bind(this);
        this.lookupTable = {};
    }
    
    _selectRealm(e) {
        e.stopPropagation();
        const dragNDropItem = e.currentTarget;
        this.props.select(dragNDropItem.id.split("-")[1]);
    }

    _convertClusters() {
        const { clusters } = this.props;
        const converted = {};

        for (const id in clusters) {
            const cluster = clusters[id];
            converted[`Cluster-${ id }`] = {
                id: `Cluster-${ id }`,
                content: cluster.name,
                type: "folder",
                next: cluster.nextOrderableId ? `${ cluster.nextOrderableType }-${ cluster.nextOrderableId }` : null,
                prev: cluster.prevOrderableId ? `${ cluster.prevOrderableType }-${ cluster.prevOrderableId }` : null,
                parent: null
            };
        }

        return converted;
    }

    _convertRealms() {
        const { realms } = this.props;
        const converted = {};

        for (const id in realms) {
            const realm = realms[id];
            const icon = realm.realmType === "text" ? "hashtag" : "microphone";
            const parent = realm.clusterId ? `Cluster-${ realm.clusterId }` : null;
            converted[`Realm-${ id }`] = {
                id: `Realm-${ id }`,
                content: <Menu.Item justifyStart><Icon name={ icon } /> { realm.name }</Menu.Item>,
                onClick: this._selectRealm,
                type: "item",
                next: realm.nextOrderableId ? `${ realm.nextOrderableType }-${ realm.nextOrderableId }` : null,
                prev: realm.prevOrderableId ? `${ realm.prevOrderableType }-${ realm.prevOrderableId }` : null,
                parent
            };
        }

        return converted;
    }

    _constructList() {
        const clusters = this._convertClusters();
        const realms = this._convertRealms();
        
        const clustersArray = Object.values(clusters);
        const realmsArray = Object.values(realms);
        const rootRealms = realmsArray.filter(({ parent }) => !parent);
        const ll = new LinkedList(clustersArray.concat(rootRealms));
        this.lookupTable["root"] = ll;

        clustersArray.forEach(cluster => {
            const clusterRealms = realmsArray.filter(({ parent }) => parent === cluster.id);
            const subLl = new LinkedList(clusterRealms);
            this.lookupTable[clusterRealms.id] = subLl;
            ll.updateItem(cluster.id, { children: subLl });
        });

        return ll;
    }

    _moveBefore(beforeId, itemId, fromListId="root", toListId="root") {
        const fromList = this.lookupTable[fromListId];
        const toList = this.lookupTable[toListId];
        this.lookupTable[itemId] = toList;
        const item = fromList.removeItem(itemId);
        toList.insertItemBefore(beforeId, item);
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
                    <DragNDrop list={ this._constructList() } moveBefore={ this._moveBefore } />
                </Menu.Item>
            </Menu>
        );
    }
}
