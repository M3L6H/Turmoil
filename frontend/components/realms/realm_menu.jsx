import React, { Component } from 'react';

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
                parent: null,
                children: {}
            };
        }

        for (const id in realms) {
            const realm = realms[id];
            const icon = realm.realmType === "text" ? "hashtag" : "microphone";
            const parent = realm.clusterId ? `Cluster-${ realm.clusterId }` : null;
            const datum = {
                id: `Realm-${ id }`,
                content: <Menu.Item justifyStart><Icon name={ icon } /> { realm.name }</Menu.Item>,
                onClick: this._selectRealm,
                type: "item",
                next: realm.nextOrderableId ? `${ realm.nextOrderableType }-${ realm.nextOrderableId }` : null,
                prev: realm.prevOrderableId ? `${ realm.prevOrderableType }-${ realm.prevOrderableId }` : null,
                parent
            };

            if (parent) {
                data[parent].children[`Realm-${ id }`] = datum;
            } else {
                data[`Realm-${ id }`] = datum;
            }
        }

        return data;
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
                    <DragNDrop data={ this._constructData() } update={ this._updateOrderables } />
                </Menu.Item>
            </Menu>
        );
    }
}
