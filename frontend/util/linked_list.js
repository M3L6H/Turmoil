export default class LinkedList {
    constructor(items=[]) {
        this.size = 0;
        this.items = { 
            __head__: { content: null, next: "__tail__", prev: null, id: "__head__" }, 
            __tail__: { content: null, next: null, prev: "__head__", id: "__tail__" } 
        };

        this.head = this.items["__head__"];
        this.tail = this.items["__tail__"];

        items.forEach(item => {
            if (!item.next) {
                item.next = "__tail__";
                this.tail.prev = item.id;
            }

            if (!item.prev) {
                item.prev = "__head__";
                this.head.next = item.id;
            }
            
            this.items[item.id] = item;
            ++this.size;
        });
    }

    last() {
        if (this.size === 0) return null;
        return Object.assign({}, this.items[this.tail.prev]);
    }

    start() {
        const value = this.size > 0 ? this.getItem(this.head.next) : null;
        
        const it = {
            value,
            next: () => {
                it.value = value && this.items[it.value.next] ? this.getItem(it.value.next) : null;
            }
        };

        return it;
    }

    getItem(id) {
        const item = Object.assign({}, this.items[id]);

        if (item.next === "__tail__") {
            item.next = null;
        } 
        
        if (item.prev === "__head__") {
            item.prev = null;
        }

        return item;
    }

    updateItem(id, values) {
        this.items[id] = { ...this.items[id], ...values };
    }

    appendItem(insertItem) {
        const item = { ...insertItem, next: null, prev: null };
        this.items[item.id] = item;

        const prevItem = this.items[this.tail.prev];
        prevItem.next = item.id;

        item.prev = this.tail.prev;
        item.next = this.tail.id;
        this.tail.prev = item.id;

        ++this.size;
    }

    removeItem(id) {
        const item = this.items[id];
        if (!item) return;
        const prevItem = this.items[item.prev];
        prevItem.next = item.next;
        const nextItem = this.items[item.next];
        nextItem.prev = item.prev;
        delete this.items[id];
        --this.size;
        return item;
    }

    insertItemBefore(id, insertItem) {
        const item = Object.assign({}, insertItem);
        this.items[item.id] = item;

        let nextItem = id ? this.items[id] : this.tail;
        nextItem = nextItem || this.items[this.head.next];
        const prevItem = this.items[nextItem.prev];

        prevItem.next = item.id;
        item.prev = prevItem.id;
        nextItem.prev = item.id;
        item.next = nextItem.id;
        
        ++this.size;
    }

    moveItemBefore(beforeId, itemId) {
        this.insertItemBefore(beforeId, this.removeItem(itemId));
    }

    toString() {
        const items = [];
        let item = this.items[this.head.next];
        while (item !== this.tail) {
            items.push(item.content);
            item = this.items[item.next];
        }
        return `[${ items.join(", ") }]`;
    }
}