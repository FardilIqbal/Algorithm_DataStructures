class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    //O(1)
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){ //until curr is null / falsey
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }
    //O(1)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            //Following code for if there is no tail, just head
            // let prev = this.head
            // while(prev.next){
            //     prev = prev.next
            // }
            // prev.next = node
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
            
        }
        this.size++

    }
    //O(n)
    insert(value,index){
        if(index<0 || index > this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size===1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
    removeFrom(index){
        if(index<0||index>= this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value ===value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i = 0
        let current = this.head
        while(current){
            if(current.value===value){
                return i
            }
            current = current.next
            i++
        }
        return -1

    }
    reverse(){
        let prev = null
        let current = this.head
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
}
module.exports = LinkedList