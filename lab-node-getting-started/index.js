class SortedList {
  constructor() {
    this.elements=[];
    this.length=0;
  }
  add(ele) {
     this.elements.push(ele);
     this.length++;
     this.elements.sort((a,b)=>a-b)
  }
  get(index) {
     if(index>this.length-1){
       throw new Error('INDEX OUT OF BOND')
     }
     else{
       return this.elements[index];
     }
  }
  max() {
   return Math.max(...this.elements)
  }
  min() {
    return Math.min(...this.elements)
  }
  avg() {
    var total=0;
    for(let i=0;i<this.length;i++){
      total+=this.elements[i]
    }
    return total/this.length
   
  }

  sum() {
    var total=0;
    for(let i=0;i<this.length;i++){
      total+=this.elements[i]
    }
    return total
   
  }
  
};

module.exports = SortedList;
