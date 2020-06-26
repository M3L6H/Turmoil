export default class LinkedList {
    constructor(items=[]) {
        this.size = 0;
        this.items = { 
            head: { content: null, next: "tail", prev: null, id: "head" }, 
            tail: { content: null, next: null, prev: "head", id: "tail" } 
        };

        this.head = this.items["head"];
        this.tail = this.items["tail"];

        items.forEach(item => {
            this.items[item.id] = item;
            ++this.size;
        });
    }

    appendItem(insertItem) {
        const item = { ...insertItem, next: null, prev: null };
        this.items[id] = item;

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

        const nextItem = id ? this.items[id] : this.tail;
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