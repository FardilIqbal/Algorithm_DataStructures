class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
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
            this.head=node
        }else{
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
    //O(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }

    }
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
            prev.next - removedNode.next
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
}