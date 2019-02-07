const _count = new WeakMap ();

class Stack {
  constructor(){
    _count.set(this, []);
  }

  push(item) { this.count.push( item ); }
  
  pop() {
    let count = _count.get(this);
    item = count[count.length-1];
    this.count.splice(count.length-1);
    return item;
  }
  peek() { return count[count.length-1]; }
  get count(){ return this.count; }
}

