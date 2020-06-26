import React, { Component } from 'react';
import { Menu } from ".";

/* Example data format
{
    1: {
        type: "folder",
        content: "Text Realms",
        next: "3",
        prev: null,
        parent: null
    },
    2: {
        type: "item",
        content: "general",
        next: null,
        prev: null,
        parent: 1
    },
    3: {
        type: "folder",
        content: "Voice Realms",
        next: null,
        prev: 1,
        parent: null
    },
    4: {
        type: "item",
        content: "general",
        next: null,
        prev: null,
        parent: 3
    }
}
*/

export default class DragNDrop extends Component {
    _insertItem(item, tree) {
        if (item.parent) {
            const subTree = this._insertItem(tree[item.parent], tree);
            if (!subTree[item.id]) {
                subTree[item.id] = item;
            }

            return subTree[item.id];
        } else {
            if (!tree[item.id]) {
                tree[item.id] = item;
            }

            return tree[item.id];
        }
    }

    _generateTree() {
        const tree = {};
        const { data } = this.props;

        for (const id in data) {
            this._insertItem(data[id], tree);
        }

        return tree;
    }

     _findHead(tree) {
        let head = Object.values(tree)[0];

        if (!head) return null;

        while (head.prev) {
            head = head.prev;
        }

        return head;
    }

    _renderList(tree) {
        let head = this._findHead(tree);

        if (!head) return null;
        
        const list = [];

        do {
            const { id, content, next, prev, parent, type, ...children } = head;
            if (type === "folder") {
                list.push(
                    <DragNDrop.Folder name={ content } key={ id }>
                        { this._renderList(children) }
                    </DragNDrop.Folder>
                );
            } else {
                list.push(
                    <DragNDrop.Item key={ id }>
                        { content }
                    </DragNDrop.Item>
                );
            }
            head = tree[next];
        } while (head);

        return list;
    }
    
    render() {
        const className = `shoebuckle dragndrop`;

        const tree = this._generateTree();
        // console.log("tree", tree);
        const list = this._renderList(tree);
        // console.log("list", list);
        
        return (
            <div className={ className } data-type="dragndrop">
                { list }
            </div>
        );
    }
}

DragNDrop.Item = class extends Component {
    render() {
        const {
            children,
            content
        } = this.props;

        const className = `dragndrop-item`;
        
        return (
            <div className={ className } data-type="dragndrop-item">
                { children || content }
            </div>
        );
    }
}

DragNDrop.Folder = class extends Component {
    render() {
        const {
            children,
            name
        } = this.props;

        const className = `dragndrop-folder`;

        return (
            <div className={ className } data-type="dragndrop-folder">
                { name }
                <div className="dragndrop-folder-children">
                    { children }
                </div>
            </div>
        );
    }
}