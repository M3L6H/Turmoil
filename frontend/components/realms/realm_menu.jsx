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

    _updateOrder() {
        if (!this.props.dimension) return;
        
        const data = {};
        const ll = this.lookupTable["root"];
        const it = ll.start();

        while (it.value) {
            const { id, type, parent, next, prev, children } = it.value;
            data[id] = { id, type, parent, next, prev };
            const subIt = children.start();

            while (subIt.value) {
                const { id, type, parent, next, prev } = subIt.value;
                data[id] = { id, type, parent, next, prev };
                subIt.next();
            }
            
            it.next();
        }

        const { updateOrder, dimension } = this.props;
        
        updateOrder(dimension.id, data);
    }
    
    _selectRealm(e) {
        e.stopPropagation();
        const dragNDropItem = e.currentTarget;
        this.props.select(dragNDropItem.id.split("-")[1]);
    }

    // Convert clusters takes the clusters we get from the database and turns it
    // into a format that our dnd component can use
    // This method could have been put in a reducer, but its sibling,
    // convertRealms, could not, so for consistency we leave this here
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
                parent: "root"
            });
        }

        return converted;
    }

    // Like convert clusters above, this method converts realms into a format
    // that our dnd component can use. This method has to be in this class since
    // it needs to reference the onClick event handler selectRealm
    _convertRealms() {
        const { realms } = this.props;
        const converted = [];

        for (const id in realms) {
            const realm = realms[id];
            const icon = realm.realmType === "text" ? "hashtag" : "microphone";
            const parent = realm.clusterId ? `Cluster-${ realm.clusterId }` : "root";
            converted.push({
                id: `Realm-${ id }`,
                content: <Menu.Item justifyStart compact><Icon name={ icon } /> { realm.name }</Menu.Item>,
                onClick: this._selectRealm,
                type: "item",
                next: realm.nextOrderableId ? `${ realm.nextOrderableType }-${ realm.nextOrderableId }` : null,
                prev: realm.prevOrderableId ? `${ realm.prevOrderableType }-${ realm.prevOrderableId }` : null,
                parent
            });
        }

        return converted;
    }

    // This constructs a linked list out of the data we receive from our server
    // It also uses a lookupTable to track the different linked lists that get
    // created so we can support movement between lists
    _constructList() {
        // We first conver the clusters and realms into the right format for our
        // dnd component
        const clustersArray = this._convertClusters();
        const realmsArray = this._convertRealms();

        // Then we grab all the realms that are not in a cluster
        const rootRealms = realmsArray.filter(({ parent }) => parent === "root");

        // We turn those along with the clusters into a linked list...
        const ll = new LinkedList(clustersArray.concat(rootRealms));

        // ...and save that linked list to our lookupTable for later use
        this.lookupTable["root"] = ll;

        // Then we go through our clusters and find all the realms it contains
        clustersArray.forEach(cluster => {
            const clusterRealms = realmsArray.filter(({ parent }) => parent === cluster.id);
            const subLl = new LinkedList(clusterRealms);
            // Again we save the linked list to our lookupTable
            this.lookupTable[cluster.id] = subLl;
            // We also update the original linked list item
            ll.updateItem(cluster.id, { children: subLl });
        });

        // Finally we return the root list we generated
        return ll;
    }

    // Move before moves the item with id itemId before the item with id
    // beforeId. If beforeId is null, it appends to the list instead.
    // fromListId and toListId optionally specify which lists to find and place
    // the item in.
    _moveBefore(beforeId, itemId, fromListId, toListId) {
        if (beforeId === itemId) return;

        fromListId = fromListId || "root";
        toListId = toListId || "root";

        const fromList = this.lookupTable[fromListId];
        const toList = this.lookupTable[toListId];
        const item = fromList.removeItem(itemId);

        toList.insertItemBefore(beforeId, { ...item, parent: toListId !== "root" ? toListId : null });
        this._updateOrder();
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
