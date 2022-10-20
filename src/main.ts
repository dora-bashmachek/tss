// class Woman {
// first_name: string;
// messenger: Imessenger;
// constructor(first_name: string, messenger: Imessenger) {
//     this.first_name = first_name
//     this.messenger = messenger
// }
// }
// interface Imessenger {
//     user_name:string
// }

// class Instagram implements Imessenger {
//     user_name: string
//     constructor() {
//         this.user_name = 'd0r.a'
//     }
// }
// class Snapchat implements Imessenger {
//     user_name: string
//     constructor() {
//         this.user_name = 'd0r.a'
//     }
// }

// const snapchat = new Snapchat()
// const instagram = new Instagram();
// const woman = new Woman ('dora', instagram)
// console.log(woman);


//обобщение

function some<T>(a: T, b: T): T {
    return a
  }
  
  console.log(some(1,2));
  console.log(some('hi', 'dev'));