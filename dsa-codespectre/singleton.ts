class Singleton{
    private static singleton: Singleton;
    private logger: string[]  = [];
    constructor(){}
    public static getSingleton():Singleton{
        if(!Singleton.singleton){
            Singleton.singleton === new Singleton();
        }
        return Singleton.singleton
    }

    public pushLogger(data:string):void{
        this.logger.push(data)
    }

    public getLogger():string[]{
        return this.logger;
    }
}

let singletonOne = Singleton.getSingleton();
let singletonTwo = Singleton.getSingleton();

if(singletonOne === singletonTwo){
    console.log("both are same")
}