class MaxBinaryHeap {
        constructor() {
                this.values = [41,39,33,18,27,12]; 
        }

        insert(element){
                this.values.push(element)
                this.bubbleup()
        }
        bubbleup(){
                let id = this.values.length - 1
                const element = this.values[id]

                while(id > 0){
                        const parentId = Math.floor((id - 1)/2)
                        const parent = this.values[parentId]

                        if(element <= parent) break;

                        this.values[id] = parent
                        this.values[parentId] = element
                        id = parentId
                }
        }
}

let heap = new MaxBinaryHeap();
heap.insert(55)
heap.insert(5)
heap.insert(45)
heap.insert(455)
console.log(heap)