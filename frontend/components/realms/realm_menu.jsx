import React, { Component } from 'react';

import withWindowDimensions from '../hocs/with_window_dimensions';
import LinkedList from '../../util/linked_list';

import { Button, DragNDrop, Dropdown, Header, Icon, Menu } from '../shoebuckle';

import { ClusterForm } from '../clusters';
import { SummonsForm } from '../summonses';
import { RealmForm } from '../realms';

class RealmMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    
        this._handleDropdownClick = this._handleDropdownClick.bind(this);
        this._openClusterForm = this._openClusterForm.bind(this);
        this._openRealmForm = this._openRealmForm.bind(this);
        this._openSummonsForm = this._openSummonsForm.bind(this);
        this._selectRealm = this._selectRealm.bind(this);
        this._moveBefore = this._moveBefore.bind(this);
        this.lookupTable = {};
    }

    _handleDropdownClick() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    _openClusterForm() {
        this.setState({ dropdownOpen: false });
        this.props.openClusterForm();
    }

    _openRealmForm() {
        this.setState({ dropdownOpen: false });
        this.props.openRealmForm();
    }

    _openSummonsForm() {
        this.setState({ dropdownOpen: false });
        this.props.openSummonsForm();
    }

    _updateOrder() {
        if (!this.props.dimension) return;
        
        const data = {};
        const ll = this.lookupTable["root"];
        const it = ll.start();

        while (it.value) {
            const { id, type, parent, next, prev, children } = it.value;
            data[id] = { id, type, parent, next, prev };

            if (children) {
                const subIt = children.start();
    
                while (subIt.value) {
                    const { id, type, parent, next, prev } = subIt.value;
                    data[id] = { id, type, parent, next, prev };
                    subIt.next();
                }
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
                onClick: realm.realmType === "text" ? this._selectRealm : null,
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

    _renderMobileDropdown() {
        const { dropdownOpen } = this.state;
        const { dimension, inverted } = this.props;
        
        return (
            <Dropdown 
                inverted={ inverted } 
                open={ dropdownOpen } 
                onClick={ this._handleDropdownClick }
            >
                <Dropdown.Header>
                    <Header as="h3">{ dimension.name }</Header>
                    <Dropdown.Item horizontal>
                        <Button 
                            icon
                            onClick={ this._openSummonsForm }
                            primary
                        >
                            <Icon name="user-plus" />
                        </Button>
                        <Button icon><Icon name="bell" /></Button>
                        <Button icon><Icon name="cog" /></Button>
                    </Dropdown.Item>
                </Dropdown.Header>
                <Dropdown.Group>
                    <Dropdown.Item
                        onClick={ this._openRealmForm }
                        content="Create Realm"
                    />
                    <Dropdown.Item
                        onClick={ this._openClusterForm }
                        content="Create Category"
                    />
                </Dropdown.Group>
                <Dropdown.Group>
                    <Dropdown.Item
                        content="Change Nickname"
                    />
                    <Dropdown.Item>
                        Hide Muted Realms
                    </Dropdown.Item>
                    <Dropdown.Item
                        description="Anyone in the dimension can message you"
                    >
                        Allow Direct Messages
                    </Dropdown.Item>
                </Dropdown.Group>
            </Dropdown>
        );
    }

    _renderDesktopDropdown() {
        const { dropdownOpen } = this.state;
        const { inverted } = this.props;
        
        return (
            <Dropdown 
                inverted={ inverted }
                open={ dropdownOpen } 
                onClick={ this._handleDropdownClick }
            >
                <Dropdown.Group>
                    <Dropdown.Item 
                        onClick={ this._openSummonsForm }
                        primary
                    >
                        Invite People
                        <Icon name="user-plus" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Server Settings
                        <Icon name="cog" />
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={ this._openRealmForm }
                    >
                        Create Realm
                        <Icon name="plus-circle" />
                    </Dropdown.Item>
                    <Dropdown.Item
                        onClick={ this._openClusterForm }
                    >
                        Create Cluster
                        <Icon name="folder-plus" />
                    </Dropdown.Item>
                </Dropdown.Group>
                <Dropdown.Group>
                    <Dropdown.Item>
                        Notification Settings
                        <Icon name="bell" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Privacy Settings
                        <Icon name="shield-alt" />
                    </Dropdown.Item>
                </Dropdown.Group>
                <Dropdown.Group>
                    <Dropdown.Item>
                        Change Nickname
                        <Icon name="user-edit" />
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Hide Muted Realms
                    </Dropdown.Item>
                </Dropdown.Group>
            </Dropdown>
        );
    }

    _renderDropdown() {
        const { desktop } = this.props;
        return desktop ? this._renderDesktopDropdown() : this._renderMobileDropdown();
    }

    _renderHeader() {
        const { dimension } = this.props;
        
        if (dimension) {
            return (
                <>
                    <Header>
                        { dimension.name }
                    </Header>
                    { this._renderDropdown() }
                </>
            );
        } else {
            return <Header>Direct Messages</Header>;
        }
    }
    
    render() {
        const { 
            inverted
        } = this.props;

        const list = this._constructList();

        const lastOrderable = this.lookupTable["root"] && this.lookupTable["root"].last();
        if (lastOrderable) {
            const [ type, id ] = lastOrderable.id.split("-");
            lastOrderable.type = type;
            lastOrderable.id = id;
        }

        const firstOrderable = this.lookupTable["root"] && this.lookupTable["root"].first();
        if (firstOrderable) {
            const [ type, id ] = firstOrderable.id.split("-");
            firstOrderable.type = type;
            firstOrderable.id = id;
        }
        
        return (
            <Menu
                fluid
                inverted={ inverted }
                noHover
                stretch
                vertical
            >
                <Menu.Item>
                    { this._renderHeader() }
                </Menu.Item>
                <Menu.Item>
                    <DragNDrop list={ list } moveBefore={ this._moveBefore } />
                </Menu.Item>
                <ClusterForm lastOrderable={ lastOrderable } />
                <SummonsForm />
                <RealmForm firstOrderable={ firstOrderable } />
            </Menu>
        );
    }
}

export default withWindowDimensions(RealmMenu);